import './600x100_v2.scss';
import { useNavigate } from 'react-router-dom';
import ArkhausLogo from '../../../assets/Arkhaus/ARKHAUS_Icon_Blue.png';

function _600x100_v2() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>ARKHAUS: 600x100 <span>v2</span></h2>
            <a className='arkhaus_600x100_v2_container' href="https://wefunder.com/arkhaus" target="_blank" rel='noreferrer'>
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

export default _600x100_v2;