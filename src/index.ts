interface Video extends HTMLVideoElement {

}

interface VideoDetails {
    duration?: number
}

/**
 * @param file Video file to get details
 */
function VideoDetailer(file: File): Promise<Video> {
    return new Promise(function (resolve: any, reject: any) {
        var url: string = URL.createObjectURL(file)
        var video: Video = document.createElement('video')
        video.preload = "metadata"
        video.addEventListener("loadedmetadata", function () {
            resolve(video)
        })
        video.src = url
    })
}

export default VideoDetailer