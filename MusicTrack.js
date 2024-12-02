const videos = document.querySelectorAll('.video iframe');


function pauseAllVideos(except) {
    videos.forEach(video => {
        if (video !== except) {
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });
}

videos.forEach(video => {
    video.addEventListener('load', () => {
        const player = video.contentWindow;
        player.postMessage('{"event":"command","func":"addEventListener","args":["onStateChange"]}', '*');
    });

    video.contentWindow.addEventListener('message', (event) => {
        if (event.data === 1) { 
            pauseAllVideos(video);
        }
    });
});