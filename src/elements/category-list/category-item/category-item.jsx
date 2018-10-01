import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import { ButtonIcon as IconButton, MoreButton, EditButtonGroup } from '../../buttons';

export class CategoryItem extends Component {
    static defaultProps = {
        categoryName: 'TestCategory'
    };

    handleFocus = () => {
        const {hasEditCategory} = this.props;

        if (!hasEditCategory) {

        }
    };

    renderButtons = () => {
        const {
            onConfirm, handleInputBlur, onEdit, onCreate,
            onRemove, hasChild, hasEditCategory
        } = this.props;
        const menuItems = [
            {titel: 'create', onClick: onEdit, disabled: false},
            {titel: 'add', onClick: onCreate, disabled: false},
            {titel: 'delete', onClick: onRemove, disabled: hasChild}
        ];

        return hasEditCategory
            ?
            <EditButtonGroup
                onConfirm={onConfirm}
                handleInputBlur={handleInputBlur}
            />
            :
            <MoreButton
                onEdit={onEdit}
                onCreate={onCreate}
                onRemove={onRemove}
                hasChild={hasChild}
                menuItems={menuItems}
            />
    };

    render() {
        const {
            categoryName, handleInputBlur, hasShowChild, hasChild, hasEditCategory,
            onClick, onShowChild, styleClasses, withRef, withInputRef
        } = this.props;
        const iconType = hasShowChild ? 'arrow_drop_up' : 'arrow_drop_down';

        return (
            <div
                className={styleClasses}
                onClick={onClick}
                ref={withRef}
                tabIndex={0}
            >
                <div className="Category-item__left">
                    { hasChild &&
                        <IconButton
                            onClick={onShowChild}
                            titel={iconType}
                        />
                    }
                    <div className="Category-item__name-box">
                        <Input
                            defaultValue={categoryName}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            onBlur={handleInputBlur}
                            onFocus={this.handleFocus}
                            readOnly={!hasEditCategory}
                            inputRef={withInputRef}
                        />
                    </div>
                </div>
                <div className="Category-item__right">
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}
