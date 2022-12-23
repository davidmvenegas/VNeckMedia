import './600x500_v2.scss';
import ArkhausVideo from '../../../assets/Arkhaus/ArkHAUS_2.mp4';
import RightArrow from '../../../assets/Arkhaus/right_arrow.png';
import { BsPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function _600x500_v2() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>ARKHAUS: 600x500 <span>v2</span></h2>
            <a className='arkhaus_600x500_v2_container' href="https://wefunder.com/arkhaus" target="_blank" rel='noreferrer'>
                <div className="top">
                    <p>Invest in the World's First</p>
                    <h2>
                        <span id='letter_F'>F</span>
                        <span id='letter_L'>L</span>
                        <span id='letter_O'>O</span>
                        <span id='letter_A'>A</span>
                        <span id='letter_T'>T</span>
                        <span id='letter_I'>I</span>
                        <span id='letter_N'>N</span>
                        <span id='letter_G'>G</span>
                        Social Club
                    </h2>
                </div>
                <div className="video-wrap">
                    <video width="100%" height="100%" autoPlay={true} loop={true}>
                        <source src={ArkhausVideo} type="video/mp4" />
                    </video>
                    <div className="video-dark"></div>
                    <div className="about_wrap">
                        <div className="about">
                            <p id='about_1'><span>"Best Startups To Buy"</span> — NASDAQ</p>
                            <p id='about_2'>Year 1 Memberships Already SOLD OUT</p>
                            <p id='about_3'>Coming to NYC, CA, Paris, Istanbul, Dubai...</p>
                            <p id='about_4'>Over 1 Million USD Already Invested</p>
                        </div>
                    </div>
                    <div className="learn-more-wrap">
                        <button id="learn-more">
                            <span>Learn More</span>
                            <img src={RightArrow} alt="->" />
                        </button>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <BsPatchCheckFill id="icon" />
                        <p>What's an <span>accredited investor?</span></p>
                    </div>
                    <div className="right">
                        <p>Disclosure</p>
                    </div>
                </div>
            </a>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _600x500_v2;