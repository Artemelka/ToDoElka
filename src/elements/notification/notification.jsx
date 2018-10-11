import React, { Component } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

import { NotificationContent } from './notification-content';

export class NotificationComponent extends Component {
    render() {
        const { anchorOrigin, autoHideDuration, message, variant, open, onClose } = this.props;

        return (
            <Snackbar
                anchorOrigin={anchorOrigin}
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={onClose}
            >
                <NotificationContent
                    onClose={onClose}
                    variant={variant}
                    message={message}
                />
            </Snackbar>
        );
    }
}

 // const  = withStyles(styles)(NotificationComponentView);
