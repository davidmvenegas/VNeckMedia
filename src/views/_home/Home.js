import './Home.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
// Import Logos
import VNeckLogo from '../../assets/VNeck_Logo_Ads.png';
import BenzingaLogo from '../../assets/Benzinga/Benzinga_Logo.png';
import ArkhausLogo from '../../assets/Arkhaus/ARKHAUS_Icon_Blue.png';

function Home() {
    const navigate = useNavigate()
    const [dropdownIsOpen, setDropdownIsOpen] = useState({
        Benzinga: false,
        Arkhaus: false,
    });

    return (
        <div className='home-container'>
            <div className="logo-wrap">
                <img src={VNeckLogo} alt="Logo" />
            </div>
            <div className="navigation">

                <div className={dropdownIsOpen.Benzinga ? "dropdown dropdown-open" : "dropdown"}>
                    <div className="top" onClick={() => setDropdownIsOpen({...dropdownIsOpen, Benzinga: !dropdownIsOpen.Benzinga})}>
                        <img src={BenzingaLogo} alt="Logo" />
                        <h2>Benzinga</h2>
                        <div className="icon-wrap">
                            {dropdownIsOpen.Benzinga ? <FaChevronUp id="icon" /> : <FaChevronDown id="icon" />}
                        </div>
                    </div>
                    <div className="body">
                        <div className={dropdownIsOpen.Benzinga ? "separator separator-active" : "separator"} />
                        <div className="items">
                            <div className={dropdownIsOpen.Benzinga ? "item item-active-1" : "item"} onClick={() => navigate('/benzinga/600x100')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 100</h2>
                            </div>
                            <div className={dropdownIsOpen.Benzinga ? "item item-active-2" : "item"} onClick={() => navigate('/benzinga/600x200')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 200</h2>
                            </div>
                            <div className={dropdownIsOpen.Benzinga ? "item item-active-3" : "item"} onClick={() => navigate('/benzinga/600x500')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 500</h2>
                            </div>
                            <div className={dropdownIsOpen.Benzinga ? "item item-active-4" : "item"} onClick={() => navigate('/benzinga/1456x180')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>1456 x 180</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={dropdownIsOpen.Arkhaus ? "dropdown dropdown-open" : "dropdown"}>
                    <div className="top" onClick={() => setDropdownIsOpen({...dropdownIsOpen, Arkhaus: !dropdownIsOpen.Arkhaus})}>
                        <img src={ArkhausLogo} alt="Logo" />
                        <h2>Arkhaus</h2>
                        <div className="icon-wrap">
                            {dropdownIsOpen.Arkhaus ? <FaChevronUp id="icon" /> : <FaChevronDown id="icon" />}
                        </div>
                    </div>
                    <div className="body">
                        <div className={dropdownIsOpen.Arkhaus ? "separator separator-active" : "separator"} />
                        <div className="items">
                            <div id='linkArkhaus' className={dropdownIsOpen.Arkhaus ? "item item-active-1" : "item"} onClick={() => navigate('/arkhaus/600x100')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 100</h2>
                            </div>
                            <div id='linkArkhaus' className={dropdownIsOpen.Arkhaus ? "item item-active-2" : "item"} onClick={() => navigate('/arkhaus/600x200')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 200</h2>
                            </div>
                            <div id='linkArkhaus' className={dropdownIsOpen.Arkhaus ? "item item-active-3" : "item"} onClick={() => navigate('/arkhaus/600x500')}>
                                <HiOutlineExternalLink id='icon'/>
                                <h2>600 x 500</h2>
                            </div>
                            <div id='linkArkhaus' className={dropdownIsOpen.Arkhaus ? "item item-active-4" : "item"} onClick={() => navigate('/arkhaus/1456x180')}>
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