# To interact with the UI on browser we have DOM API(provided by the browser only),
which provides an object "document" which is a tree-form representation of UPI.
In this object, we have nodes(elements) which have mainly 4 properties:
1. create - document.createElement
2. read - document.querySelector
3. update - document.updatechild
4. delete - document.remove

# Types of nodes
1. Root Node:- the top node in the tree(in case of html, it is HTML).
2. Child Node: A node directly inside another node.
3. Descendant Node : A node anywhere inside another node.
4. Parent Node : A node which has another node inside it.
5. Sibling Node : Nodes that sit on the same level in DOM.
6. Text Node : A node containing a text string.   

* div is a block-level box,i.e., the size of the box will be according to 
the content present in it.
