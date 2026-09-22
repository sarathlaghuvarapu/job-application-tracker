import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>Job Application Tracker</h2>

            <div className="nav-links">

                <NavLink to="/">
                    Dashboard
                </NavLink>

                <NavLink to="/applications">
                    Applications
                </NavLink>

                <NavLink to="/add-application">
                    Add Application
                </NavLink>

            </div>

        </nav>
    );
}

export default Navbar;