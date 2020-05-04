import React, {Component} from 'react';
import PropTypes from "prop-types"
import Task from "./task.component";

class Level extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: false
        }
    }

    render() {
        const {tasks = [], title, ...otherProps} = this.props;
        const taskElements = tasks.length > 0 ? tasks.map(task => <Task
            className="m-1 w-25"
            description={task.description}
            duration={task.duration}
            isCompleted={task.isCompleted}
        />) : "No tasks present";

        const amountCompleted = tasks.reduce((count, item) => item.isCompleted ? count + 1 : count, 0);
        const Header = (props) => <h4 className={"p-2 cursor-pointer no-select font-weight-light border-bottom"} {...props}>{title} ({amountCompleted}/{tasks.length})</h4>;

        const content = !this.state.isCollapsed ? (
            <div className="d-flex justify-content-start">
                {taskElements}
            </div>) : null
        return (
            <div className="bg-white" {...otherProps}>
                <Header onClick={() => this.setState({isCollapsed: !this.state.isCollapsed})}/>
                {content}
            </div>
        );
    }
}

Level.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.array.isRequired
}

export default Level;