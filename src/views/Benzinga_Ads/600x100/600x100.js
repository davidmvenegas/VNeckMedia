import './600x100.scss';
import QuantLogo from '../../../assets/Benzinga/QuantConnect_Logo.png';
import { useNavigate } from 'react-router-dom';

function _600x100() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>BENZINGA: 600x100</h2>
            <div className='benzinga_600x100_container'>
                <div className="row">
                    <img src={QuantLogo} alt="Logo" />
                    <div className="col-1">
                        <h2>QuantConnect</h2>
                        <p>Invest in the #1 Quant Trading platform</p>
                    </div>
                    <div className="col-2">
                        <p>Raised</p>
                        <h2>$634,401</h2>
                    </div>
                    <div className="col-3">
                        <p>Invest from</p>
                        <h2>$100</h2>
                    </div>
                    <div className="col-4">
                        <button>232 investors</button>
                    </div>
                </div>
            </div>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _600x100;