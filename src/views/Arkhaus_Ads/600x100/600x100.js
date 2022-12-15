import './600x100.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArkhausLogo from '../../../assets/Arkhaus/ARKHAUS_Icon_Blue.png';
import ArkhausFullLogo from '../../../assets/Arkhaus/ARKHAUS_Logo_Blue.png';

function _600x100() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true)

    setInterval(() => {
        setIsActive(false)
        setTimeout(() => {
            setIsActive(true)
        }, 100);
    }, 12000);

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>ARKHAUS: 600x100</h2>
            <a className='arkhaus_600x100_container' href="https://wefunder.com/arkhaus" target="_blank" rel='noreferrer'>
                <div className={"slider-animation " + (isActive ? 'slider-animation-active' : undefined)}>
                    <div className={"slider-img-wrap " + (isActive ? 'slider-img-wrap-active' : undefined)}>
                        <img src={ArkhausFullLogo} alt="Arkhaus" />
                        <div className={"dot-wrap " + (isActive ? 'active_1' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_2' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_3' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_4' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_5' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_6' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_7' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_8' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_9' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_10' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_11' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_12' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_13' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_14' : undefined)} ><span className="dot"></span></div>
                        <div className={"dot-wrap " + (isActive ? 'active_15' : undefined)} ><span className="dot"></span></div>
                    </div>
                </div>
                <div className="row">
                    <img src={ArkhausLogo} alt="Logo" />
                    <div className="col-1">
                        <h2>Arkhaus</h2>
                        <p>Invest in the World's First Floating Members Club</p>
                    </div>
                    <div className="col-2">
                        <p>Raised</p>
                        <h2>$472,505</h2>
                    </div>
                    <div className="col-3">
                        <p>Invest from</p>
                        <h2>$100</h2>
                    </div>
                    <div className="col-4">
                        <button>Discover</button>
                    </div>
                </div>
            </a>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _600x100;