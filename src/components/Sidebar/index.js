import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
    faClockRotateLeft,
    faPlay,
    faClock,
    faThumbsUp,
    faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import SubMenu from "./SubMenu";

const Sidebar = () => {
    const sidebarFeaturedMenu = [
        {
            icon: faHouse,
            text: "Home",
        },
        {
            icon: faHouse,
            text: "Shorts",
        },
        {
            icon: faHouse,
            text: "Subscriptions",
        },
    ];
    const sidebarPreferencesMenu = [
        {
            icon: faBookmark,
            text: "Library",
        },
        {
            icon: faClockRotateLeft,
            text: "History",
        },
        {
            icon: faPlay,
            text: "Your Videos",
        },
        {
            icon: faClock,
            text: "Watch later",
        },
        {
            icon: faThumbsUp,
            text: "Liked Videos",
        },
    ];
    const sidebarSubscriptionsMenu = [
        {
            icon: faBookmark,
            text: "Adulting Diaries",
        },
        {
            icon: faClockRotateLeft,
            text: "History Channel",
        },
        {
            icon: faPlay,
            text: "koko",
        },
        {
            icon: faClock,
            text: "Sonal eats",
        },
        {
            icon: faThumbsUp,
            text: "kelly sings",
        },
    ];
    return (
        <div className="sidebar">
            <SubMenu menuList={sidebarFeaturedMenu} />
            <hr />
            <SubMenu menuList={sidebarPreferencesMenu} />
            <hr />
            <SubMenu menuList={sidebarSubscriptionsMenu} />
        </div>
    );
};

export default Sidebar;
