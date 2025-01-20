

export default async function loadNarration(soundUrl, soundFileName) {
    try {
        const url = `${soundUrl}${soundFileName}`;
        return new Promise((resolve, reject) => {
            try {
                const sound = new Howl({
                    src: [url],
                    volume: 1.0,
                    html5: true,
                    onload: () => {
                        resolve(sound);
                    },
                    onloaderror: (id, error) => {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    } catch (error) {
        console.error("Error loading narration:", error);
        throw error;
    }
}

