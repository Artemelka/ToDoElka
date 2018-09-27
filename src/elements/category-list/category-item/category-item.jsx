import React, { Component, Fragment } from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";

const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};

export class CategoryItem extends Component {
    static defaultProps = {
        categoryName: 'TestCategory'
    };

    state = {
        anchorEl: null
    };

    handleMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleClose = () => this.setState({ anchorEl: null });

    renderEdit = () => {
        const { onConfirm, handleInputBlur } = this.props;

        return(
            <Fragment>
                <IconButton
                    aria-label="Confirm"
                    color="primary"
                    onClick={onConfirm}
                >
                    <Icon fontSize="small" >done</Icon>
                </IconButton>
                <IconButton
                    aria-label="clear"
                    color="primary"
                    onClick={handleInputBlur}
                >
                    <Icon fontSize="small" >clear</Icon>
                </IconButton>
            </Fragment>
        );
    };

    renderMore = () => {
        const { onEdit, onCreate, onRemove, hasChild } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

      return(
          <Fragment>
              <IconButton
                  aria-label="More"
                  color="primary"
                  onClick={this.handleMenu}
              >
                  <Icon fontSize="small" >more_vert</Icon>
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={anchorOrigin}
                  transformOrigin={transformOrigin}
                  open={open}
                  onClose={this.handleClose}
              >
                  <MenuItem onClick={this.handleClose}>
                      <IconButton
                          aria-label="Edit"
                          color="primary"
                          onClick={onEdit}
                      >
                          <Icon fontSize="small" >create</Icon>
                      </IconButton>
                      <IconButton
                          aria-label="Create"
                          color="primary"
                          onClick={onCreate}
                      >
                          <AddIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                          aria-label="Delete"
                          color="primary"
                          onClick={onRemove}
                          disabled={!hasChild}
                      >
                          <DeleteIcon fontSize="small" />
                      </IconButton>
                  </MenuItem>
              </Menu>
          </Fragment>
      );
    };

    render() {
        const {
            categoryName,
            styleClasses,
            onShowChild,
            hasShowChild,
            hasChild,
            hasEditCategory,
            onClick,
            onNameClick,
            handleInputBlur,
            withRef
        } = this.props;
        const iconType = hasShowChild ? 'arrow_drop_up' : 'arrow_drop_down';
        const ButtonVariant = hasEditCategory ? this.renderEdit : this.renderMore;

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
                            aria-label="Add"
                            color="primary"
                            onClick={onShowChild}
                        >
                            <Icon fontSize="small" >{ iconType }</Icon>
                        </IconButton>
                    }
                    <div className="Category-item__name-box">
                        {/*{hasEditCategory*/}
                            {/*? <CategoryInput categoryName={categoryName} onBlur={handleInputBlur}/>*/}
                            {/*: <p className="Category-item__name" onClick={onNameClick}>{categoryName}</p>*/}
                        {/*}*/}
                        <p className="Category-item__name" onClick={onNameClick}>{categoryName}</p>
                    </div>
                </div>
                <div className="Category-item__right">
                    <ButtonVariant />
                </div>
            </div>
        );
    }
}