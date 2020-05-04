import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css"
import "../../css/utility.css"
import PropTypes from 'prop-types'

/**
 *
 * @param {{title: string, description:string, duration:number} & any} props
 * @returns {*}
 * @constructor
 */
export default function Task({description, duration, isCompleted = false, className = "", ...otherProps}) {
    const colour = isCompleted ? "success" : "dark";
    const background = "bg-" + colour;
    const border = "border-" + colour;

    const TaskIcon = () => <i className={`fas fa-desktop text-white ${background} rounded-right rounded-top p-2 m-0`}/>;
    const GoIcon = ({className, ...otherProps}) => <i className={`fas fa-arrow-right ${className}`} {...otherProps}/>

    return (
        <div
            className={`d-flex flex-column rounded no-select ${border} ${className}`}
            style={{border: "2px solid"}}
            {...otherProps}
        >
            <span className="font-weight-light p-2">{description}</span>
            <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="font-weight-light text-dark">
                    <TaskIcon/> {duration} uur
                </span>
                <GoIcon className="mr-2"/>
            </div>
        </div>
    );
}

Task.propTypes = {
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
}