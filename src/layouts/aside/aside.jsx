import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CategoryList } from '../../elements/category-list';
import { InputWithButton } from '../../elements/inputs';
import { actionType } from '../../actions/action-type';
import './aside.css';

class AsideComponent extends Component {
    render() {
        const { createCategory } = this.props;

        return (
            <aside className="Todo-aside">
                <div className="Todo-aside__top">
                    <InputWithButton onClick={createCategory}/>
                </div>
                <div className="Todo-aside__middle">
                    <CategoryList />
                </div>
            </aside>
        );
    }
}

export const Aside = connect(null,
    dispatch => ({
        createCategory: catName => dispatch({type: actionType.CREATE_CATEGORY, payload: catName})
    })
)(AsideComponent);