import React from 'react';
import PropTypes from 'prop-types';

import BanPhaseInfo from './BanPhaseInfo';
import Header from './Header';
import { NUM_BANS_PHASE_ONE } from '../util/constants';
import '../styles/TeamBans.css';

const TeamBans = ({ bans }) => {
    return (
        <div className="team-bans">
            <Header>Bans</Header>
            <BanPhaseInfo title="Phase 1" bans={bans.slice(0, NUM_BANS_PHASE_ONE)} />
            <BanPhaseInfo title="Phase 2" bans={bans.slice(NUM_BANS_PHASE_ONE)} />
        </div>
    );
};

TeamBans.propTypes = {
    bans: PropTypes.array.isRequired
};

export default TeamBans;
