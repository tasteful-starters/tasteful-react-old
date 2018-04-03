import { connect } from 'react-redux';

import { actions } from '@state';
import TodoAdder from './presentational';

const mapDispatchToProps = {
    addTodo: actions.todoListActions.AddTodo
};

export default connect(
    undefined,
    mapDispatchToProps
)(TodoAdder);