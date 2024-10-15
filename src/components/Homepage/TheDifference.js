import React from 'react';
import './TheDifference.css';
import dedicatedEngTeam from '../../assets/img/dedicatedEngTeam.svg';
import proactivePlan from '../../assets/img/proactivePlan.svg';
import noTieredHelpDesk from '../../assets/img/noTieredHelpDesk.svg';
import CyberTeam from '../../assets/img/CyberTeam.svg';

const TheDifference = () => {
    return (
        <div className="Difference-Container">
            <h1 className="Title">The Difference</h1>

            <div className="Difference">
                {/* Box row */}
                <div className="Box-Row">
                    <div className="Box">
                        <img src = { dedicatedEngTeam }/>
                    </div>
                    <div className="Box">
                        <img src = { proactivePlan } />
                    </div>
                    <div className="Box">
                        <img src = { noTieredHelpDesk } />
                    </div>
                    <div className="Box">
                        <img src = { CyberTeam}/>
                    </div>
                </div>

                {/* Header row */}
                <div className="Header-Row">
                    <h2 className="Header">Dedicated Engineering Team</h2>
                    <h2 className="Header">Proactive Plan</h2>
                    <h2 className="Header">No Tiered Help Desk</h2>
                    <h2 className="Header">Cyber Team</h2>
                </div>
            </div>
        </div>
    );
};

export default TheDifference;
