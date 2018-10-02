import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import classNames from 'classnames';

import { CategoryList } from '../../elements/category-list';

const SelectCategory = (props) => {
   return <h1>select</h1>;
};

const TasksPage = (props) => {
    return <h1>new</h1>;
};

class CategoryPageComponent extends Component {
    render() {
        const { services } = this.props;
        const styleNames = classNames('Todo-content__inner', {
            'Todo-content__inner--open': services.sidebarOpen
        });
        console.log('CategoryPage', this.props);
        return (
            <div className={styleNames}>
                <aside className="Todo-content__aside">
                    <div className="Todo-content__top">

                    </div>
                    <CategoryList {...this.props}/>
                </aside>
                <main className="Todo-content__main">
                    <div className="Todo-content__top">
                        <Route exact path="/category/" component={SelectCategory}/>
                        <Route exact path="/category/:catId" component={()=><h1>tasks</h1>}/>
                        <Route exact path="/category/new/:catId" component={TasksPage}/>
                    </div>
                </main>
            </div>
        );
    }
}

export const CategoryPage = connect(
    store => ({
        services: store.services
    })
)(CategoryPageComponent);