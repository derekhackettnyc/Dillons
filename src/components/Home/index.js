import React, { Fragment } from 'react'

import AutoSlideShow from '../ui/SlickSlider'

// import AppStoreContext from '../../contexts/AppStore';
// import { toast } from '../ui/Toaster'

const Home = (props) => {

    // const { dispatch } = React.useContext(AppStoreContext)

    // React.useEffect(() => {
    //     dispatch(toast('success', { message: 'You are logged in 👏', duration: 3 }))
    // }, [])


    const slides = [
        { id: 0, title: "Dillons Jewellers", blurb: "Is a contemporary shop with a wide range of gold and silver jewellery and also specialising in everything for the perfect wedding day" },
        { id: 1, title: "Engagement Collection", blurb: "Handmade by the finest jewellery designers from Ireland and around the World." },
        { id: 2, title: "Bering Watch Collection", blurb: "BERING watches are made of premium quality materials such as surgical steel (316L) that is also used in medical engineering." },
        { id: 3, title: "Sif Jakobs Collection", blurb: "Pendant made of 18 karat gold plated 925 Sterling silver, polished surface and facet cut white zirconia. Personalize your design with a custom-engraved monogram or motif." }
    ]

    return (
        <Fragment>

            <header className="home">
                <h1 className="main-heading">
                    <span className="main-heading--main moveInLeft">Dillons Jewellers</span>
                    <span className="main-heading--sub moveInRight">A Jewelry and Watches Store</span>
                </h1>
            </header>

            <div className="banner banner--shipping">
                <h3>Over 25 years in business. We value our customers. </h3>
            </div>

            <AutoSlideShow name="audi" slides={slides} />

            <div className="banner banner--shipping">
                <h3>Call <a href="tel:0539171818">(053) 9171818</a> for purchase of any items on our website</h3>
            </div>

            <section className="section">

                <h2 className="section__heading divider">Our Repair Services</h2>
                <p className="section__sub-heading">We provide a full jewellery repair service of gold and silver jewellery at extremely competitive prices and guaranteed workmanship that is second to none.</p>

                <ul className="promotes">
                    <li className="promote box-shawdow">
                        <i className="fas fa-3x fa-gem color--falured align--center"></i>
                        <h3 className="promote__title align--center">Diamond Replacement</h3>
                        <p className="promote__text">At Dillons we supply and mount any size or shape of diamonds and any other precious stones at very competitive prices. All our diamonds are certified and we will endeavour to select a stone to suit your budget.We only use master setters and jewellers to reset and mount any damaged or lost stones.</p>
                    </li>
                    <li className="promote box-shawdow">
                        <i className="fas fa-3x fa-battery-half color--falured align--center"></i>
                        <h3 className="promote__title align--center">Watch Repairs</h3>
                        <p className="promote__text">We supply and fit all watch batteries at the best price of €5 per watch.We also remove links from new and old watches , general strap repairs and supply and fit a large range of leather watch straps starting at €12. </p>
                    </li>
                    <li className="promote box-shawdow">
                        <i className="fas fa-3x fa-ring color--falured align--center"></i>
                        <h3 className="promote__title align--center">Jewellery Repair</h3>
                        <p className="promote__text">We provide a full jewellery repair service of gold and silver jewellery at extremely competitive prices and guaranteed workmanship that is second to none.</p>
                    </li>
                </ul>
            </section>

            <section className="banner banner--wedding-arrangements">
                <div className="banner__text-box">
                    <h4 className="banner__heading">Wedding Arrangements</h4>
                    <p className="banner__promo">20%<span>off</span></p>
                    <p className="banner__blurb">All wedding bands including diamond set till the end of December</p>
                </div>
            </section>

            <section className="section">
                <h2 className="section__heading divider">Wedding Arrangements</h2>
                <p className="section__sub-heading">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. Sed ut perspiciatis unde omnis.</p>

                <ul className="spotlights">
                    <li className="spotlight">
                        <i className="fas fa-comments fa-2x spotlight__icon color--falured"></i>
                        <div className="spotlight__blurb-box">
                            <h3 className="spotlight__title">Appointment service</h3>
                            <p className="spotlight__text">You can now make an appointment to view our full range of engagement rings and wedding bands any day of the week at a time that suits you. <br /><br />Call 053-9171818 to make an appointment</p>
                            <p className="spotlight__link">More Info</p>
                        </div>
                    </li>
                    <li className="spotlight">
                        <i className="fas fa-2x fa-gem spotlight__icon color--falured"></i>
                        <div className="spotlight__blurb-box">
                            <h3 className="spotlight__title">Diamond Selection</h3>
                            <p className="spotlight__text">Contact us for more information.</p>
                        </div>
                    </li>
                    <li className="spotlight">
                        <i className="fas fa-2x fa-ring spotlight__icon color--falured"></i>
                        <div className="spotlight__blurb-box">
                            <h3 className="spotlight__title">Design Your Ring</h3>
                            <p className="spotlight__text">We will help you design a unique engagement ring or wedding band with our expert CAD designers and have a CAD design of your ideas within 24-48hrs</p>
                            <p className="spotlight__link">More Info</p>
                        </div>
                    </li>
                </ul>
                <div className="spotlights__link-contaioner">
                    <button className="fadeIn outline-grey">Book Your Free Consultation</button>
                </div>
            </section>

        </Fragment>


    )

}

export default Home