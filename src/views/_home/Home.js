import './Home.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import VNeckLogo from '../../assets/VNeck_Logo_Ads.png';
import BenzingaLogo from '../../assets/Benzinga/Benzinga_Logo.png';

function Home() {
    const navigate = useNavigate()
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <div className='home-container'>
            <div className="logo-wrap">
                <img src={VNeckLogo} alt="Logo" />
            </div>
            <div className="navigation">

                <div className={dropdownIsOpen ? "dropdown dropdown-open" : "dropdown"}>
                    <div className="top" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                        <img src={BenzingaLogo} alt="Logo" />
                        <h2>Benzinga</h2>
                        <div className="icon-wrap">
                            {dropdownIsOpen ? <FaChevronUp id="icon" /> : <FaChevronDown id="icon" />}
                        </div>
                    </div>
                    <div className="body">
                        <div className={dropdownIsOpen ? "separator separator-active" : "separator"} />
                        <div className="items">
                            <div className={dropdownIsOpen ? "item item-active-1" : "item"} onClick={() => navigate('/benzinga/600x100')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 100</h2>
                            </div>
                            <div className={dropdownIsOpen ? "item item-active-2" : "item"} onClick={() => navigate('/benzinga/600x200')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 200</h2>
                            </div>
                            <div className={dropdownIsOpen ? "item item-active-3" : "item"} onClick={() => navigate('/benzinga/600x500')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 500</h2>
                            </div>
                            <div className={dropdownIsOpen ? "item item-active-4" : "item"} onClick={() => navigate('/benzinga/1456x180')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>1456 x 180</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home