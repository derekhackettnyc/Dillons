import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <section className="section contact">
                <div className="contact__hero">
                    <h1 className="page-heading t-ruled-after">Contact Us</h1>
                    {/* <h2 className="section__sub-heading">Nulla tempus sollicitudin dui, ut vel duis urna ligula luctus at feugiat a lacinia ut sem.</h2> */}

                    <section className="section get-coaching">

                        <ul className="get-coaching__emphasizes">
                            <li className="emphasize">
                                <div className="emphasize__icon-wrapper emphasize__icon-wrapper--small circle color--white bg--falured">
                                    <i className="fas fa-envelope emphasize__icon"></i>
                                </div>
                                <div className="emphasize__blurb-box">
                                    <h3 className="emphasize__title">Email Address</h3>
                                    <p className="emphasize__text">info@DillonsJewellers.com</p>
                                </div>
                            </li>
                            <li className="emphasize">
                                <div className="emphasize__icon-wrapper emphasize__icon-wrapper--small circle color--white bg--falured">
                                    <i className="fas fa-phone-alt emphasize__icon"></i>
                                </div>
                                <div className="emphasize__blurb-box">
                                    <h3 className="emphasize__title">Call Me</h3>
                                    <p className="emphasize__text"><a href="tel:0539171818">(053) 9171818</a></p>
                                </div>
                            </li>
                            <li className="emphasize">
                                <div className="emphasize__icon-wrapper emphasize__icon-wrapper--small circle color--white bg--falured">
                                    <i className="fas fa-map-marker-alt emphasize__icon"></i>
                                </div>
                                <div className="emphasize__blurb-box">
                                    <h3 className="emphasize__title">Visit Me</h3>
                                    <p className="emphasize__text">6 North Main St,<br />Wexford, Y35F891</p>
                                </div>
                            </li>
                            <li className="emphasize">
                                <div className="emphasize__icon-wrapper emphasize__icon-wrapper--small circle color--white bg--falured">
                                    <i className="fas fa-clock emphasize__icon"></i>
                                </div>
                                <div className="emphasize__blurb-box">
                                    <h3 className="emphasize__title">Shop Hours</h3>
                                    <p className="emphasize__text">M-S:  10am – 5pm<br />S: Closed</p>
                                </div>
                            </li>

                        </ul>

                    </section>


                </div>

                <div className="section">
                    <h2 className="section__heading">Get In Touch</h2>
                    <p className="section__sub-heading" style={{textTransform:"initial"}}>Please call on <a href="tel:0539171818">(053) 9171818</a> for any queries or alternatively, <br/>email from form below and I will get back to you as soon as possible</p>
                    <form className="basic-form basic-form--margins" action="">
                        <input type="text" id="fname" name="firstname" placeholder="Full Name" />
                        <input type="text" id="email" name="lastname" placeholder="Email Address" />
                        <textarea id="subject" name="subject" placeholder="Message" ></textarea>
                        <div className="basic-form__submit">
                            <button className="basic-form__button outline-grey" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.7638546164267!2d-6.463761684199285!3d52.33842997978018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48681b43717a1c1d%3A0xdf830eae1fbe37d!2sDillons%20Jewellers!5e0!3m2!1sen!2sie!4v1593703876201!5m2!1sen!2sie"
                        width="100%"
                        height="400px"
                        frameBorder="0"
                        allowFullScreen
                        title="whereistheworld"
                    >
                    </iframe>
                </div>


            </section>
        );
    }
}

export default ContactUs;