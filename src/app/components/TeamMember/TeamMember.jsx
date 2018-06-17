
import React from 'react';
import PropTypes from 'prop-types';
import defaultPicture from '../../../assets/default-member.png';

const TeamMember = ({ name, picture }) =>
    <div className='team-member'>
        <div className='team-member__profile'>
            <img className='team-member__profile__picture'
                 src={ picture }
                 onError={ (e) => { e.target.src = defaultPicture; }} />

            <div className='team-member__profile__menu'>
                {/* Real links not implemented */}
                <span className='team-member__profile__menu__item'></span>
                <span className='team-member__profile__menu__item'></span>
                <span className='team-member__profile__menu__item'></span>
                <span className='team-member__profile__menu__item'></span>
            </div>
        </div>

        <span className='team-member__name'>
            { name }
        </span>
    </div>
;

TeamMember.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
};

export { TeamMember };
