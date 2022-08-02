import React, { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './Styles';
// import arrowButton from '../../assets/images/imgs/arrow-arrow.png';

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
        <div className='div-div2'
            style={{
                display: visible ? 'inline' : 'none',
            }} onClick={scrollToTop}
        >
            <button
                className='scroll-button'
                style={{
                    display: visible ? 'inline' : 'none',
                }} onClick={scrollToTop}
            >
                {/* <img src={arrowButton} alt='' onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none', width: '3rem', height: 'auto', marginTop: '0.5rem', }} /> */}
            </button>
        </div>
    );
}

export default ScrollButton;
