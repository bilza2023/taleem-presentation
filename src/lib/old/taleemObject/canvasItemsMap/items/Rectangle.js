import  uuid  from '../uuid';


export default class Rectangle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',   config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
  
  static draw(ctx, data) {
    ctx.save();
    // debugger;
      // Extract values
      const x = data.x;
      const y = data.y;
      const width = data.width;
      const height = data.height;
      const color =  data.color ?? 'white';
      const filled = data.filled;
      const dash =   data.dash ?? 0;
      const gap =    data.gap ?? 0;
      const lineWidth =  data.lineWidth ?? 1;
      // debugger;
    
      // Set properties
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = data.globalAlpha;
    

      // Set line dash pattern
      if (dash === 0 && gap === 0) {
          ctx.setLineDash([]);
      } else {
          ctx.setLineDash([dash, gap]);
      }
      
      if (filled) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, width, height);
      } else {
          ctx.strokeStyle = color;
          ctx.strokeRect(x, y, width, height);
      }
    
      // Restore the context state
      ctx.restore();
  }
  static isHit(itemExtra, mouseX, mouseY) {
//  debugger;
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
    return itemExtra.height; //// calculate here
  }

  static setWidth(itemExtra, newWidth) {
    itemExtra = newWidth;
  }

  static setHeight(itemExtra, newHeight) {
    itemExtra.height = newHeight;
  }

}/////////////////