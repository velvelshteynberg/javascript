class ToolTip { }

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }


    connectMoreInfoButton() {
        
    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', )
    }
}

class ProjectList {
    projects = [];
    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }

    setSwitchedHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
console.log(this)
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.project = this.project.filter(project => project.id !== projectId);
    }
 }

class App {
    static init() {
        const activeProjectsList = new ProjectList('active', );
        const finisihedProjectList = new ProjectList('finished');
        activeProjectsList.setSwitchedHandlerFunction(finisihedProjectList.addProject.bind(finisihedProjectList));
        
        finisihedProjectList.setSwitchedHandlerFunction(finisihedProjectList.addProject.bind(activeProjectsList));

    }
}

App.init();