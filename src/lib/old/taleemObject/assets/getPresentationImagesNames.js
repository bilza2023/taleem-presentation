

import Canvas from "../canvas.js";
import Eqs from "../eqs.js";


export default async function getPresentationImagesNames(slides){
    const canvasImages = await Canvas.getPresentationImages(slides);
    const eqsImages    = await Eqs.getPresentationImages(slides);

    return [...canvasImages, ...eqsImages];
}