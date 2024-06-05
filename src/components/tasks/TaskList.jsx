import React from "react";
import TaskItem from "./TaskItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TaskList = ({
    title,
    projectID,
    tasks,
    deleteTask,
    completeTask,
    toggleEditTaskMode,
    editTask,
}) => {
    if (!tasks.length) {
        return <h2 style={{ textAlign: "center" }}>Все задачи завершены!</h2>;
    }

    return (
        <div>
            <h2>{title}</h2>
            <TransitionGroup>
                {tasks.map((task, index) => (
                    <CSSTransition key={task.id} timeout={500} classNames="task">
                        <TaskItem
                            toggleEditTaskMode={toggleEditTaskMode}
                            isEdit={task.isEdit}
                            editTask={editTask}
                            completeTask={completeTask}
                            isCompleted={task.isCompleted}
                            deleteTask={deleteTask}
                            number={index + 1}
                            task={task}
                            projectID={projectID}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default TaskList;
