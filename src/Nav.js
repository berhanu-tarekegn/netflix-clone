import { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 100) {
            handleShow(true)
           } else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll", null);
       }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="netflix-logo.png"
            alt="Netflix Logo" />

            {/* <img 
               className="nav__avatar"
               src="netflix-logo.png"
               alt="Netflix Logo" 
            /> */}
        </div>
    );
}


export default Nav;

