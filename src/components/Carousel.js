import React, {useState} from 'react';
import '@brainhubeu/react-carousel/lib/style.css';

let ReactCarousel = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    ReactCarousel = require('@brainhubeu/react-carousel').default;
}

export const Carousel = ({title, children}) => {
    const [value, setValue] = useState(0)
    return <div>
        <div style={{position: 'relative'}}>
            {ReactCarousel && <ReactCarousel
                plugins={['arrows']}
                value={value}
                onChange={value => setValue(value)}
                animationSpeed={0}
                draggable={false}
                slides={children}
            />}
            <p style={{position: 'absolute', right: '10px', bottom: '-15px'}}>
                {value + 1}/{children.length}
            </p>
        </div>
        {title && <h4 style={{textAlign: 'center'}}>{title}</h4>}
    </div>
}