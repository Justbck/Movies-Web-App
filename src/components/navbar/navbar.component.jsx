import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.styles.scss';
import { Nav } from 'react-bootstrap'
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen.component';

function Navbar() {

    const [showBar, handleShowBar] = useState(false);
    const history = useHistory();


   useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShowBar(true);
            } else handleShowBar(false);
        });
        return() => {
            window.removeEventListener("scroll");
        }
    },[]);
 

    return (
        <Nav className = {`nav ${showBar && "nav__dark" }`}>
            <div className = "nav__left">
                <Nav.Link href="/">
                    <img 
                        className = "nav__logo"
                        src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt = "Netflix Logo"
                    />
                </Nav.Link>

                <div className = "nav__links">
                    <Nav.Link>
                        Home
                    </Nav.Link>
                    <Nav.Link>
                        Series
                    </Nav.Link>
                    <Nav.Link>
                        Films
                    </Nav.Link>
                    <Nav.Link>
                        New & Popular
                    </Nav.Link>
                    <Nav.Link>
                        My List
                    </Nav.Link>
                </div>
            </div>
           
           <div className="nav__right">

                <div className = "nav__links">
                    {/*<Nav.Link className ="nav__search">
                        Search Bar
                    </Nav.Link>
                    <Nav.Link className ="nav__children">
                        CHILDREN
                    </Nav.Link>*/}
                    <Nav.Link>
                        <BsBellFill className = "nav__bell"/>                   
                    </Nav.Link>
                    <Nav.Link>
                        <img 
                            //push to profile page
                            onClick = {() => history.push('/profile')}
                            className = "nav__avatar"
                            src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt = "Netflix Avatar"
                        />
                    </Nav.Link>
                    <Nav.Link>
                        <IoMdArrowDropdown className = "nav__arrow"/>
                    </Nav.Link>
                </div>
           </div>
        </Nav>
    );
}

export default Navbar;