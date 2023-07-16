import "./video.css";
const VideoItem = () => {
    const videoItems = [
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
    ];
    return (
        <div className="video">
            {videoItems.map((item) => (
                <div className="video__item">
                    <iframe
                        width="100%"
                        height="160"
                        src={`https://www.youtube.com/embed/${item.url}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <h1>{item.title}</h1>
                    <span>{item.channel}</span>
                </div>
            ))}
        </div>
    );
};
export default VideoItem;
