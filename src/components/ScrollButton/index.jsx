import React, { useState } from 'react';

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
            style={{ display: visible ? 'inline-block' : 'none' }}
            onClick={scrollToTop}
        />
    );
}

export default ScrollButton;
