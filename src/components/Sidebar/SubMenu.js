import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubMenu = ({ menuList }) => {
    return (
        <div className="sidebar__container">
            <ul className="sidebar__container--list">
                {menuList.map((item, index) => (
                    <li className="sidebar__container--list--item" key={index}>
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubMenu;
