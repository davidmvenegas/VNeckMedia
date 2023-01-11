import './600x500_v1.scss';
import ArkhausVideo from '../../../assets/Arkhaus/Arkhaus.mp4';
import RightArrow from '../../../assets/Arkhaus/Arrow_Right.png';
import { useNavigate } from 'react-router-dom';

function _600x500_v1() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>ARKHAUS: 600x500 <span>v1</span></h2>
            <a className='arkhaus_600x500_v1_container' href="https://wefunder.com/arkhaus" target="_blank" rel='noreferrer'>
                <div className="video-wrap">
                    <video width="100%" height="100%" autoPlay={true} loop={true}>
                        <source src={ArkhausVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="right">
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
                    <ul>
                        <li>"Best Startups To Buy" &nbsp;<span> — NASDAQ</span></li>
                        <li>SOLD OUT Membership</li>
                        <li>International Expansion planned</li>
                        <li>Founders from Bear Sterns and LVX Luxary</li>
                    </ul>
                    <button id="invest-now">
                        <span>Invest Now</span>
                        <img src={RightArrow} alt="->" />
                    </button>
                </div>
            </a>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _600x500_v1;