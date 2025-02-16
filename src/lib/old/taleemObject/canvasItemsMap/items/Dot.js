import  uuid  from '../uuid';

export default class Dot {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'dot',

      x: 100,
      y: 100,
      
      label: "label",
      dot_width: 25,
      text_color: "yellowbezier",
      text_size: 40,
      
      color: "red",
      globalAlpha: 1
    };
  }
  
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'label', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'dot_width', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_color', type:'Color',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_size', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}

  static draw(ctx, itemExtra) {
    const {
      x,
      y,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
  } = itemExtra;

  ctx.save();
  ctx.globalAlpha = globalAlpha;

  // Draw the dot
  ctx.beginPath();
  ctx.arc(
      x,
      y,
      dot_width / 2,
      0,
      2 * Math.PI
  );
  ctx.fillStyle = color;
  ctx.fill();

  // Draw the label
  ctx.font = `${text_size}px Arial`;
  ctx.fillStyle = text_color;
  ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y) + parseInt(dot_width) * 2
  );

  ctx.restore();
  }

  static isHit(itemExtra, mouseX, mouseY) {
    const dx = mouseX - itemExtra.x;
    const dy = mouseY - itemExtra.y;
    return dx * dx + dy * dy <= (itemExtra.dot_width / 2) ** 2;
  }

  static boundingRectangleX(itemExtra) {
    return itemExtra.x - itemExtra.dot_width / 2;
  }

  static boundingRectangleY(itemExtra) {
    return itemExtra.y - itemExtra.dot_width / 2;
  }

  static width(itemExtra) {
    return itemExtra.dot_width;
  }

  static height(itemExtra) {
    return itemExtra.dot_width;
  }

  static setWidth(itemExtra, newWidth) {
    itemExtra.dot_width = newWidth;
  }

  static setHeight(itemExtra, newHeight) {
    itemExtra.dot_width = newHeight;
  }


}////////////////////////////////////////