import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="container">
            <div className="section-1">
                <div className="section-1-login">
                    Login/Register
                </div>
                <div className="section-1-heading"></div>
                <div className="section-1-tagline">
                    Tagline
                </div>
                <div className="section-1-subscribe">
                    Subscribe Now
                </div>
                <div className="section-1-sidebar"></div>
            </div>
            <div className="section-2">
                <div className="section-2-heading">
                What Sustainable Brands Journal SUPPORTS?
                </div>
                    <div className="section-2-icon-container">
                        <div className="icon1"></div>
                        <div className="icon2"></div>
                        <div className="icon3"></div>
                        <div className="icon4"></div>
                    </div>
                    <div className="icon1-text">
                                Building a global sustainable community
                    </div>
                    <div className="icon2-text">
                        Providing more sustainable ideas to customers
                </div>
                <div className="icon3-text">
                        Encourage and inspire new age business owners
                </div>
                <div className="icon4-text">
                Connecting people to help the cause
                </div>
            </div>
            <div className="section-3">
                <div className="section-3-layout">
                    <div className="section-3-cards">
                        <div className="section-3-card1"></div>
                        <div className="section-3-card2"></div>
                        <div className="section-3-card3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
