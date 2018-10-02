import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { CategoryItemContainer } from './category-item'
import './category-list.css';

class CategoryListComponent extends Component {
    static defaultProps = {
        catId: ''
    };

    render() {
        const {allCategory, catId, ...rest} = this.props;
        const classStyle = classNames('Category-list', {
            'Category-list--inner': catId
        });
console.log('CategoryList', this.props);
        return (
            <ul className={classStyle}>
                {Object.values(allCategory).map((category, index) =>
                    (category.parent === catId) &&
                        <CategoryItemContainer
                            categoryList={allCategory}
                            categoryName={category.name}
                            categoryId={category.id}
                            active={category.active}
                            key={index}
                            {...rest}
                        />
                )}
            </ul>
        );
    }
}

export const CategoryList = connect(
    store => ({
        allCategory: store.allCategory
    })
)(CategoryListComponent);