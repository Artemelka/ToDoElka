import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskListComponent } from './task-list';
import { actionType } from '../../../actions/action-type';
import './task-list.css';

class TaskListComponentContainer extends Component {
    handleChangeStatusTask = (event) => {
        const {changeStatus, task} = this.props;

        changeStatus({id: task.id, status: event.target.checked});
    };

    handleLearnMore = () => {
        console.log('learn more');
    };

    handleOpenTaskChange = (event, expanded) => {
        const { onChange, task } = this.props;

        onChange(task.id)(event, expanded);
    };

    handleRemoveTask = () => {
        const { removeTask, task } = this.props;

        removeTask(task.id);
    };

    render() {
        const { task, expanded } = this.props;

        return (
            <TaskListComponent
                expanded={expanded}
                onOpenTaskChange={this.handleOpenTaskChange}
                taskName={task.name}
                taskDescription={task.description}
                taskStatus={task.checked}
                onChangeStatusTask={this.handleChangeStatusTask}
                switchValue={task.id}
                onRemoveTask={this.handleRemoveTask}
                onLearnMore={this.handleLearnMore}
            />
        );
    }
}

export const TaskList = connect(null,
dispatch => ({
    changeStatus: taskId => dispatch({type: actionType.CHANGE_STATUS_TASK, payload: taskId}),
    removeTask: taskId => dispatch({type: actionType.REMOVE_TASK, payload: taskId})
})
)(TaskListComponentContainer);