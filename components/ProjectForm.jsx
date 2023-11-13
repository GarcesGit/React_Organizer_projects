import React, { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const ProjectForm = (({ create }) => {

    function id() {
        return uuid();
    }

    const [project, setProject] = useState({ name: '', isEdit: false })

    function addNewProject(event) {
        event.preventDefault()
        const newProject = { ...project, id: id() }
        create(newProject)
        setProject({ name: '', urgency: '', time: '', isCompleted: false, isEdit: false })
    }

    return (
        <form className='taskForm'>

            <MyInput
                value={project.name}
                onChange={event => setProject({ ...project, name: event.target.value })}
                type='text'
                placeholder='Название проекта'
            />


            <MyButton onClick={addNewProject}>Создать проект</MyButton>

        </form>
    )
})

export default ProjectForm;
