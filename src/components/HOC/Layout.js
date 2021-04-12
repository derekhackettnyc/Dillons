import React from 'react';
import Header from '../Header';
// import AnimateHeader from '../../elements/AnimateHeader';

import { mainNavMenu } from '../../menus' 

const Layout = (props) => {

    return (
            <div className="main" >
                {/* <AnimateHeader> */}
                    <Header nav={mainNavMenu} />
                {/* </AnimateHeader> */}

                {props.children}

                <footer className="footer">
                    <h3>Connect With Us!</h3>
                    <ul className="socials-icons">
                        <li><a rel="noopener noreferrer"  href="https://www.facebook.com/Dillons-Jewellers-633882450058754/" target="_blank"><i className="fab fa-facebook-square fa-3x"></i></a></li>
                        <li><a  rel="noopener noreferrer"  href="https://api.whatsapp.com/send?phone=+353877931891&amp;text=Hi there! I'm looking at your website. I have a question 🤔 ...."><i className="fab fa-whatsapp-square fa-3x"></i></a></li>
                    </ul>
                    <p className="footer__design-by">
                    <a href="http://3littlebirdsnyc.com/portfolio/" rel="noopener noreferrer" target="_blank">Designed & Developed by LPNY</a>
                </p>
                </footer>
            </div>

    )
}

export default Layout