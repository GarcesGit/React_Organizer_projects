import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Projects = (() => {

	const [projects, setProjects] = useState([]);
	const [modal, setModal] = useState(false);

	const createProject = (newProject) => {
		setProjects([...projects, newProject])
		setModal(false)
	}

	const removeProject = (project) => {
		setProjects(projects.filter(p => p.id !== project.id))
	}

	const toggleMode = (project) => {
		setProjects(projects.map(p => {
			if (p.id === project.id) {
				p.isEdit = !p.isEdit;
			}
			return p;
		}));
	}

	const editProject = (project, event) => {
		setProjects(projects.map(p => {
			if (p.id === project.id) {
				p.name = event.target.value;
			}
			return p;
		}));
	}

	useEffect(() => {
		const json = localStorage.getItem('projects');
		const loadedProjects = JSON.parse(json);
		if (loadedProjects) {
			setProjects(loadedProjects);
		}
	}, []);

	useEffect(() => {
		const json = JSON.stringify(projects);
		localStorage.setItem('projects', json);
	}, [projects]);

	return (
		<div className='projects'>
			<div className='dashboard'>
				<MyButton onClick={() => setModal(true)}>
					Создать проект
				</MyButton>

				<MyModal visible={modal} setVisible={setModal}>
					<ProjectForm create={createProject} />
				</MyModal>
			</div>

			<ProjectList toggleMode={toggleMode}
				editProject={editProject}
				remove={removeProject}
				projects={projects}
				title='Список проектов'
			/>
		</div>
	)
})
export default Projects;
