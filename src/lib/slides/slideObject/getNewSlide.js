
import uuid from "./uuid";

export default function getNewSlide(type,slideExtra ={}){
    slideExtra.imagesUrl = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/';
    return {
        uuid: uuid(),
        version: 'basic',
        startTime: 0,
        endTime: 10,
        type ,  
        template: '',
        items: [],
        slideExtra,
    }

}