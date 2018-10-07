import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing.unit,
        marginBottom: 45,
        width: '100%'
    }
});

class InputComponent extends Component {
    render() {
        const {classes, value, onChange, id, label, placeholder, helperText, multiline, variant} = this.props;

        return (
            <TextField
                id={id}
                label={label}
                className={classes.formControl}
                placeholder={placeholder}
                helperText={helperText}
                fullWidth
                multiline={multiline}
                variant={variant}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputProps={{style: {height: 20}}}
                value={value}
                onChange={onChange}
            />
        );
    }
}

export const Input = withStyles(styles)(InputComponent);