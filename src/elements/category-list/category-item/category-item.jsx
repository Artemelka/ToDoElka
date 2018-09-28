import React, { Component, Fragment } from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const styles = () => ({
    button: {
        padding: 8
    },
    menuItem: {
        padding: '10px 8px'
    },
    icon: {
        fontSize: 18
    }
});

export class CategoryItemComponent extends Component {
    static defaultProps = {
        categoryName: 'TestCategory'
    };

    state = {
        anchorEl: null
    };

    handleMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleClose = () => this.setState({ anchorEl: null });

    renderEdit = () => {
        const { onConfirm, handleInputBlur, classes  } = this.props;

        return(
            <Fragment>
                <IconButton
                    aria-label="Confirm"
                    color="primary"
                    className={classes.button}
                    onClick={onConfirm}
                >
                    <Icon fontSize="small" className={classes.icon} >done</Icon>
                </IconButton>
                <IconButton
                    aria-label="clear"
                    color="primary"
                    className={classes.button}
                    onClick={handleInputBlur}
                >
                    <Icon fontSize="small" className={classes.icon}>clear</Icon>
                </IconButton>
            </Fragment>
        );
    };

    renderMore = () => {
        const { onEdit, onCreate, onRemove, hasChild, classes  } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

      return(
          <Fragment>
              <IconButton
                  aria-label="More"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleMenu}
              >
                  <Icon fontSize="small" className={classes.icon} >more_vert</Icon>
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={anchorOrigin}
                  transformOrigin={transformOrigin}
                  open={open}
                  onClose={this.handleClose}
              >
                  <MenuItem
                      className={classes.menuItem}
                      onClick={this.handleClose}
                  >
                      <IconButton
                          aria-label="Edit"
                          color="primary"
                          className={classes.button}
                          onClick={onEdit}
                      >
                          <Icon fontSize="small" className={classes.icon} >create</Icon>
                      </IconButton>
                      <IconButton
                          aria-label="Create"
                          color="primary"
                          className={classes.button}
                          onClick={onCreate}
                      >
                          <AddIcon fontSize="small" className={classes.icon} />
                      </IconButton>
                      <IconButton
                          aria-label="Delete"
                          color="primary"
                          className={classes.button}
                          onClick={onRemove}
                          disabled={!hasChild}
                      >
                          <DeleteIcon fontSize="small" className={classes.icon} />
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
            classes,
            onShowChild,
            hasShowChild,
            hasChild,
            hasEditCategory,
            onClick,
            onNameClick,
            handleInputBlur,
            withRef,
            withInputRef
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
                            className={classes.button}
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

                        <Input
                            value={categoryName}
                            disabled={!hasEditCategory}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            onBlur={handleInputBlur}
                            ref={withInputRef}
                        />
                    </div>
                </div>
                <div className="Category-item__right">
                    <ButtonVariant />
                </div>
            </div>
        );
    }
}

export const CategoryItem = withStyles(styles)(CategoryItemComponent);
