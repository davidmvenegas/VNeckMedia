import './600x100.scss';

function _600x100() {
    return (
        <div className='_600x100-container'>
            <div className="top-row">
                <div className="left">
                    <p>What's an <span>accredited investor?</span></p>
                </div>
                <div className="right">
                    <p>Disclosure</p>
                </div>
            </div>
            <div className="rows">
                <div className="row">
                    <img src="" alt="Logo" />
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
                    <div className="col-5">
                        <button>232 investors</button>
                    </div>
                </div>
                <div className="row">
                    <img src="" alt="Logo" />
                    <div className="col-1">
                        <h2>Masterworks</h2>
                        <p>Invest in paintings by the best-selling artists</p>
                    </div>
                    <div className="col-2">
                        <p>Invest from</p>
                        <div className="wrap">
                            <img src="" alt="Money" />
                            <h2>$10K</h2>
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Tarket return</p>
                        <h2>10-25%</h2>
                    </div>
                    <div className="col-5">
                        <button>500K investors</button>
                    </div>
                </div>
                <div className="row">
                    <img src="" alt="Logo" />
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
                    <div className="col-5">
                        <button>Join investors</button>
                    </div>
                </div>
                <div className="row">
                    <img src="" alt="Logo" />
                    <div className="col-1">
                        <h2>12+ Assets</h2>
                        <p>Invest in Art. Real Estate. Startups. Web3 & more.</p>
                    </div>
                    <div className="col-2">
                        <p>Invest from</p>
                        <h2>$5K</h2>
                    </div>
                    <div className="col-3">
                        <p>Net return (IRR)</p>
                        <h2>55.2%</h2>
                    </div>
                    <div className="col-5">
                        <button>Join investors</button>
                    </div>
                </div>
            </div>
            <div className="top-row">
                <div className="right">
                    <p>View More</p>
                    {/* > */}
                </div>
            </div>
        </div>
    )
}

export default _600x100;