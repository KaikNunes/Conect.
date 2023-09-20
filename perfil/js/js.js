function openProject() {
    document.getElementById("modal-projeto").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeProject() {
    document.getElementById("modal-projeto").style.display = "none";
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
        console.log(overlay);
    }
};

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    var dropdownVisible = false;

    // Função para alternar a visibilidade do dropdown
    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdownVisible = !dropdownVisible;

        if (dropdownVisible) {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    }

    // Fechar o dropdown se o usuário clicar fora dele
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdown = document.getElementById("myDropdown");
            if (dropdownVisible) {
                dropdown.style.display = "none";
                dropdownVisible = false;
            }
        }
    }