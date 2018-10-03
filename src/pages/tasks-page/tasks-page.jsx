import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

class TasksPageComponent extends Component {
    render() {
        const {allTasks, match, history} = this.props;
        const activeCategory = match.params.catId;
        console.log(allTasks);
        return (
            <div className="Tasks-page">
                {Object.values(allTasks)
                    .filter(task => task.parent === activeCategory)
                    .map((task, i) =>
                        <ExpansionPanel key={i}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{task.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                }
            </div>
        );
    }
}

export const TasksPage = connect(
    store => ({
        allTasks: store.allTasks
    })
)(TasksPageComponent);