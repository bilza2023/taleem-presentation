import  uuid  from '../uuid';

// add type in data
// remove item in draw
// change class name
export default class Image {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'image',

      x: 50,
      y: 50,
      
      src: 'wood.jpg', //????
      image: null, //????
      
      width: 200,
      height: 200,

      globalAlpha: 1
    };
  }
  
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'src', type:'Text',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',   config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

return dialogueBox;
}

  static draw(ctx, itemExtra,assets) {
      ctx.save();
      ctx.globalAlpha = itemExtra.globalAlpha;
  
      // Check if the image source exists in the Map
      const cachedImage = assets.presentationImages.get(itemExtra.src);
  
      if (!cachedImage) {
          console.error(`Image ${itemExtra.src} not found.`);
          ctx.restore();
          return; // Exit if the image is not found
      }
  
      // Draw the cached image
      ctx.drawImage(
          cachedImage, 
          itemExtra.x, 
          itemExtra.y, 
          itemExtra.width, 
          itemExtra.height
      );
  
      ctx.restore();
  }
  
  static isHit(itemExtra, mouseX, mouseY) {
    return (
      mouseX >= itemExtra.x &&
      mouseX <= itemExtra.x + itemExtra.width &&
      mouseY >= itemExtra.y &&
      mouseY <= itemExtra.y + itemExtra.height
    );
  }

  static boundingRectangleX(itemExtra) {
    return itemExtra.x;
  }

  static boundingRectangleY(itemExtra) {
    return itemExtra.y;
  }

  static width(itemExtra) {
    return itemExtra.width;
  }

  static height(itemExtra) {
    return itemExtra.height;
  }

  static setWidth(itemExtra, newWidth) {
    itemExtra.width = newWidth;
  }

  static setHeight(itemExtra, newHeight) {
    itemExtra.height = newHeight;
  }


  
}/////////////////////
