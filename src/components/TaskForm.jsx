import React, { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const TaskForm = (({ create }) => {

    function id() {
        return uuid();
    }

    const [task, setTask] = useState({ decription: '', urgency: '', time: '', isCompleted: false, isEdit: false })
    const [selectValue, setSelectValue] = useState('');

    function addNewTask(event) {
        event.preventDefault()
        const newTask = { ...task, id: id() }
        create(newTask)
        setTask({ decription: '', urgency: '', time: '', isCompleted: false, isEdit: false })
        setSelectValue('');
    }

    function selectChange(event) {
        setSelectValue(event.target.value);
        setTask({ ...task, urgency: event.target.value })
    }

    function setTime(time) {
        let date = new Date();
        return addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()) + ' ' +
            addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    }

    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    return (
        <form className='taskForm'>

            <MyInput
                value={task.decription}
                onChange={event => setTask({ ...task, decription: event.target.value, time: setTime() })}
                type='text'
                placeholder='Описание задачи'
            />

            <div >
                <label> Установите срочность события:
                    <select className='select' style={{background: '#634129'}}
                        value={selectValue}
                        onChange={selectChange} >
                        <option defaultValue>...</option>
                        <option>Не срочно</option>
                        <option>Среднесрочно</option>
                        <option>! Срочно !</option>
                    </select>
                </label>
            </div>
            <div>
                {setTime}
            </div>

            <MyButton onClick={addNewTask}>Создать задачу</MyButton>

        </form>
    )
})

export default TaskForm;
