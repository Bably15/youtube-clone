import "./video.css";
import japanImg from "../../assets/images/japan.jpg";
import mukbang from "../../assets/images/mukbang.jpg";
import playlist from "../../assets/images/playlist.jpg";
import ghibli from "../../assets/images/ghibli.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import garden from "../../assets/images/garden.jpg";
const VideoItem = () => {
    const videoItems = [
        {
            logo: japanImg,
            url: "9qRfIuigog4",
            title: "Life in Japan",
            channel: "koko",
        },
        {
            logo: garden,
            url: "JPR5YT1FXL0",
            title: "How to make a balcony garden",
            channel: "cottage",
        },
        {
            logo: kitchen,
            url: "gK8gxxIV_Hc",
            title: "Cooking lentil soup",
            channel: "food diaries",
        },
        {
            logo: mukbang,
            url: "I99Q7_tP-4U",
            title: "Spicy panipuri challenge",
            channel: "Sonal eats",
        },
        {
            logo: playlist,
            url: "LqME1y6Mlyg?feature=share",
            title: "Study playlist",
            channel: "mac mason",
        },
        {
            logo: ghibli,
            url: "LQ2Ym4G01mA",
            title: "Studio Ghibli songs",
            channel: "miyazaki",
        },
    ];
    return (
        <div className="video">
            {videoItems.map((item) => (
                <div className="video__item">
                    <iframe
                        className="video__item--link"
                        width="100%"
                        // height="160"
                        src={`https://www.youtube.com/embed/${item.url}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <div className="video__item--link--utilities">
                        <img
                            src={item.logo}
                            className="video__item--image"
                        ></img>
                        <div>
                            <h3 className="video__item--title">{item.title}</h3>
                            <span className="video__item--channel">
                                {item.channel}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default VideoItem;
