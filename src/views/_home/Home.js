import './Home.scss';
import { FiChevronDown } from 'react-icons/fi';
import VNeckLogo from '../../assets/VNeck_Logo_Ads.png';
import BenzingaLogo from '../../assets/Benzinga/Benzinga_Logo.png';

function Home() {
    return (
        <div>
            <div className="top">
                <img src={VNeckLogo} alt="Logo" />
            </div>
            <div className="navigation">
                <div className="dropdown">
                    <div className="top">
                        <img src={BenzingaLogo} alt="Logo" />
                        <h2>Benzinga</h2>
                        <FiChevronDown id="icon" />
                    </div>
                    <div className="body">
                        <div className="item">
                            <h2>600x100</h2>
                        </div>
                        <div className="item">
                            <h2>600x200</h2>
                        </div>
                        <div className="item">
                            <h2>600x500</h2>
                        </div>
                        <div className="item">
                            <h2>1456x180</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home