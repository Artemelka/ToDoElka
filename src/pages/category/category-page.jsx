import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import classNames from 'classnames';

import { CategoryList } from '../../elements/category-list';
import { InputWithButton } from '../../elements/input-with-button';
import { ProgressBar } from '../../elements/progress';
import { TasksPage } from '../tasks-page';
import { TaskItem, NewTask } from '../../elements/task';
import { actionType} from '../../actions/action-type';

const SelectCategory = (props) => {
    console.log('SelectCategory', props);
    return <h1>select category</h1>;
};

class CategoryPageComponent extends Component {
    render() {
        const { services, createCategory } = this.props;
        const styleNames = classNames('Todo-content__inner', {
            'Todo-content__inner--open': services.sidebarOpen
        });

        return (
            <div className={styleNames}>
                <aside className="Todo-content__aside">
                    <div className="Todo-content__top">
                        <InputWithButton onClick={createCategory}/>
                    </div>
                    <div className="Todo-content__middle">
                        <CategoryList {...this.props}/>
                    </div>
                </aside>
                <main className="Todo-content__main">
                    <div className="Todo-content__top">
                        <ProgressBar />
                    </div>
                    <div className="Todo-content__middle">
                        <Route exact path="/category/" component={SelectCategory}/>
                        <Route exact path="/category/:catId" component={TasksPage}/>
                        <Route exact path="/category/:catId/task/:taskId" component={TaskItem}/>
                        <Route exact path="/category/new/:catId" component={()=><h1>tasks</h1>} />
                        <Route exact path="/category/new-task/" component={NewTask} />
                    </div>
                </main>
            </div>
        );
    }
}

export const CategoryPage = connect(
    store => ({
        services: store.services
    }),
    dispatch => ({
        createCategory: catName => dispatch({type: actionType.CREATE_CATEGORY, payload: catName})
    })
)(CategoryPageComponent);