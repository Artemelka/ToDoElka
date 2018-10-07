import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './new-subcategory.css';

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing.unit,
        marginBottom: 45,
        width: '100%'
    }
});

export class NewSubCategoryComponentView extends Component {
    render() {
        const {
            subCategoryValue, onSubCategoryValueChange, buttonDisabled,
            onCreateSubCategory, classes
        } = this.props;
        const buttonText = 'create';

        return (
            <div className="New-subcategory">
                <div className="New-subcategory__inner">
                    <h3 className="New-subcategory__heading">
                        Create new subcategory
                    </h3>
                    <div className="New-subcategory__content">
                        <TextField
                            id="new-subcategory-name"
                            label="Subcategory name"
                            className={classes.formControl}
                            // placeholder="Placeholder"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            value={subCategoryValue}
                            onChange={onSubCategoryValueChange}
                        />
                    </div>
                    <div className="New-subcategory__action">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onCreateSubCategory}
                            disabled={buttonDisabled}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export const NewSubCategoryComponent = withStyles(styles)(NewSubCategoryComponentView);