import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section className="section about">
                <h1 className="page-heading t-ruled-after">About Us</h1>

                <div className="about__hero fadeIn">
                    <div className="about__write-up write-up moveInRight">
                        <h2 className="write-up__title">20 Years in Jewelry</h2>
                        <p className="write-up__scoop">
                        <br/>Established in 1998 we have been building our jewellery business in Wexford slowly through the past two decades.<br/><br/>We have seen radical changes in that time and have changed to meet the demand but we have still stayed true to what we believe, offering a personal service in a relaxed friendly environment.<br/><br/>We love what we do and always endeavour to meet all our customers tastes and find that perfect piece of jewellery to suit every occasion.
                        </p>
                    </div>
                </div>

                <section className="section">

                    <h2 className="section__heading divider" style={{ paddingTop: "0px" }}>Why Choose Us</h2>
                    <p className="section__sub-heading">We believe that each and every client deserves to be treated with respect.</p>

                    <ul className="promotes">
                        <li className="promote box-shawdow">
                            <i className="fas fa-3x fa-glass-cheers color--falured align--center"></i>
                            <h3 className="promote__title align--center">Since 1998</h3>
                            <p className="promote__text">It would only make sense to choose and deal with someone who has over 20+ years of experience. knowledge and expertise in the industry and our commitment to providing you with the utmost in quality at competitive prices.</p>
                        </li>
                        <li className="promote box-shawdow">
                            <i className="fas fa-3x fa-trophy color--falured align--center"></i>
                            <h3 className="promote__title align--center">Customer Service</h3>
                            <p className="promote__text">We do not compromise quality, we believe in making your visit a remarkable experience.</p>
                        </li>
                        <li className="promote box-shawdow">
                            <i className="fas fa-3x fa-gift color--falured align--center"></i>
                            <h3 className="promote__title align--center">We Deliver</h3>
                            <p className="promote__text">Delivery is available if you're ordering over €50 of product within the island of Ireland.</p>
                        </li>
                    </ul>
                </section>

            </section>
        );
    }
}

export default AboutUs;