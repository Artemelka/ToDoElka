import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskItemComponent } from './task-item';
import {actionType} from "../../../actions/action-type";

class TaskItemContainerComponent extends Component {
    handleChangeStatusTask = (event) => {
        const { changeStatus, match } = this.props;

        changeStatus({id: match.params.taskId, status: event.target.checked});
    };

    handleRemoveTask = () => {
        const { removeTask, match, history } = this.props;

        removeTask(match.params.taskId);
        history.push(`/category/${match.params.catId}`);
    };

    render() {
        const {allTasks, match} = this.props;
        const activeTask = allTasks[match.params.taskId];
        const userAvatar = activeTask.author.slice(0,1);

        return (
            <TaskItemComponent
                taskName={activeTask.name}
                taskDescription={activeTask.description}
                taskTime={activeTask.time}
                taskAuthor={activeTask.author}
                status={activeTask.checked}
                taskId={activeTask.id}
                userAvatar={userAvatar}
                onRemoveTask={this.handleRemoveTask}
                onChangeStatusTask={this.handleChangeStatusTask}
            />
        );
    }
}

export const TaskItem = connect(
    store => ({allTasks: store.allTasks}),
    dispatch => ({
        changeStatus: taskId => dispatch({type: actionType.CHANGE_STATUS_TASK, payload: taskId}),
        removeTask: taskId => dispatch({type: actionType.REMOVE_TASK, payload: taskId})
    })
)(TaskItemContainerComponent);