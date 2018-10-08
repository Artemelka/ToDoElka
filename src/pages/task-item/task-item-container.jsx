import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskItemComponent } from './task-item';
import {actionType} from "../../actions/action-type";
import { fakeLogin, getStoreItems } from '../../services';

class TaskItemContainerComponent extends Component {
    state = {
        allTasks: this.props.allTasks
    };

    componentWillMount() {
        const { addTasks } = this.props;
        const { allTasks } = this.state;
        const isAuth = fakeLogin.isAuth();

        if (isAuth && Boolean(allTasks)) {
            const tasks = getStoreItems('tasks');

            addTasks(tasks);
            this.setState({ allTasks: tasks });
        }
    }

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
        const { match } = this.props;
        const { allTasks } = this.state;

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
    store => ({allTasks: store.allTasks, store: store}),
    dispatch => ({
        changeStatus: taskId => dispatch({type: actionType.CHANGE_STATUS_TASK, payload: taskId}),
        removeTask: taskId => dispatch({type: actionType.REMOVE_TASK, payload: taskId}),
        addTasks: allTasks => dispatch({type: actionType.ADD_ALL_TASKS, payload: allTasks}),
    })
)(TaskItemContainerComponent);