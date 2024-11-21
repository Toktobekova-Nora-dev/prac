import React from 'react';
import d from "./footer.module.scss"

const Footer = () => {
    return (
       <div className={d.footer}>
        <div className="container">
            <div className={d.content}>
                footer
            </div>
        </div>
       </div>
    );
};

export default Footer;