import Help from "./help"
import Power from "./power"
import History from "./history"
import Analysis from "./analysis"
import Finances from "./finances"
import Messages from "./messages"
import Products from "./products"
import Settings from "./settings"
import Documents from "./documents"
import Dashboard from "./dashboard"
import images from "../images/exporting"
import UIButton from "./uibutton"
import { useState } from "react"

const Sidebar = () => {

    let [showWide, setShowWide] = useState(false)

    const handleMouseEnter = () => {
        setShowWide(true);
    };

    const handleMouseLeave = () => {
        setShowWide(false);
    };

    return(
        <>
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`sidebar-father${showWide ? " expanded" : ""}`}>
            <div className="sidebar-thin">
                <div className="sidebar-profile-content--adjuster">
                    <div className="sidebar-profile--protector">
                        <UIButton image={images.yo}/>

                    </div>
                    <div className={`sidebar-profile--content${showWide ? " show-info" : ""}`}>
                        <div className="sidebar-profile--text">
                            <h3>Alexis Jiménez</h3>
                            <p>Last online 3 minutes ago</p>
                        </div>
                        <div className="sidebar-power-btn--protector">
                            <Power/>
                        </div>
                    </div>
                    <span></span>
                </div>
                <div className="sidebar-icons--flex-box">
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Dashboard width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Dashboard</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <History width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>History</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Analysis width={20} height={20} color="#000000" line="5"/>
                        </div>
                        <h4>Analysis</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Finances width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Finances</h4>
                    </button>
                    <span></span>
                </div>
                <div className="sidebar-icons--flex-box">
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Messages width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Messages</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Documents width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Documents</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Products width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Products</h4>
                    </button>
                    <span></span>
                </div>
                <div className="sidebar-icons--flex-box">
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Help width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Help</h4>
                    </button>
                    <button className={`sidebar-icon--btn${showWide ? " show-content" : ""}`}>
                        <div className="sidebar-btn-icon--protector">
                            <Settings width={20} height={20} color="#000000" line={5}/>
                        </div>
                        <h4>Settings</h4>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar