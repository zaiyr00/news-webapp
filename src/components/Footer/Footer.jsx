import React from 'react';

import './Footer.css';

const Footer = () => {

    return (
        <div className="footer-bottom" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 footer-copyright">
                        &copy; Bootstrap Template by Zaiyr Sharsheyev
                    </div>
                    <div className="col-md-6 footer-social">
                        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com"><i className="fab fa-facebook-f"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com"><i className="fab fa-twitter"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://https://web.whatsapp.com/"><i className="fab fa-whatsapp"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com"><i className="fab fa-instagram"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://web.telegram.org"><i className="fab fa-telegram"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;