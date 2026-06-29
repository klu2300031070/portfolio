import React from 'react'

const ScrollDown = () => {
    const handleScrollClick = (e) => {
        e.preventDefault();
        const targetElement = document.querySelector('#about');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="scroll__down">
            <a href="#about" className="mouse__wrapper" onClick={handleScrollClick}>
                <span className="home__scroll-name">Scroll Down</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}

export default ScrollDown
