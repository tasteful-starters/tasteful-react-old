import { connect } from 'react-redux';

import { actions } from '@state';
import About from './presentational';

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);