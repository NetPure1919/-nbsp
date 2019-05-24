import React,{ Component } from 'react';
import Slider from "react-slick";
import { i1,i2,i3 } from '../../Other/png/pngs.js';
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../node_modules/slick-carousel/slick/slick.css";
export default class App extends Component{
    state={
      updateCount:0,
      slideIndex:0
    }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows:false,
      initialSlide:2,
      adaptiveHeight:true,
      centerMode:true,
      draggable:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () =>
          this.setState(state => ({
              updateCount: state.updateCount + 1
          })),
      beforeChange: (current, next) =>
          this.setState({ slideIndex: next })
  }
      return (
        <div className="main__wrapper_trd"id='trd'>
        <div className='main__wrapper_trd__Slider'>
        <Slider  ref={slider => (this.slider = slider)} {...settings}>
           <div><h2 className='hed2'>Звенья патогинеза СД2</h2>
               <img className="main__wrapper_trd__Slider__img" src={i3} width='50%' alt=''/>
           </div>
           <div><h2 className='hed2' >Смертельный октет</h2>
               <img className="main__wrapper_trd__Slider__img" src={i2} width='50%'alt=''/>
           </div>
           <div><h2 className='hed2'>Звенья патогинеза СД2</h2>
               <img className="main__wrapper_trd__Slider__img" src={i1} width='50%'alt=''/>
           </div>
       </Slider>
        </div>
        <div className="main__wrapper_trd__range">
                   <input className="range"
                   onChange={e => this.slider.slickGoTo(e.target.value)}
                   value={this.slideIndex}
                   type="range"
                   min={0}
                   max={2}
                   />
                   <div>
                       <div className='year'>1998</div>
                       <div className='year'>2009</div>
                       <div className='year'>2016</div>
                   </div>
               </div>
       </div>
    );
  }
}