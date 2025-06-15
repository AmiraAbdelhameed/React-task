import React , {useState} from "react";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggler from './Theme/ThemeToggler'
const NavBar = () => {
    const [toggle, setToggle] = useState('hidden')
    return (
        <>
            <nav className="nav">
                <div className="logo">Courses</div>
                <div className="links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/courses'>Courses</NavLink>
                {/* <NavLink to='/instructors'>Instructors</NavLink> */}
                <NavLink to='/about'>About</NavLink>
                </div>
                <div className="buttons">
                    <ThemeToggler />
                    <button onClick={() => setToggle(toggle == 'hidden' ? 'flex flex-col ' : 'hidden')} className="menu">
                        <GiHamburgerMenu />
                    </button>
                </div>
            </nav>
            <div className={`menu_links ${toggle}`}>
                <NavLink to='/' onClick={() => setToggle('hidden')} >Home</NavLink>
                <NavLink to='/movies' onClick={() => setToggle('hidden')} >Movies</NavLink>
                <NavLink to='/series' onClick={() => setToggle('hidden')} >Series</NavLink>
                <NavLink to='/actors' onClick={() => setToggle('hidden')} >Actors</NavLink>
                <NavLink to='/about' onClick={() => setToggle('hidden')} >About</NavLink>
            </div>
        </>
    )
}

export default NavBar;