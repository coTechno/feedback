import React from 'react';
import './Banner.css';
import ladyImage from '../../../assets/ladyImage.png';

function Banner() {
    return (
        <div className='banner-container'>
            <div className="banner">
                <div className="col-text">
                    <div className="inner-text">
                        <h5>SUMMER 2022</h5>
                        <h1>NEW COLLECTION</h1>
                        <h4>We know how large objects will act,<br />
                            but things on a small scale.</h4>
                        <button className="btn">SHOP NOW</button>
                    </div>
                </div>
                <div className="col-image">
                    <div className="inner-image">
                        <img className="ladyImage" src={ladyImage} alt="img" />
                        <svg id="bubble-1" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
                        </svg>
                        <svg id="bubble-2" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
                        </svg>
                        <svg id="bubble-3" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
                        </svg>
                        <svg id="bubble-4" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#977DF4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner