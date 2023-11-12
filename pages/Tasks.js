import React, { useMemo, useState } from 'react';
import '../styles/App.css';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskSorting from '../components/TaskSorting';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

function Tasks() {

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
		setTasks(tasks.sorting(p => p.id !== task.id))
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
	React.useEffect(() => {
		const json = localStorage.getItem("tasks");
		const loadedTasks = JSON.parse(json);
		if (loadedTasks) {
			setTasks(loadedTasks);
		}
	}, []);

	React.useEffect(() => {
		const json = JSON.stringify(tasks);
		localStorage.setItem("tasks", json);
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
		<div className="App">
			<div className="dashboard">
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
			<hr className="hr-shadow" />

			<TaskList toggleMode={toggleMode}
				editTask={editTask}
				complete={completeTask}
				remove={removeTask}
				tasks={sortedTasks}
				title='Список задач'
			/>

		</div>
	)
}

export default Tasks;
