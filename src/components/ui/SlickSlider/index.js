import React from 'react';
import Carrousel from './Carrousel'

const AutoSlideShow = (props) => {
    return (
        <div>
            <Carrousel name={props.name} slides={props.slides} />
        </div>
    );
};

export default AutoSlideShow;