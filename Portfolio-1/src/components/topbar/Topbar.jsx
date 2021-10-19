
import './topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={menuOpen ? 'topbar active' : "topbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>mahbub</a>
                    <div className="itemContainer">
                        <span>+8801646922113</span>
                    </div>
                    <div className="itemContainer">
                        <span>mahbubhasan89.diu@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;