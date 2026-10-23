"""Lectura estructural de la fuente local sin reserializar su MathML."""
from html.parser import HTMLParser
from html import unescape
import re

class Node:
    def __init__(self, tag, attrs, start, inner_start, parent=None):
        self.tag, self.attrs, self.start, self.inner_start = tag, dict(attrs), start, inner_start
        self.end = self.inner_end = inner_start
        self.parent, self.children = parent, []
    def walk(self, tag=None):
        for child in self.children:
            if tag is None or child.tag == tag:
                yield child
            yield from child.walk(tag)
    def raw(self, source):
        return source[self.start:self.end]
    def inner(self, source):
        return source[self.inner_start:self.inner_end]
    def text(self, source):
        return unescape(re.sub('<[^>]+>', ' ', self.inner(source))).strip()

class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=False)
        self.source = source
        self.offsets = [0]
        for match in re.finditer('\n', source): self.offsets.append(match.end())
        self.root = Node('document', [], 0, 0)
        self.stack = [self.root]
        self.feed(source)
    def position(self):
        line, column = self.getpos()
        return self.offsets[line-1]+column
    def handle_starttag(self, tag, attrs):
        start = self.position()
        node = Node(tag, attrs, start, start+len(self.get_starttag_text()), self.stack[-1])
        self.stack[-1].children.append(node)
        if tag not in {'meta','link','br','hr','img','input','source','wbr','area','base','embed','param','track','col'}:
            self.stack.append(node)
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack[i].inner_end = self.position()
                self.stack[i].end = self.source.index('>',self.position())+1
                self.stack = self.stack[:i]
                break
    def by_id(self, id):
        return next(n for n in self.root.walk() if n.attrs.get('id') == id)
