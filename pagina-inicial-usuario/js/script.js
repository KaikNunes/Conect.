function openProject() {
    document.getElementById("modal-projeto").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeProject() {
    document.getElementById("modal-projeto").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function openModal2() {
    document.getElementById("modal2").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal2() {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openFileExplorer() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.click();
}

var projectImage = document.getElementById("project-image");
var overlay = document.getElementById("overlay2");

projectImage.onclick = function () {
    if (projectImage.classList.contains("expanded")) {
        projectImage.classList.remove("expanded");
        overlay.style.display = "none";
    } else {
        projectImage.classList.add("expanded");
        overlay.style.display = "block";
    }
};

var projectImage2 = document.getElementById("project-image2");
var overlay2 = document.getElementById("overlay3");

projectImage2.onclick = function () {
    if (projectImage2.classList.contains("expanded")) {
        projectImage2.classList.remove("expanded");
        overlay2.style.display = "none";
    } else {
        projectImage2.classList.add("expanded");
        overlay2.style.display = "block";
    }
};