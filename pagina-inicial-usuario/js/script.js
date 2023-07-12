function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


var projectImage = document.getElementById("project-image");

projectImage.onclick = function () {
    projectImage.classList.toggle("expanded");
    document.getElementById("overlay2").style.display = "block";
};
