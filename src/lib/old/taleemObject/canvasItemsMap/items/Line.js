import  uuid  from '../uuid';

export default class Line {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'line',

      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,

      lineWidth: 1,
      dash     : 0,
      gap      : 0,

      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
  
return dialogueBox;
}
  static draw(ctx, itemExtra) {
    // Save the current context state
    ctx.save();
    // Extract values
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || 'black';
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;

    // Set properties
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.globalAlpha = globalAlpha;

    // Set line dash pattern
    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Restore the context state
    ctx.restore();
  }
  static isHit(itemExtra, mouseX, mouseY) {
    const { x, y, width, height, lineWidth } = itemExtra;
    
    // Compute line end points
    const x1 = x;
    const y1 = y;
    const x2 = x + width;
    const y2 = y + height;
    
    // Compute distance from mouse to line
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lengthSq = dx * dx + dy * dy;
    const t = Math.max(0, Math.min(1, ((mouseX - x1) * dx + (mouseY - y1) * dy) / lengthSq));
    const closestX = x1 + t * dx;
    const closestY = y1 + t * dy;

    // Check if the distance to the line is within line width
    const distSq = (mouseX - closestX) ** 2 + (mouseY - closestY) ** 2;
    return distSq <= (lineWidth / 2) ** 2;
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