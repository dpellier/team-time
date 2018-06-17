
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateProfile } from '../../actions/profile';
import { TimeSelector } from '../../components/TimeSelector/TimeSelector';
import { TimezoneSelector } from '../../components/TimezoneSelector/TimezoneSelector';
import { Bind } from '../../utils/decorators';

class ProfilePanel extends Component {
    @Bind()
    onFromTimeChange(event) {
        this.props.onProfileChange(this.props.profile, {
            availability: { from: event.target.value }
        });
    }

    @Bind()
    onToTimeChange(event) {
        this.props.onProfileChange(this.props.profile, {
            availability: { to: event.target.value }
        });
    }

    @Bind()
    onTimezoneChange(event) {
        this.props.onProfileChange(this.props.profile, {
            timezone: event.target.value
        });
    }

    render() {
        return (
            <div className='profile-panel'>
                <span className='profile-panel__title'>
                    Update your personal information:
                </span>

                <div className='profile-panel__timezone'>
                    <label htmlFor='timezone'>
                        Timezone:
                    </label>

                    <TimezoneSelector id='timezone'
                                      currentValue={ this.props.profile.timezone }
                                      onChange={ this.onTimezoneChange } />
                </div>

                <div className='profile-panel__availability'>
                    <label>
                        Availability:
                    </label>

                    <TimeSelector currentValue={ this.props.profile.availability.from }
                                  onChange={ this.onFromTimeChange } />

                    <TimeSelector currentValue={ this.props.profile.availability.to }
                                  onChange={ this.onToTimeChange } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    onProfileChange: (profile, newProps) => {
        dispatch(updateProfile(profile, newProps));
    }
});

ProfilePanel.propTypes = {
    onProfileChange: PropTypes.func,
    profile: PropTypes.object
};

export { ProfilePanel };
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePanel);
