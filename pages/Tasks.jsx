import React, { useMemo, useState, useEffect } from 'react';
import '../styles/App.css';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskSorting from '../components/TaskSorting';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

const Tasks = (() => {

	const [tasks, setTasks] = useState([]);
	const [sorting, setSorting] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false);

//создание
	const createTask = (newTask) => {
		setTasks([...tasks, newTask])
		setModal(false)
	}

//удаление
	const removeTask = (task) => {
		setTasks(tasks.filter(p => p.id !== task.id))
	}

//завершение
	const completeTask = (task) => {
		setTasks([...tasks].map(p => {
			if (p.id === task.id) {
				p.isCompleted = !p.isCompleted;
			}
			return p;
		}));
	}

//сортировка
	const sortedTasks = useMemo(() => {
		if (sorting.sort) {
			return [...tasks].sort((a, b) => a[sorting.sort].localeCompare(b[sorting.sort]))
		}
		return tasks;
	}, [sorting.sort, tasks]);

//сохранение
	useEffect(() => {
		const jSon = localStorage.getItem('tasks');
		const loadedTasks = JSON.parse(jSon);
		if (loadedTasks) {
			setTasks(loadedTasks);
		}
	}, []);

	useEffect(() => {
		const jSon = JSON.stringify(tasks);
		localStorage.setItem('tasks', jSon);
	}, [tasks]);

//редактирование
	const toggleMode = (task) => {
		setTasks(tasks.map(p => {
			if (p.id === task.id) {
				p.isEdit = !p.isEdit;
			}
			return p;
		}));
	}

	const editTask = (task, event) => {
		setTasks(tasks.map(p => {
			if (p.id === task.id) {
				p.decription = event.target.value;
			}
			return p;
		}));
	}

	return (
		<div className='tasks'>
			<div className='task_dashboard'>
				<MyButton onClick={() => setModal(true)}>
					Создать задачу
				</MyButton>

				<MyModal visible={modal} setVisible={setModal}>
					<TaskForm create={createTask} />
				</MyModal>

				<TaskSorting
					sorting={sorting}
					setSorting={setSorting}
				/>
			</div>

			<TaskList toggleMode={toggleMode}
				editTask={editTask}
				complete={completeTask}
				remove={removeTask}
				tasks={sortedTasks}
				title='Список задач'
			/>
		</div>
	)
})

export default Tasks;
