
//21-Jan-2025
import loadBgImages from "./loadBgImages";
import loadSprites from "./loadSprites";
import loadNarration from "./loadNarration";
import loadPresentationImages from "./loadPresentationImages";
import Icons from "./icons";

export default async function loadAssets(slides, imagesUrl = null, soundUrl = null) {
    if (!Array.isArray(slides)) {
        throw new Error("Invalid input: 'slides' must be an array.");
    }

    try {
        const bgImages = await loadBgImages();
        const spriteImages = await loadSprites();
        const narration = soundUrl ? await loadNarration(soundUrl) : null;
        const presentationImages = await loadPresentationImages(imagesUrl);
        return {
            bgImages,
            spriteImages,
            presentationImages,
            narration,
            icons: Icons
        };
    } catch (error) {
        console.error('Error loading assets:', error.message, { slides, imagesUrl, soundUrl });
        throw error;
    }
}
