


export default async function loadPresentationImages(presentationImagesList){
//   debugger;
for (let i = 0; i < presentationImagesList.length; i++) {
    const item = presentationImagesList[i];
  
    if (item.itemExtra.type == 'image') {
      try {
          const url =  item.itemExtra.src ;
          const img = await loadImage( url);
          item.itemExtra.image = img;
          
      }   catch (err) {
        // console.error('Error loading image:', err);
        // do nothing 
      }
    }
  }

}



async function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
}