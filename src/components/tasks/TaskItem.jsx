import React from "react";
import MyButton from "../UI/button/MyButton";

const TaskItem = (props) => {
    return (
        <div className="task">
            <div className={props.isCompleted ? "notActive" : "task_content"}>
                <strong> {props.number}. </strong>
                {props.isEdit ? (
                    <input
                        className="input"
                        type="text"
                        value={props.task.decription}
                        onChange={(event) =>
                            props.editTask(props.projectID, props.task.id, event)
                        }
                    />
                ) : (
                    <strong>{props.task.decription}</strong>
                )}

                <div className="task_content_time">
                    <div className="task_content_time_each">{props.task.urgency}</div>
                    <div className="task_content_time_each">{props.task.time}</div>
                </div>
            </div>

            <div className="task_btn">
                <MyButton
                    style={{ color: "orange" }}
                    onClick={() =>
                        props.toggleEditTaskMode(props.projectID, props.task.id)
                    }
                >
                    {props.isEdit ? "save" : "edit"}
                </MyButton>
                <MyButton
                    style={{ color: "green" }}
                    onClick={() => props.completeTask(props.projectID, props.task.id)}
                >
                    &#10004;
                </MyButton>
                <MyButton
                    style={{ color: "red" }}
                    onClick={() => props.deleteTask(props.projectID, props.task.id)}
                >
                    &#10008;
                </MyButton>
            </div>
        </div>
    );
};

export default TaskItem;
