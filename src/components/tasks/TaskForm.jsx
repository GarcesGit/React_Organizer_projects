import React, { useState } from "react";
import uuid from "react-uuid";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import setTime from "../utils/setTime";

const TaskForm = ({ createTask, projectID }) => {
    const [task, setTask] = useState({
        decription: "",
        urgency: "",
        time: "",
        isCompleted: false,
        isEdit: false,
    });
    const [selectValue, setSelectValue] = useState("");

    function id() {
        return uuid();
    }

    function addNewTask(event) {
        event.preventDefault();
        const newTask = { ...task, id: id() };
        createTask(projectID, newTask);
        setTask({
            decription: "",
            urgency: "",
            time: "",
            isCompleted: false,
            isEdit: false,
        });
        setSelectValue("");
    }

    function selectChange(event) {
        setSelectValue(event.target.value);
        setTask({ ...task, urgency: event.target.value });
    }

    return (
        <form className="taskForm">
            <MyInput
                value={task.decription}
                onChange={(event) =>
                    setTask({ ...task, decription: event.target.value, time: setTime() })
                }
                type="text"
                placeholder="Описание задачи"
            />
            <div>
                <label>
                    Установите срочность события:
                    <select
                        className="select"
                        style={{ background: "#634129" }}
                        value={selectValue}
                        onChange={selectChange}
                    >
                        <option defaultValue>...</option>
                        <option>Не срочно</option>
                        <option>Среднесрочно</option>
                        <option>! Срочно !</option>
                    </select>
                </label>
            </div>
            <MyButton onClick={addNewTask}>Создать задачу</MyButton>
        </form>
    );
};

export default TaskForm;
