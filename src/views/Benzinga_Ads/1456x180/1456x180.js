import './1456x180.scss';
import QuantLogo from '../../../assets/Benzinga/QuantConnect_Logo.png';
import MasterworksLogo from '../../../assets/Benzinga/Masterworks_Logo.png';
import MoneyRotate from '../../../assets/Benzinga/MoneyRotate.png'
import ShellLogo from '../../../assets/Benzinga/Shell_Logo.png';
import RainbowPieLogo from '../../../assets/Benzinga/Rainbow_Pie_Chart.png';
import { useNavigate } from 'react-router-dom';

function _1456x180() {
    const navigate = useNavigate();

    return (
        <div className="iframe-wrap">
            <h2 id='title-of-iframe'>BENZINGA: 1456x180</h2>
            <div className='benzinga_1456x180_container'>
                <div className="rows">

                    <div className="group">
                        <div className="row">
                            <img src={QuantLogo} alt="Logo" />
                            <div className="col-1">
                                <h2>QuantConnect</h2>
                                <p>Invest in the #1 Quant Trading platform</p>
                            </div>
                            <div className="col-2" id='raisedCol'>
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
                            <div className="col-2" id='investFromCol_1'>
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

                    <div className="group">
                        <div className="row">
                            <img src={ShellLogo} id="shellImg" alt="Logo" />
                            <div className="col-1">
                                <h2>Shell Fuel Station</h2>
                                <p>Invest in this Shell Fuel Station from 100$</p>
                            </div>
                            <div className="col-2">
                                <p>Rent Paid</p>
                                <h2>$9,722</h2>
                            </div>
                            <div className="col-3">
                                <p>Divdend Paid</p>
                                <h2>6.5%</h2>
                            </div>
                            <div className="col-4">
                                <button>Join investors</button>
                            </div>
                        </div>
                        <div className="row">
                            <img src={RainbowPieLogo} alt="Logo" />
                            <div className="col-1">
                                <h2>12+ Assets</h2>
                                <p>Invest in Art. Real Estate. Startups. Web3 & more.</p>
                            </div>
                            <div className="col-2" id='investFromCol_2'>
                                <p>Invest from</p>
                                <h2>$5K</h2>
                            </div>
                            <div className="col-3">
                                <p>Net return (IRR)</p>
                                <h2>55.2%</h2>
                            </div>
                            <div className="col-4">
                                <button>Join investors</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button id='back-to-home-button' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default _1456x180;