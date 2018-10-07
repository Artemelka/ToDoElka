import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Aside, Main } from '../../layouts';

class CategoryPageComponent extends Component {
    render() {
        const { services } = this.props;
        const styleNames = classNames('Todo-content-layout__inner', {
            'Todo-content-layout__inner--open': services.sidebarOpen
        });

        return (
            <div className={styleNames}>
                <Aside />
                <Main />
            </div>
        );
    }
}

export const CategoryPage = connect(store => ({services: store.services}))(CategoryPageComponent);