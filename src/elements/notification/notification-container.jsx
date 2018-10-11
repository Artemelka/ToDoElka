import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NotificationComponent } from './notification';
import { actionType } from '../../actions/action-type';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
};
const HIDE_DURATION = 5000;

class NotificationContainer extends Component {
    handleClose = (event, reason) => {
        const { removeNotification } = this.props;

        if (reason === 'clickaway') {
            return;
        }

        removeNotification();
    };

    render() {
        const { notification } = this.props;
        return (
           <NotificationComponent
               anchorOrigin={anchorOrigin}
               autoHideDuration={HIDE_DURATION}
               message={notification.message}
               variant={notification.variant}
               open={notification.open}
               onClose={this.handleClose}
           />
        );
    }
}

export const Notification = connect(
    store => ({notification: store.notification}),
    dispatch => ({
        removeNotification: id => dispatch({type: actionType.REMOVE_NOTIFICATION, payload: id})
    })
)(NotificationContainer);
