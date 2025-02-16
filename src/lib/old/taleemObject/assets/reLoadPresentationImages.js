

import loadPresentationImages from "./loadPresentationImages";
import getPresentationImagesNames from "./getPresentationImagesNames";


export default async function reLoadPresentationImages(slides, imagesUrl = null) {
 
    debugger;

    const presentationImagesNames = await getPresentationImagesNames(slides);
    const presentationImages = await loadPresentationImages(imagesUrl,presentationImagesNames,isEditorMode);
    return presentationImages;
}

