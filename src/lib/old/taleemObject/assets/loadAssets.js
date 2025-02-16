
//21-Jan-2025
import loadBgImages from "./loadBgImages";
import loadSprites from "./loadSprites";
import loadNarration from "./loadNarration";
import loadPresentationImages from "./loadPresentationImages";
import getPresentationImagesNames from "./getPresentationImagesNames.js";
import getImagesList from "./getImagesList";
import Icons from "./icons";
///////////////////////////////////////////////////////////////
const getImagesUrl = "https://taleem.help/api/get-images-list";

export default async function loadAssets(slides, imagesUrl = null, soundUrl = null,isEditorMode=false) {
    if (!Array.isArray(slides)) {
        throw new Error("Invalid input: 'slides' must be an array.");
    }

    try {
        const bgImages = await loadBgImages();
        const spriteImages = await loadSprites();
        const narration = soundUrl ? await loadNarration(soundUrl) : null;
        const presentationImagesNames = await getPresentationImagesNames(slides);
        const imagesList = await getImagesList(getImagesUrl);  
        const presentationImages = await loadPresentationImages(imagesUrl,presentationImagesNames,isEditorMode);
        return {
            bgImages,
            spriteImages,
            presentationImages,
            narration,
            imagesList,
            icons: Icons
        };
    } catch (error) {
        console.error('Error loading assets:', error.message, { slides, imagesUrl, soundUrl });
        throw error;
    }
}

