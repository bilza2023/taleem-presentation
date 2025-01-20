
import loadBgImages from "./loadBgImages";
import loadSprites from "./loadSprites";
import loadNarration from "./loadNarration";
import Icons from "./icons";

export default async function loadAssets(sldies=[],imagesUrl=null,soundUrl=null,soundFileName=null){
 try{
 
 const bgImages = await  loadBgImages();
 const spriteImages = await loadSprites();
 let   narration=null;

    if(soundFileName && soundUrl){
        narration = await loadNarration(soundUrl,soundFileName);
    }

 const presentationImages = [];
 
    return {bgImages, spriteImages , presentationImages ,narration ,icons:Icons}
  } catch(error){
        console.error('Error loading assets:', error);
        throw error;
 }

} // loadAssets