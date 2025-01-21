import { Howl } from 'howler';

export default async function loadNarration(soundUrl) {
    try {
        return new Promise((resolve, reject) => {
            try {
                const sound = new Howl({
                    src: [soundUrl],
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

