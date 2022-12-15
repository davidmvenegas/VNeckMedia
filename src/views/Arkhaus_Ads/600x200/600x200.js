import './600x200.scss';
import QuantLogo from '../../../assets/Benzinga/QuantConnect_Logo.png';
import MasterworksLogo from '../../../assets/Benzinga/Masterworks_Logo.png';
import MoneyRotate from '../../../assets/Benzinga/MoneyRotate.png'
import { useNavigate } from 'react-router-dom';

function _600x200() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>ARKHAUS: 600x200</h2>
            <div className='arkhaus_600x200_container'>
                <div className="rows">
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
                    <div className="row">
                        <img src={MasterworksLogo} id="masterImg" alt="Logo" />
                        <div className="col-1">
                            <h2>Masterworks</h2>
                            <p>Invest in paintings by the best-selling artists</p>
                        </div>
                        <div className="col-2">
                            <p>Invest from</p>
                            <div className="wrap">
                                <img src={MoneyRotate} alt="Money" />
                                <h2>$10K</h2>
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Target return</p>
                            <h2>10-25%</h2>
                        </div>
                        <div className="col-4">
                            <button>500K investors</button>
                        </div>
                    </div>
                </div>
            </div>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _600x200;