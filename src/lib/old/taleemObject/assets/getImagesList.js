
//getImagesList

export default async function getImagesList(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.files;  // Returns array of image filenames
    } catch (error) {
        console.error("Error fetching images list:", error);
        return [];
    }
}


