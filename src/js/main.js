const LIVE_HIGH_QUALITY_URL = 'https://tilos-radio-for-kaios.netlify.app/live/high';
const LIVE_MEDIUM_QUALITY_URL = 'https://tilos-radio-for-kaios.netlify.app/live/medium';
const LIVE_LOW_QUALITY_URL = 'https://tilos-radio-for-kaios.netlify.app/live/low';

if (navigator.mozAudioChannelManager) {
    navigator.mozAudioChannelManager.volumeControlChannel = 'content';
}

let isPlaying = false;

const player = new Audio();
player.mozAudioChannelType = 'content';
player.type = 'audio/mpeg';
player.preload = 'none';
player.src = LIVE_MEDIUM_QUALITY_URL;

const volume = navigator.volumeManager;

const offlineElement = document.querySelector('.offline');
const softKeyEnterElement = document.querySelector('.softkey__enter');
const mbpsRateElement = document.querySelector('.mbps__rate');

const toggleOfflineAlert = () => {
    const isOnline = navigator.onLine;
    const toggle = isOnline ? 'add' : 'remove';

    offlineElement.classList[toggle]('hidden');
};

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

document.addEventListener('keydown', event => {
    const keyPressed = event.key;

    if (!['1', '2', '3'].includes(keyPressed)) {
        return;
    }

    if (isPlaying) {
        player.pause();
    }

    if (keyPressed === '1') {
        player.src = LIVE_HIGH_QUALITY_URL;
        mbpsRateElement.innerHTML = '256';
    }

    if (keyPressed === '2') {
        player.src = LIVE_MEDIUM_QUALITY_URL;
        mbpsRateElement.innerHTML = '128';
    }

    if (keyPressed === '3') {
        player.src = LIVE_LOW_QUALITY_URL;
        mbpsRateElement.innerHTML = '32';
    }

    if (isPlaying) {
        player.play();
    }
});

window.addEventListener('online', toggleOfflineAlert);

window.addEventListener('offline', toggleOfflineAlert);

toggleOfflineAlert();
