import React from 'react';
import MyButton from './UI/button/MyButton';


const ProjectItem = (( props ) => {

    return (
        <div className="project">
            <div className={props.isCompleted ? 'notActive' : 'project_content'}>
                <strong> {props.number}. </strong>
                {props.isEdit
                    ? <input className='input' type="text" value={props.project.name}
                        onChange={(event) => props.editProject(props.project, event)}
                    />
                    : <strong>{props.project.name}</strong>
                }
            </div>

            <div className="project_btn">
                <MyButton style={{ color: 'orange' }}
                    onClick={() => props.toggleMode(props.project)}>
                    {props.isEdit ? 'save' : 'edit'}
                </MyButton>
                <MyButton style={{ color: 'red' }}
                    onClick={() => props.remove(props.project)}>
                    &#10008;
                </MyButton>
            </div>

        </div>
    )
})

export default ProjectItem;
