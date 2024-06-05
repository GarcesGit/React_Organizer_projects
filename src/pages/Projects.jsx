import React, { useState, useEffect } from "react";
import "../styles/App.css";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import ProjectForm from "../components/projects/ProjectForm";
import ProjectList from "../components/projects/ProjectList";
import MyСlock from "../components/UI/clock/MyСlock";
import MyCalendar from "../components/UI/calendar/MyCalendar";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [modal, setModal] = useState(false);
    const [taskModal, setTaskModal] = useState(false);

    useEffect(() => {
        const json = localStorage.getItem("projects");
        const loadedProjects = JSON.parse(json);
        if (loadedProjects) {
            setProjects(loadedProjects);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(projects);
        localStorage.setItem("projects", json);
    }, [projects]);

    const createProject = (newProject) => {
        setProjects([...projects, newProject]);
        setModal(false);
    };

    const removeProject = (project) => {
        setProjects(projects.filter((p) => p.id !== project.id));
    };

    const toggleMode = (project) => {
        setProjects(
            projects.map((p) => {
                if (p.id === project.id) {
                    p.isEdit = !p.isEdit;
                }
                return p;
            })
        );
    };

    const editProject = (project, event) => {
        setProjects(
            projects.map((p) => {
                if (p.id === project.id) {
                    p.name = event.target.value;
                }
                return p;
            })
        );
    };

    const createTask = (projectID, newTask) => {
        const newProjects = projects.map((p) => {
            if (p.id === projectID) {
                p.tasks = [...p.tasks, newTask];
                setTaskModal(false);
            }
            return p;
        });
        setProjects(newProjects);
    };

    const deleteTask = (projectID, taskID) => {
        const newProjects = projects.map((p) => {
            if (p.id === projectID) {
                p.tasks = p.tasks.filter((task) => task.id !== taskID);
            }
            return p;
        });
        setProjects(newProjects);
    };

    const completeTask = (projectID, taskID) => {
        const newProjects = projects.map((p) => {
            if (p.id === projectID) {
                p.tasks = p.tasks.map((task) => {
                    if (task.id === taskID) {
                        task.isCompleted = !task.isCompleted;
                    }
                    return task;
                });
            }
            return p;
        });
        setProjects(newProjects);
    };

    const toggleEditTaskMode = (projectID, taskID) => {
        const newProjects = projects.map((p) => {
            if (p.id === projectID) {
                p.tasks = p.tasks.map((task) => {
                    if (task.id === taskID) {
                        task.isEdit = !task.isEdit;
                    }
                    return task;
                });
            }
            return p;
        });
        setProjects(newProjects);
    };

    const editTask = (projectID, taskID, event) => {
        const newProjects = projects.map((p) => {
            if (p.id === projectID) {
                p.tasks = p.tasks.map((task) => {
                    if (task.id === taskID) {
                        task.decription = event.target.value;
                    }
                    return task;
                });
            }
            return p;
        });
        setProjects(newProjects);
    };

    return (
        <div className="main">
            <div className="tools">
                <MyСlock />
                <MyCalendar />
            </div>
            <div className="projects">
                <div className="dashboard">
                    <MyButton onClick={() => setModal(true)}>Создать проект</MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <ProjectForm create={createProject} />
                    </MyModal>
                </div>

                <ProjectList
                    toggleMode={toggleMode}
                    editProject={editProject}
                    remove={removeProject}
                    projects={projects}
                    title="Список проектов"
                    createTask={createTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    toggleEditTaskMode={toggleEditTaskMode}
                    editTask={editTask}
                    taskModal={taskModal}
                    setTaskModal={setTaskModal}
                />
            </div>
        </div>
    );
};
export default Projects;
