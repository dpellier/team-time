
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Clock } from '../../components/Clock/Clock';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { TimeBoard } from '../../components/TimeBoard/TimeBoard';
import ProfilePanel from '../ProfilePanel/ProfilePanel';
import TeamPanel from '../TeamPanel/TeamPanel';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    dataLoaded() {
        return !!this.props.profile && !!this.props.team;
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }

        if (!this.dataLoaded()) {
            return <Loading />;
        }

        return (
            <div className='main-page'>
                <Clock time={ this.props.currentTime }
                       timezone={ this.props.profile.timezone } />

                <TimeBoard profile={ this.props.profile }
                           teamMembers={ this.props.team.members } />

                <ProfilePanel />

                <TeamPanel />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentTime: state.currentTime,
    profile: state.profile,
    team: state.team
});

MainPage.propTypes = {
    currentTime: PropTypes.number,
    profile: PropTypes.object,
    team: PropTypes.object
};

export { MainPage };
export default connect(mapStateToProps)(MainPage);
