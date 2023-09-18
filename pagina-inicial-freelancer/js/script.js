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


function openModal3() {
    document.getElementById("modal3").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal3() {
    document.getElementById("modal3").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openModal4() {
    document.getElementById("modal4").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal4() {
    document.getElementById("modal4").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openModal5() {
    document.getElementById("modal5").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal5() {
    document.getElementById("modal5").style.display = "none";
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
        console.log(overlay);
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

var projectImage3 = document.getElementById("project-image3");
var overlay3 = document.getElementById("overlay4");

projectImage3.onclick = function () {
    if (projectImage3.classList.contains("expanded")) {
        projectImage3.classList.remove("expanded");
        overlay3.style.display = "none";
    } else {
        projectImage3.classList.add("expanded");
        overlay3.style.display = "block";
    }
};

var projectImage4 = document.getElementById("project-image3");
var overlay4 = document.getElementById("overlay5");

projectImage4.onclick = function () {
    if (projectImage4.classList.contains("expanded")) {
        projectImage4.classList.remove("expanded");
        overlay4.style.display = "none";
    } else {
        projectImage4.classList.add("expanded");
        overlay4.style.display = "block";
    }
};

var projectImage5 = document.getElementById("project-image3");
var overlay5 = document.getElementById("overlay6");

projectImage5.onclick = function () {
    if (projectImage5.classList.contains("expanded")) {
        projectImage5.classList.remove("expanded");
        overlay3.style.display = "none";
    } else {
        projectImage5.classList.add("expanded");
        overlay5.style.display = "block";
    }
};

projectImage3.onclick = function () {
    console.log("Image clicked!"); // Verifique se essa mensagem é exibida no console
    if (projectImage3.classList.contains("expanded")) {
        projectImage3.classList.remove("expanded");
        overlay3.style.display = "none";
    } else {
        projectImage3.classList.add("expanded");
        overlay3.style.display = "block";
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

    function slideDownNotificationTab() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
        console.log("Oi button");
    }

    function slideDownNotificationTabIcon() {
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("Oi icon");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
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

// Fechar o dropdown se o usuário clicar fora dele ou no ícone de notificação
window.onclick = function (event) {
    var dropdown = document.getElementById("myDropdown");
    var icon = document.querySelector(".dropbtn i");

    if (event.target !== dropdown && event.target !== icon) {
        dropdown.style.display = "none";
        dropdownVisible = false;
    }
}