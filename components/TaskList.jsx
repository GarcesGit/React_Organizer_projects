import React from 'react';
import TaskItem from './TaskItem';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TaskList = (({ tasks, title, remove, complete, isCompleted, toggleMode, isEdit, editTask }) => {

    if (!tasks.length) {//если длина равна нулю
        return (
            <h2 style={{ textAlign: 'center' }}>
                Все дела завершены!
            </h2>
        )
    }

    return (
        <div>
            <h1>
                {title}
            </h1>

            <TransitionGroup>
                {tasks.map((task, index) =>
                    <CSSTransition key={task.id} timeout={500} classNames='task'>
                        <TaskItem toggleMode={toggleMode}
                            isEdit={task.isEdit}
                            editTask={editTask}
                            complete={complete}
                            isCompleted={task.isCompleted}
                            remove={remove}
                            number={index + 1}
                            task={task}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
})

export default TaskList;
