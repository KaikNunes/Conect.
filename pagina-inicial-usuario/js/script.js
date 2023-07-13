function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
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
