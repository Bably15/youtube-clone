import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import youtubeLogo from "../../assets/images/youtubeLogo.jpg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar--logo">
                <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
                <a href="#youtubeIcon">
                    {<img className="ytLogo" src={youtubeLogo} alt="" />}
                </a>
            </div>
            <div className="navbar--search__bar">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Search"
                />
                <button className="search-button">
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ color: "#ffffff" }}
                    />
                </button>
                <button className="microphone">
                    <FontAwesomeIcon
                        icon={faMicrophone}
                        style={{ color: "#ffffff" }}
                    />
                </button>
            </div>
            <div className="action--buttons">
                <a href="createVideo">
                    {" "}
                    <FontAwesomeIcon
                        icon={faVideo}
                        style={{ color: "#ffffff" }}
                    />
                </a>
                <a href="#bell">
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{ color: "#ffffff" }}
                    />
                </a>
                <a href="/user">
                    {" "}
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "#ffffff" }}
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
