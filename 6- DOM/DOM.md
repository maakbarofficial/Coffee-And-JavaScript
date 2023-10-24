## The Difference Between an HTMLCollection and a NodeList

A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.

# Not an Array!

A NodeList may look like an array, but it is not.

You can loop through a NodeList and refer to its nodes by index.

But, you cannot use Array methods like push(), pop(), or join() on a NodeList.
