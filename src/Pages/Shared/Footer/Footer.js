import React from 'react';

const Footer = () => {
    const today =new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer className='text-center mt-5'>
                <p><small>MD Hossen copyright © / {year} /</small></p>
            </footer>
        </div>
    );
};

export default Footer;