const addToDb = id => {
    let appliedProject = getAppliedProject();
    if (!appliedProject.find(project => project.id == id.id)) {
        appliedProject.push(id);
    }
    localStorage.setItem('applied-project', JSON.stringify(appliedProject));
}

const getAppliedProject = () => {
    let appliedProject = [];

    const storedProject = localStorage.getItem('applied-project');
    if (storedProject) {
        appliedProject = JSON.parse(storedProject);
    }
    return appliedProject;
}

export { addToDb, getAppliedProject }


