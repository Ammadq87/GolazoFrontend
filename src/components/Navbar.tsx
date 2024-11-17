import { faSearch, faBullseye, faBell, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link } from "react-router-dom"

interface ActionItem {
    icon: any;
    name: string;
    link?: string;
}

export default function Navbar() {

    const actionItems: ActionItem[] = [
        { icon: faSearch, name: "Search" },
        { icon: faBullseye, name: "Goals", link: "/goals" },
        { icon: faBell, name: "Notifications", link: "/notifications" },
        { icon: faUser, name: "Account", link: "/account" }
    ]

    const [shakeItem, setShakeItem] = useState<string>("string");
    const [hideMenu, setHideMenu] = useState<boolean>(false)

    function MapActions() {
        return (
            <ul className="w-full h-full items-end">
                {
                    actionItems.map((item, i) => {
                        return (
                            <li
                                key={i}
                                onMouseOver={() => { setShakeItem(item.name) }}
                                onMouseLeave={() => { setShakeItem("") }}
                            >
                                <Link
                                    className={`flex gap-2 justify-start items-center m-2 p-2 text-md
                                                rounded-md
                                                hover:bg-gray-100 hover:font-semibold transition-colors duration-150
                                                `}
                                    to={item.link ? item.link : "/"}
                                >
                                    <FontAwesomeIcon icon={item.icon} shake={item.name === shakeItem} />
                                    {
                                        !hideMenu && <p>{item.name}</p>
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function GenerateNavBar() {
        return (
            <div>
                <div className={`${!hideMenu ? "py-8" : "py-12"}`}>
                    {
                        !hideMenu && <h1 className="roboto-light text-3xl">Golazo</h1>
                    }
                </div>
                {MapActions()}
            </div>
        )
    }

    return (
        <>
            <div className={`h-full ${hideMenu ? "w-18" : "w-52"}`}>

                <nav className="border-r border-b border-gray-300 h-full p-4">
                    <div className="text-left px-4">
                        <button
                            onClick={() => { setHideMenu(!hideMenu) }}
                        >
                            <FontAwesomeIcon icon={hideMenu ? faBars : faXmark} />
                        </button>
                    </div>

                    {GenerateNavBar()}

                </nav>
            </div>
        </>
    )
}

