
import uuid from "./uuid";

export default function getNewSlide(type,slideExtra ={}){
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