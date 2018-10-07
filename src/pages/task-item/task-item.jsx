import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

import { ButtonIcon as IconButton } from '../../elements/buttons';


const styles = () => ({
    avatar: {
        backgroundColor: red[500]
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    typography: {
        marginRight: 10
    }
});

class TaskItemComponentView extends Component {

    render() {
        const { classes, userAvatar, onRemoveTask, onChangeStatusTask, taskName,
            taskDescription, taskTime, taskAuthor, status, taskId } = this.props;

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {userAvatar}
                        </Avatar>
                    }
                    action={
                        <IconButton
                            onClick={onRemoveTask}
                            titel="delete"
                            fontSize="large"
                            color="secondary"
                        />
                    }
                    title={taskName}
                    subheader={taskTime}
                />
                <CardContent>
                    <Typography component="p">
                        {taskDescription}
                    </Typography>
                    <br/>
                    <br/>
                    <Divider />
                    <CardActions className={classes.actions} disableActionSpacing>
                        <Typography component="span" variant="body2" gutterBottom className={classes.typography}>
                            Creator : {taskAuthor}
                        </Typography>
                        <Typography component="span" variant="body2" gutterBottom className={classes.typography}>
                            Status :
                            <Switch
                            checked={status}
                            onChange={onChangeStatusTask}
                            value={taskId}
                            color="primary"
                        />
                        </Typography>
                    </CardActions>
                </CardContent>


            </Card>
        );
    }
}

export const TaskItemComponent = withStyles(styles)(TaskItemComponentView);