import React, { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './Styles';
import arrowButton from '../../assets/images/imgs/arrow-arrow.png';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 60) {
            setVisible(true)
        }
        else if (scrolled <= 60) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button style={{
            display: visible ? 'inline' : 'none',
            cursor: 'pointer',
            border: '0',
            padding: '0',
            width: '8rem',
            height: '8rem',
            // background: 'red',
            position: 'fixed',
            bottom: '13rem',
            right: '4rem',
            borderRadius: '50%',
            background: '#333333b5',
        }} onClick={scrollToTop}
        >
            <img src={arrowButton} alt='' onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none', width: '3rem', height: 'auto' }} />
        </button>
    );
}

export default ScrollButton;
