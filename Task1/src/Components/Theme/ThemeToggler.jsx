import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";


const ThemeToggler =()=>{
const {theme , setTheme}=useContext(ThemeContext)
    localStorage.setItem('theme', JSON.stringify(theme))

    return(
        <>
        <button className="" onClick={() => setTheme(theme == 'Light' ? 'dark' : 'Light')}>{theme == 'Light' ? <IoMoonOutline /> : <FiSun />}</button>
        </>
    )
}
export default ThemeToggler ;