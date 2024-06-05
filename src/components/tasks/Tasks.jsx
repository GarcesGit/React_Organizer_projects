import React, { useMemo, useState } from "react";
import "../../styles/App.css";
import TaskList from "../tasks/TaskList";
import TaskForm from "./TaskForm";
import TaskSorting from "../tasks/TaskSorting";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";

const Tasks = (props) => {
    const [sorting, setSorting] = useState({ sort: "", query: "" });
    // const [modal, setModal] = useState(false);

    const sortedTasks = useMemo(() => {
        if (sorting.sort) {
            return [...props.tasks].sort((a, b) =>
                a[sorting.sort].localeCompare(b[sorting.sort])
            );
        }
        return props.tasks;
    }, [sorting.sort, props.tasks]);

    return (
        <div className="tasks">
            <div className="task_dashboard">
                <MyButton onClick={() => props.setTaskModal(true)}>
                    Создать задачу
                </MyButton>
                <MyModal visible={props.taskModal} setVisible={props.setTaskModal}>
                    <TaskForm createTask={props.createTask} projectID={props.projectID} />
                </MyModal>

                <TaskSorting sorting={sorting} setSorting={setSorting} />
            </div>

            <TaskList
                tasks={sortedTasks}
                title="Список задач"
                projectID={props.projectID}
                completeTask={props.completeTask}
                deleteTask={props.deleteTask}
                toggleEditTaskMode={props.toggleEditTaskMode}
                editTask={props.editTask}
            />
        </div>
    );
};

export default Tasks;
