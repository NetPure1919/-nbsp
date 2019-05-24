import React from 'react';
import { Link } from "react-scroll";
import { link } from '../../Other/png/pngs.js';
export default (props) =>{
    return(
        <div className={props.scrolled>10?"hover":'fix'}>
        <Link
            activeClass="active"
            to="snd"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            className='al'
            >
        Листайте вниз
        </Link>
        <Link
            activeClass="active"
            to="snd"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            className='al'
            ><br/>
        <img className= "imgl" alt='' src={link}/>
        </Link>
        <Link
            activeClass="active"
            to="snd"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            className='al'
            > 
            <div className='link'></div>
        </Link>
        </div>
    )
}
