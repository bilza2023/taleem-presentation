
export default async function loadPresentationImages(imagesUrl, imageNames) {
    if (!Array.isArray(imageNames) || typeof imagesUrl !== 'string') {
        throw new Error('Invalid arguments: imageNames must be an array, and imagesUrl must be a string.');
    } 

    const presentationImages = new Map();

    await Promise.all(
        imageNames.map(imageName =>
            loadSingleImage(imageName, imagesUrl)
                .then(({ name, img }) => {
                    if (img) presentationImages.set(name, img);
                })
                .catch(error => {
                    console.warn(`Skipping image: ${error.message}`);
                })
        )
    );

    return presentationImages;
}

async function loadSingleImage(imageName, imagesUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve({ name: imageName, img });
        img.onerror = () => {
            const errorMsg = `Failed to load image: ${imagesUrl}${imageName}`;
            console.warn(errorMsg);
            resolve({ name: imageName, img: null }); // Always resolve, just log the error
        };
        img.src = `${imagesUrl}${imageName}`;
    });
}
