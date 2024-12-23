



export default async function updateSlides(slides){

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        for (let j = 0; j < slide.items.length; j++) {
          const item = slide.items[j];
          item.itemExtra.type = item.itemExtra.command; 
        }
      }
      return slides;
}