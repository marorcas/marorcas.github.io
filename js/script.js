document.getElementById('enter').addEventListener('click', function() {
    window.location.href = './portfolio.html';
});


//open and close project modal
const projects = document.querySelectorAll('.content__projects__icon');
const projectModal = document.getElementById('projectModal');

projects.forEach((project) => {
    project.addEventListener('click', () => {
        projectModal.style.display = 'flex';
    });
});

const closeProject = document.getElementById('closeProject');

closeProject.addEventListener('click', () => {
    projectModal.style.display = 'none';
});