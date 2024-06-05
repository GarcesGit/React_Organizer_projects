import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import Tasks from "../tasks/Tasks";
import classes from "../../styles/Show.module.css";

const ProjectItem = (props) => {
    const [visible, setVisible] = useState(false);

    let tasksClasses = [classes.hidden];

    if (visible) {
        tasksClasses.push(classes.active);
    }

    return (
        <div className="project">
            <div className={props.isCompleted ? "notActive" : "project_content"}>
                <strong> {props.number}. </strong>
                {props.project.isEdit ? (
                    <input
                        className="input"
                        type="text"
                        value={props.project.name}
                        onChange={(event) => props.editProject(props.project, event)}
                    />
                ) : (
                    <a
                        className="projectLink"
                        href="#"
                        onClick={() => (!visible ? setVisible(true) : setVisible(false))}
                    >
                        {props.project.name}
                    </a>
                )}
            </div>

            <div className="project_btn">
                <MyButton
                    style={{ color: "orange" }}
                    onClick={() => props.toggleMode(props.project)}
                >
                    {props.project.isEdit ? "save" : "edit"}
                </MyButton>
                <MyButton
                    style={{ color: "red" }}
                    onClick={() => props.remove(props.project)}
                >
                    &#10008;
                </MyButton>
            </div>
            <div className={tasksClasses.join(" ")}>
                <Tasks
                    tasks={props.project.tasks}
                    createTask={props.createTask}
                    projectID={props.project.id}
                    deleteTask={props.deleteTask}
                    completeTask={props.completeTask}
                    toggleEditTaskMode={props.toggleEditTaskMode}
                    editTask={props.editTask}
                    taskModal={props.taskModal}
                    setTaskModal={props.setTaskModal}
                />
            </div>
        </div>
    );
};

export default ProjectItem;
