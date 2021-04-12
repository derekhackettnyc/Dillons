import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';

const SlideItem = (props) => {

    const { slide, title, blurb, name, delay, spy } = props

    return (
        <Fragment>
            <div className={`hero hero__slide hero__slide-${name}--${slide}`}>

                <div className="hero__text">
                    {/* <Fade key={slide} right  duration={3000} spy={spy} appear={true} onReveal={ () => console.log(`Currently here ---> ${slide} - ${title}`)  }> */}
                    <Fade key={slide} right duration={1500} spy={spy} appear={true}>
                        <h1 className="heading-primary">{title}</h1>
                    </Fade>
                    <Fade key={`p${slide}`} bottom delay={delay} duration={2000} appear={true} spy={spy}>
                        <p className="hero__blurb">{blurb}</p>
                    </Fade>
                </div>

            </div>
            <div className="slider-timer">
                <div className="slider-timer__progress"  key={spy}></div>
            </div>
        </Fragment>
    )
}
export default SlideItem;