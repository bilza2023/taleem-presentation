import {SlideObject} from '$lib';




export default async function updateBareMinimum(slides){
    let newSlides = [];
    let time = 0;

    for (let i = 0; i < slides.length; i++) {
        const slide =   slides[i];
        if(slide.type.toLocaleLowerCase() == 'eqs'){
        const newSlide = SlideObject.getNewSlide('eqs'); 

            newSlide.startTime = time;

            // --items
            for (let j = 0; j < slide.items.length; j++) {
              let item =   slide.items[j];
              const newItem = SlideObject.Eqs.getNewItem(item.itemExtra.type);
              //=======================================
              newItem.itemExtra.type = item.itemExtra.type; 
              newItem.itemExtra.code = item.itemExtra.code; 
              newItem.itemExtra.sp = item.itemExtra.sp; 
              //=======================================  
              
              newItem.itemExtra.startTime = time;
              time += 10;
              newItem.itemExtra.endTime = time;

              newSlide.items.push(newItem);
            }
            newSlide.endTime = time;
        
        newSlides.push(newSlide );
        }
        
      }
return newSlides;
}//updateBaseMinimum