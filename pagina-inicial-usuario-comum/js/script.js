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
document.querySelectorAll('.button').forEach(button => {

    let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

    button.addEventListener('click', e => {

        if(!button.classList.contains('active')) {

            button.classList.add('active');

            gsap.to(button, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(button, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            button.removeAttribute('style');
                            gsap.fromTo(button, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    button.classList.remove('active');
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(button, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': getVar('--primary-darkest'),
                    '--right-wing-background': getVar('--primary-darkest'),
                    duration: .1
                }, {
                    '--left-wing-background': getVar('--primary'),
                    '--right-wing-background': getVar('--primary'),
                    duration: .1
                }, {
                    '--left-body-background': getVar('--primary-dark'),
                    '--right-body-background': getVar('--primary-darkest'),
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }

    })

});
