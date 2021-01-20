const LIVE_STREAM_URL = 'https://tilos-radio-for-kaios.netlify.app/live/medium';

if (navigator.mozAudioChannelManager) {
    navigator.mozAudioChannelManager.volumeControlChannel = 'content';
}

let isPlaying = false;

const player = new Audio();
player.mozAudioChannelType = 'content';
player.type = 'audio/mpeg';
player.preload = 'none';
player.src = LIVE_STREAM_URL;

const volume = navigator.volumeManager;

const softKeyEnterElement = document.querySelector('.softkey__enter');

document.addEventListener('keydown', event => {
    const keyPressed = event.key;

    if (keyPressed !== 'Enter') {
        return;
    }

    if (isPlaying) {
        player.pause();
        softKeyEnterElement.innerHTML = 'Play';
    } else {
        player.play();
        softKeyEnterElement.innerHTML = 'Pause';
    }

    isPlaying = !isPlaying;
});

document.addEventListener('keydown', event => {
    const keyPressed = event.key;

    if (!['ArrowUp', 'ArrowDown'].includes(keyPressed)) {
        return;
    }

    if (keyPressed === 'ArrowUp') {
        volume?.requestUp();
    }

    if (keyPressed === 'ArrowDown') {
        volume?.requestDown();
    }
});
