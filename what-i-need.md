

    export let slideExtra;
    export let items;
    export let assets;
     export let preDraw = () => {};   // Default empty function
    export let postDraw = () => {};  // Default empty function

    export let eventMouseMove = () => {};
    export let eventMouseDown = () => {};
    export let eventMouseUp = () => {};  
    export let eventClick = () => {};  
    export let eventDblClick = () => {};  


    let canvas;
    let ctx;
    let interval;
    let isInitialized = false;