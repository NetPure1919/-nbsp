import React from 'react';
import { Link } from "react-scroll";
export default (props) =>{
    return(
        <div className="nav">
            <Link
                activeClass="active"
                to="fst"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {700}
                className='a'
            >
                <div className={props.scrolled<30?"nav__Link__used":"nav__Link"}id="b1"></div>
            </Link>
            <Link
                activeClass="active"
                to="snd"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {700}
                className='a'
            >
                <div className={props.scrolled>30&&props.scrolled<70?"nav__Link__used":"nav__Link"}id="b2"></div>
            </Link>
            <Link
                activeClass="active"
                to="trd"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {700}
                className='a'
            >
                <div className={props.scrolled>70?"nav__Link__used":"nav__Link"}id="b3"></div>
            </Link>
        </div>
    )
}
