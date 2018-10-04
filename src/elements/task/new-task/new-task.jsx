import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './new-task.css';

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing.unit,
        marginBottom: 45,
        width: '100%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
});

export class NewTaskComponentView extends Component {
    render() {
        console.log('NewTask', this.props);
        const {
            onCategoryChange, onCreateCategory, onTaskNameChange, onTaskDescriptionChange,
            selectCategory, allCategory, buttonText, classes
        } = this.props;

        return (
            <div className="New-task">
                <h3 className="New-task__heading">Create new tasks</h3>
                <div className="New-task__content">
                    <TextField
                        id="new-task-name"
                        label="Task name"
                        className={classes.formControl}
                        // placeholder="Placeholder"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        onChange={onTaskNameChange}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Category</InputLabel>
                        <Select
                            value={selectCategory}
                            onChange={onCategoryChange}
                            inputProps={{
                                name: 'Category',
                                id: 'new-task-category-parent',
                            }}
                        >
                            {Object.values(allCategory).map((category, index) =>
                                <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        id="new-task-description"
                        label="Task description"
                        placeholder="Enter description"
                        multiline
                        inputProps={{style: {height: 20}}}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={onTaskDescriptionChange}
                    />
                </div>
                <div className="New-task__action">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onCreateCategory}
                        disabled
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}

export const NewTaskComponent = withStyles(styles)(NewTaskComponentView);