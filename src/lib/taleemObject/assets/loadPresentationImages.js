export default async function loadPresentationImages(imagesUrl, imageNames = ['wood.jpg']) {
    if (!Array.isArray(imageNames) || typeof imagesUrl !== 'string') {
        throw new Error('Invalid arguments: imageNames must be an array, and imagesUrl must be a string.');
    }

    try {
        // Load all images concurrently
        const imageEntries = await Promise.all(
            imageNames.map(imageName => loadSingleImage(imageName, imagesUrl))
        );

        // Convert array of image entries to a Map
        const presentationImages = new Map(imageEntries.map(({ name, img }) => [name, img]));

        return presentationImages; // A Map with name as key and Image object as value
    } catch (error) {
        console.error('Error loading presentation images:', error);
        throw error;
    }
}

///////////////////////////////
// Helper function to load a single image
async function loadSingleImage(imageName, imagesUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve({
            name: imageName,
            img
        });

        img.onerror = () => reject(new Error(`Failed to load image: ${imagesUrl}${imageName}`));

        img.src = `${imagesUrl}${imageName}`;
        // console.log(`Image ${imageName} source:`, img.src);

    });
}
