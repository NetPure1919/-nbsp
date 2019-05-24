import React,{ Component } from 'react';
import Nav from './components/Other/nav/nav.js';
import LinkTo from './components/Other/linkTo/linkTo.js';
import Intro from './components/Parts/intro/intro.js';
import Snd from './components/Parts/second/snd.js';
import Trd from './components/Parts/trd/trd';
import "./css/style.css";
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
          scrolled: 0,
          a:0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }
     scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPx / winHeightPx )* 100;
        this.setState({
            scrolled: scrolled
        }); 
        const b1 = document.getElementById('fst');
        const b2 = document.getElementById('snd');
        const b3 = document.getElementById('trd');
            if(this.state.scrolled>this.state.a){
            if(this.state.scrolled>12&&this.state.scrolled<15){
                b2.scrollIntoView({ behavior: "smooth"})            }
            if(this.state.scrolled>55&&this.state.scrolled<60){
                b3.scrollIntoView({ behavior: "smooth"})
            }
            } 
              if(this.state.scrolled<this.state.a){
                if(this.state.scrolled>40&&this.state.scrolled<43){
                    b1.scrollIntoView({ behavior: "smooth"})            }
                if(this.state.scrolled>75&&this.state.scrolled<80){
                    b2.scrollIntoView({ behavior: "smooth"})
            }
        }
        const scrolledsec = scrolled;
        this.setState({
            a:scrolledsec
        })
    }
render(){
    return(
        <div className="main" >
            <Nav scrolled={this.state.scrolled}/>
            <LinkTo scrolled={this.state.scrolled}/>
            <Intro/>
            <Snd/>
            <Trd/>
        </div>
    )
}
}