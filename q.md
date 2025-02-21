
- I have a library taleem-canvas (this is basically a html5 canvas draw-engine.it takes "items" and convert them into object and edit them).

- now i want to wrap it into a svelte component "As An Editor"
- I want to create an editor using which i edit the items on editor.

- The first svelte component that i have added is 
    StaticPlayer.svelte: Which is a DUMB draw engine which just gets items and display them.

- One of the problem that creates problems is that in svelte the items are in json format where as the talleem-canvas convert these items into objects so there is a problem in triggering svelte redraw trigger and communication between both.

- Another important code is Editor.js which takes in taleem-canvas which is a simple draw-engine and add Handles for editing of the items.it also change their itemExtra fields.
