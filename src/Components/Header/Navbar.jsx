import { NavLink } from "react-router-dom";
import NavLogo from "./NavLogo";
const Navbar = () => {
    return (
        <div>
            <nav className="flex gap-y-6 flex-col md:flex-row justify-between items-center  px-5 py-6 ">
               <NavLogo></NavLogo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] underline font-bold" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;