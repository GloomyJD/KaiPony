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
