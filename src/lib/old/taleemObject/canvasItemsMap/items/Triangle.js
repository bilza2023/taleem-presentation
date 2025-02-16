import  uuid  from '../uuid';

// add type in data
// remove item in draw
// change class name
export default class Triangle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'triangle',

      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,

      lineWidth: 2,
      filled: false,

      dash:0,
      gap:0,
      
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'x3', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'y3', type:'Number',config:{min:0,max:2000,step:1} });

  dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
static draw(ctx, itemExtra) {
  ctx.save();

  // Extract values
  const x1 = itemExtra.x1;
  const y1 = itemExtra.y1;
  const x2 = itemExtra.x2;
  const y2 = itemExtra.y2;
  const x3 = itemExtra.x3;
  const y3 = itemExtra.y3;
  const color = itemExtra.color || 'black';
  const filled = itemExtra.filled;
  const lineWidth = itemExtra.lineWidth || 2;
  const dash = itemExtra.dash || 0;
  const gap = itemExtra.gap || 0;
  const globalAlpha = itemExtra.globalAlpha || 1;

 
// Set properties
  ctx.lineWidth = lineWidth;
  ctx.globalAlpha = globalAlpha;
  ctx.strokeStyle = color;

  // Set line dash pattern
  if (dash > 0 && gap > 0) {
    ctx.setLineDash([dash, gap]);
  } else {
    ctx.setLineDash([]); // Reset to solid line if dash or gap is 0
  }

  // Draw filled or outlined triangle
  if (filled) {
    // Draw outline first (with dash and gap)
    ctx.stroke();

    // Then fill the shape
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
  } else {
    // Draw the outline for non-filled triangles (with dash and gap)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
  }

  // Restore the context state
  ctx.restore();
}

static isHit(itemExtra, mouseX, mouseY) {
  const { x1, y1, x2, y2, x3, y3 } = itemExtra;
  const area = (x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2;
  const area1 = (mouseX*(y2 - y3) + x2*(y3 - mouseY) + x3*(mouseY - y2)) / 2;
  const area2 = (x1*(mouseY - y3) + mouseX*(y3 - y1) + x3*(y1 - mouseY)) / 2;
  const area3 = (x1*(y2 - mouseY) + x2*(mouseY - y1) + mouseX*(y1 - y2)) / 2;
  return Math.abs(area - (area1 + area2 + area3)) < 0.1;
}

static boundingRectangleX(itemExtra) {
  return Math.min(itemExtra.x1, itemExtra.x2, itemExtra.x3);
}

static boundingRectangleY(itemExtra) {
  return Math.min(itemExtra.y1, itemExtra.y2, itemExtra.y3);
}

static width(itemExtra) {
  return Math.max(itemExtra.x1, itemExtra.x2, itemExtra.x3) - Math.min(itemExtra.x1, itemExtra.x2, itemExtra.x3);
}

static height(itemExtra) {
  return Math.max(itemExtra.y1, itemExtra.y2, itemExtra.y3) - Math.min(itemExtra.y1, itemExtra.y2, itemExtra.y3);
}

static setWidth(itemExtra, newWidth) {
  const scale = newWidth / Triangle.width(itemExtra);
  itemExtra.x2 = itemExtra.x1 + (itemExtra.x2 - itemExtra.x1) * scale;
  itemExtra.x3 = itemExtra.x1 + (itemExtra.x3 - itemExtra.x1) * scale;
}

static setHeight(itemExtra, newHeight) {
  const scale = newHeight / Triangle.height(itemExtra);
  itemExtra.y2 = itemExtra.y1 + (itemExtra.y2 - itemExtra.y1) * scale;
  itemExtra.y3 = itemExtra.y1 + (itemExtra.y3 - itemExtra.y1) * scale;
}


}