import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { CategoryItem } from './category-item';
import { CategoryList } from '../index';
import { actionType } from '../../../actions/action-type';
import './category-item.css';

class CategoryItemContainerComponent extends Component {
    static getDerivedStateFromProps(nextProps, state) {
        return (!state.active && state.editCategory) ? {...state, editCategory: false} : state;
    }

    state = {
        showChild: false,
        editCategory: false,
        active: false
    };

    getChildСat = (catList, id) => Object.values(catList).filter(cat => cat.parent === id);

    handleRemoveCategory = () =>  {
        this.props.removeCategory(this.props.categoryId);
        // this.props.history.push(`/category`);
        console.log('remove');
    };

    handleEditCategory = () => {
        this.setState({editCategory: true, active: true});
        setTimeout(() => this.inputRef.focus(), 0);
        // this.inputRef.focus();
    };

    handleCreateCategory = () => {
        this.setState({active: true});
        // this.props.history.push(`/category/${this.props.categoryId}/new`);
    };

    handleShowChild = () => {
        this.setState({showChild: !this.state.showChild, active: true});
    };

    handleConfirm = () => {
        console.log('Confirm');

    };

    handleClick = (event) => {
        if (event.target === this.thisTask) {
            this.setState({active: true});
            this.props.history.push(`/category/${this.props.categoryId}`);
        }
    };

    handleInputBlur = () => this.setState({editCategory: false});

    handleRef = (ref) => {
        this.thisTask = ref;
    };

    handleInputRef = (ref) => {
        this.inputRef = ref;
    };

    thisTask = null;
    inputRef = null;

    render() {
        const {categoryName, categoryList, categoryId, match, history} = this.props;
        const childCategory = this.getChildСat(categoryList, categoryId);
        const hasChild = !!childCategory.length;
        const hasShowChild = this.state.showChild;
        const activeCat = (categoryId === match.params.catId);
        const styleClasses = classNames('Category-item', {
            'Category-item--with-child': hasChild,
            'Category-item--active': activeCat
        });

        return (
            <li className="Category-list__item" >
                <CategoryItem
                    categoryName={categoryName}
                    hasChild={hasChild}
                    styleClasses={styleClasses}
                    hasEditCategory={this.state.editCategory}
                    hasShowChild={this.state.showChild}
                    onShowChild={this.handleShowChild}
                    onEdit={this.handleEditCategory}
                    onCreate={this.handleCreateCategory}
                    onConfirm={this.handleConfirm}
                    onRemove={this.handleRemoveCategory}
                    onClick={this.handleClick}
                    handleInputBlur={this.handleInputBlur}
                    withRef={this.handleRef}
                    withInputRef={this.handleInputRef}
                />
                {hasChild && hasShowChild &&
                <CategoryList
                    catId={categoryId}
                    match={match}
                    history={history}
                />
                }
            </li>
        );
    }
}

export const CategoryItemContainer = connect(null,
    dispatch => ({
        removeCategory: catId => dispatch({type: actionType.REMOVE_CATEGORY, payload: catId}),
        setActiveCategory: catId => dispatch({type: actionType.ACTIVE_CATEGORY, payload: catId})
    })
)(CategoryItemContainerComponent);
