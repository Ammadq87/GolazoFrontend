import { faSearch, faBullseye, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
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

    return (
        <>
            <nav className="border-r border-gray-400 h-full">
                <div className="py-8">
                    <h1 className="font-bold text-left text-3xl p-4">Golazo</h1>
                </div>
                <ul className="w-full h-full items-end py-4">
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
                                            hover:bg-gray-200 hover:font-semibold
                                            `}
                                        to={item.link ? item.link : "/"}
                                    >
                                        <FontAwesomeIcon icon={item.icon} shake={item.name === shakeItem} />
                                        <p>{item.name}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}