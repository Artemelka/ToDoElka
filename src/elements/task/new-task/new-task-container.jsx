import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NewTaskComponent } from './new-task';

class NewTaskContainer extends Component {
    state = { name: 'hai' };

    handleCategoryChange = (event) => {
        this.setState({ name: event.target.value });
    };
    handleTaskNameChange = () => {};

    handleTaskDescriptionChange = () => {};

    handleCreateCategory = () => {};

    render() {
        const {allCategory} = this.props;
        const buttonText = "create task";

        return (
            <NewTaskComponent
                onCategoryChange={this.handleCategoryChange}
                onCreateCategory={this.handleCreateCategory}
                onTaskNameChange={this.handleTaskNameChange}
                onTaskDescriptionChange={this.handleTaskDescriptionChange}
                selectCategory={this.state.name}
                allCategory={allCategory}
                buttonText={buttonText}
            />
        );
    }
}

export const NewTask = connect(store => ({allCategory: store.allCategory}))(NewTaskContainer);