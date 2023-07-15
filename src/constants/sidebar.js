import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
const Sidebar = () => {
    const sidebarMenuItems = [
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
    return (
        <ul>
            {sidebarMenuItems.map((item, index) => (
                <li key={index}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                </li>
            ))}
        </ul>
    );
};

export default Sidebar;
