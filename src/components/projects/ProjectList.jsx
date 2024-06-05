import React from "react";
import ProjectItem from "./ProjectItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectList = ({
    projects,
    title,
    toggleMode,
    editProject,
    remove,
    createTask,
    deleteTask,
    completeTask,
    toggleEditTaskMode,
    editTask,
    taskModal,
    setTaskModal,
}) => {
    if (!projects.length) {
        return <h1 style={{ textAlign: "center" }}>Создайте новый проект!</h1>;
    }
    return (
        <div>
            <h1>{title}</h1>

            <TransitionGroup>
                {projects.map((project, index) => (
                    <CSSTransition key={project.id} timeout={500} classNames="task">
                        <ProjectItem
                            toggleMode={toggleMode}
                            editProject={editProject}
                            remove={remove}
                            number={index + 1}
                            project={project}
                            createTask={createTask}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                            toggleEditTaskMode={toggleEditTaskMode}
                            editTask={editTask}
                            taskModal={taskModal}
                            setTaskModal={setTaskModal}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default ProjectList;
