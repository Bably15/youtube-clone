import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
    faClockRotateLeft,
    faPlay,
    faClock,
    faThumbsUp,
    faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import SubMenu from "../components/Sidebar/SubMenu";
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
    return (
        <div className="sidebar">
            <SubMenu menuList={sidebarFeaturedMenu} />
            <hr />
            <SubMenu menuList={sidebarPreferencesMenu} />
            <hr />
            <SubMenu menuList={sidebarFeaturedMenu} />
        </div>
    );
};

export default Sidebar;
