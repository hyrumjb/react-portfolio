import '../App.css';
import { NavLink } from 'react-router-dom';
import backgroundImg from '../assets/background.png';

function Navbar() {
    return (
        <>
            <img 
                src={backgroundImg} 
                className="background-img" 
                alt="Refresh page"
            />
            <header>
                <h1 className="typing">hyrum bradshaw</h1>
            </header>

            <nav>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                    Projects
                </NavLink>
                <NavLink to="/future" className={({ isActive }) => isActive ? 'active' : ''}>
                    Future
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;