import React from 'react';

import BanPhaseInfo from './BanPhaseInfo';
import './TeamBans.css';

const TeamBans = ({ bans }) => {
    return (
        <div className="team-bans">
            <h3>Bans</h3>
            <BanPhaseInfo title="Phase 1" bans={bans} />   
            <BanPhaseInfo title="Phase 2" bans={bans} />   
        </div>
    );
};

TeamBans.propTypes = {
    bans: React.PropTypes.array.isRequired
};

export default TeamBans;