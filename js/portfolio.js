// document.getElementById('current-year').textContent = new Date().getFullYear();

//open and close project modal
const projects = document.querySelectorAll('.content__projects__icon');
const projectModal = document.getElementById('projectModal');
[...projects].forEach((project) => {
    project.addEventListener('click', () => {
        console.log(project);
        projectModal.style.display = 'flex';
    });
});

const closeProject = document.getElementById('closeProject');
closeProject.addEventListener('click', () => {
    projectModal.style.display = 'none';
});