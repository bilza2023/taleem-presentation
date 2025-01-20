
export default async function loadPresentationImages(imageNames, imagesUrl) {
    if (!Array.isArray(imageNames) || typeof imagesUrl !== 'string') {
        throw new Error('Invalid arguments: imageNames must be an array, and imagesUrl must be a string.');
    }

    // Helper function to load a single image
    async function loadSingleImage(imageName) {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => resolve({
                name: imageName,
                img
            });

            img.onerror = () => reject(new Error(`Failed to load image: ${imagesUrl}${imageName}`));

            img.src = `${imagesUrl}${imageName}`;
        });
    }

    try {
        // Load all images concurrently
        const presentationImages = await Promise.all(
            imageNames.map(imageName => loadSingleImage(imageName))
        );

        return presentationImages; // Array of { name, img } objects
    } catch (error) {
        console.error('Error loading presentation images:', error);
        throw error;
    }
}
