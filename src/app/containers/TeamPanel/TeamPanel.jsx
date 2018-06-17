
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTeamMember } from '../../actions/team';
import { TimeSelector } from '../../components/TimeSelector/TimeSelector';
import { TimezoneSelector } from '../../components/TimezoneSelector/TimezoneSelector';
import { Bind } from '../../utils/decorators';
import { getUserTimezone } from '../../utils/time';

class TeamPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            picture: '',
            timezone: getUserTimezone(),
            availableFrom: '08:00',
            availableTo: '17:00',
            isFormValid: false
        };
    }

    @Bind()
    onNameChange(event) {
        this.setState({ name: event.target.value }, this.validateForm);
    }

    @Bind()
    onPictureChange(event) {
        this.setState({ picture: event.target.value }, this.validateForm);
    }

    @Bind()
    onTimezoneChange(event) {
        this.setState({ timezone: event.target.value }, this.validateForm);
    }

    @Bind()
    onFromTimeChange(event) {
        this.setState({ availableFrom: event.target.value }, this.validateForm);
    }

    @Bind()
    onToTimeChange(event) {
        this.setState({ availableTo: event.target.value }, this.validateForm);
    }

    @Bind()
    saveMember(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.addMemberToTeam(this.props.team, {
            name: this.state.name,
            picture: this.state.picture,
            timezone: this.state.timezone,
            availability: {
                from: this.state.availableFrom,
                to: this.state.availableTo
            }
        });

        this.resetState();
    }

    @Bind()
    validateForm() {
        const isValid = ['name', 'picture', 'timezone', 'availableFrom', 'availableTo'].every((field) => this.state[field]);
        this.setState({ isFormValid: isValid });
    }

    resetState() {
        this.setState({
            name: '',
            picture: '',
            timezone: getUserTimezone(),
            availableFrom: '08:00',
            availableTo: '17:00',
            isFormValid: false
        });
    }

    render() {
        return (
            <form className='team-panel'
                  autoComplete='off'
                  onSubmit={ this.saveMember }>
                <span className='team-panel__title'>
                    Add a new member:
                </span>

                <div className='team-panel__name'>
                    <label htmlFor='name'>
                        Name:
                    </label>

                    <input id='name'
                           type='text'
                           onChange={ this.onNameChange } />
                </div>

                <div className='team-panel__picture'>
                    <label htmlFor='picture'>
                        Picture url:
                    </label>

                    <input id='picture'
                           type='text'
                           onChange={ this.onPictureChange } />
                </div>

                <div className='team-panel__timezone'>
                    <label htmlFor='timezone'>
                        Timezone:
                    </label>

                    <TimezoneSelector id='timezone'
                                      currentValue={ this.state.timezone }
                                      onChange={ this.onTimezoneChange } />
                </div>

                <div className='team-panel__availability'>
                    <label>
                        Availability:
                    </label>

                    <TimeSelector currentValue={ this.state.availableFrom }
                                  onChange={ this.onFromTimeChange } />

                    <TimeSelector currentValue={ this.state.availableTo }
                                  onChange={ this.onToTimeChange } />
                </div>

                <button className='team-panel__submit'
                        type='submit'
                        disabled={ !this.state.isFormValid }
                        onClick={ this.saveMember }>
                    Add to the team
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    team: state.team
});

const mapDispatchToProps = (dispatch) => ({
    addMemberToTeam: (team, member) => {
        dispatch(addTeamMember(team, member));
    }
});

TeamPanel.propTypes = {
    addMemberToTeam: PropTypes.func,
    team: PropTypes.object
};

export { TeamPanel };
export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel);
