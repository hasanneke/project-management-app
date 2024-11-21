import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectState , setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });
    function handleStartAddProject(projectData){
       setProjectsState(prevState => {
           return {
               ...prevState,
               selectedProjectId: null,
           }
       })
    }
    function handleAddProject(projectData){
        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            }
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            };
        });
    }
    console.log(projectState);

    let content;
    if(projectState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} />
    } else if(projectState.selectedProjectId === undefined){
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject}
                      projects={projectState.projects}
                      onAddProject={handleAddProject}/>
        {content}
    </main>
  );
}

export default App;
