import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { CategoryItem } from './category-item';
import { CategoryList } from '../index';
import { actionType } from '../../../actions/action-type';
import './category-item.css';

class CategoryItemContainerComponent extends Component {
    state = {
        showChild: false,
        editCategory: false
    };

    thisTask = null;
    inputRef = null;

    findChild = (catList, id) => Object.values(catList).filter(cat => cat.parent === id);

    handleAbortEdit = () => {
        this.setState({editCategory: false});
        this.inputRef.value = this.props.categoryName;
        this.handleInputBlur();
    };

    handleConfirm = () => {
        const {editCategoryName, categoryId} = this.props;

        editCategoryName({id: categoryId, name: this.inputRef.value});
        this.setState({editCategory: false});
    };

    handleClick = (event) => {
        if (event.target === this.thisTask || event.target === this.inputRef) {
            this.props.history.push(`/category/${this.props.categoryId}`);
            this.props.setActiveCategory(this.props.categoryId);
        }
    };

    handleCreateCategory = () => {
        const {history, setActiveCategory, categoryId} = this.props;

        history.push(`/category/new/${categoryId}`);
        setActiveCategory(categoryId);
    };

    handleEditCategory = () => {
        const {history, setActiveCategory, categoryId} = this.props;

        this.setState({editCategory: true});
        history.push(`/category/${categoryId}`);
        setActiveCategory(categoryId);
        setTimeout(() => this.inputRef.focus(), 0);
    };

    handleInputBlur = () => {
        if (!this.state.editCategory) {
            this.setState({editCategory: false});
        }
    };

    handleInputRef = (ref) => {
        this.inputRef = ref;
    };

    handleRemoveCategory = () =>  {
        const {removeCategory, history, categoryId} = this.props;

        removeCategory(categoryId);
        history.push(`/category`);
    };

    handleRef = (ref) => {
        this.thisTask = ref;
    };

    handleShowChild = () => {
        const {setActiveCategory, categoryId} = this.props;

        this.setState({showChild: !this.state.showChild});
        setActiveCategory(categoryId);
    };

    render() {
        const {categoryName, categoryList, categoryId, match, history} = this.props;
        const {editCategory, showChild} = this.state;

        const hasChild = Boolean(this.findChild(categoryList, categoryId).length);
        const styleClasses = classNames('Category-item', {
            'Category-item--with-child': hasChild,
            'Category-item--active': categoryList[categoryId].active
        });

        return (
            <li className="Category-list__item" >
                <CategoryItem
                    categoryName={categoryName}
                    hasChild={hasChild}
                    hasEditCategory={editCategory}
                    hasShowChild={showChild}
                    handleInputBlur={this.handleInputBlur}
                    onAbortEdit={this.handleAbortEdit}
                    onConfirm={this.handleConfirm}
                    onClick={this.handleClick}
                    onCreate={this.handleCreateCategory}
                    onEdit={this.handleEditCategory}
                    onShowChild={this.handleShowChild}
                    onRemove={this.handleRemoveCategory}
                    styleClasses={styleClasses}
                    withRef={this.handleRef}
                    withInputRef={this.handleInputRef}
                />
                {hasChild && showChild &&
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
        setActiveCategory: catId => dispatch({type: actionType.ACTIVE_CATEGORY, payload: catId}),
        editCategoryName: catId => dispatch({type: actionType.EDIT_CATEGORY, payload: catId})
    })
)(CategoryItemContainerComponent);
