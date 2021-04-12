import React from 'react';
import Slider from "react-slick";
import SlideItem from './SlideItem'
import './slick.scss'

class Carrousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          slideIndex:0,
          updateCount: 0
        }
      }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            autoplaySpeed:7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            //fade:true,
            autoplay:true,
            // autoplay:false,
            // afterChange: () =>
            //   this.setState(state => ({ updateCount: state.updateCount + 1 }))
            beforeChange: (current, next) => {
              this.setState(state => ({ updateCount: state.updateCount + 1, slideIndex:current }))
              
            }
          };

        return (

            <Slider ref={slider => (this.slider = slider)} {...settings}>
                {this.props.slides.map((item,index) => (
                    <div key={index}>
                        <SlideItem
                            slide={index}
                            title={item.title}
                            blurb={item.blurb}
                            name={this.props.name}
                            spy={this.state.updateCount}
                        /> 
                    </div>   
                 ))}
            </Slider>
        )
    }  

}

export default Carrousel;