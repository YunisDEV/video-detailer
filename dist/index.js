/**
 * @param file Video file to get details
 */
function VideoDetailer(file) {
    return new Promise(function (resolve, reject) {
        var url = URL.createObjectURL(file);
        var video = document.createElement('video');
        video.preload = "metadata";
        video.addEventListener("loadedmetadata", function () {
            resolve(video);
        });
        video.src = url;
    });
}
export default VideoDetailer;
