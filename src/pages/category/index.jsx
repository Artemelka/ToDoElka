import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { CategoryList } from '../../elements/category-list';

class CategoryPageComponent extends Component {
    render() {
        const { services } = this.props;
        const styleNames = classNames('Todo-content__inner', {
            'Todo-content__inner--open': services.sidebarOpen
        });
        return (
            <div className={styleNames}>
                <aside className="Todo-content__aside">
                    <div className="Todo-content__top">

                    </div>
                    <CategoryList />
                </aside>
                <main className="Todo-content__main">
                    <div className="Todo-content__top">

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