function showDeveloperInfo(lastName, firstName, position = 'Developer') {
    alert(`Information about developer\nSurname: ${lastName}\nName: ${firstName}\nPosition: ${position}`);
}

function compareStrings() {
    let result = confirm("Do you want to compare the length of your strings?");
    if (result === true) {
        let firstString = prompt("Enter the first string:");
        let secondString = prompt("Enter the second string:");

        if (firstString.length > secondString.length) {
            alert(`First string '${firstString}' is longer than second string '${secondString}'`);
        }
        else if (firstString.length < secondString.length) {
            alert(`Second string '${secondString}' is longer than first string '${firstString}'`);
        }
        else if (firstString.length == secondString.length) {
            alert(`First string '${firstString}' is the same length as the second string '${secondString}'`);
        }
        else {
            alert(`Incorrect data! Please enter again!`);
        }
        result = confirm("Do you want to repeat your entry?");
        if (result === true) {
            compareStrings();
        }
    }
}

function otherWebsite() {
    if (confirm(location.href + "\nDo you confirm the transition to another site?") == true) {
        location.href = "https://en.wikipedia.org/wiki/Software_development";
    }
}

function changeElementColor() {
    let elem = document.getElementById('last_added');
    elem.style.backgroundColor = 'purple';
    setTimeout(() => elem.style.backgroundColor = "", 3000);
}

function officesEmails() {
    let elements = document.querySelectorAll('.offices > div:last-child');
    for (let elem of elements) {
        alert(elem.innerHTML);
        alert(elem.outerHTML);
    }
}

function storeTitle(element) {
    element.style.background = "linear-gradient(to right, #eb4034, #f09d7f)";
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';

    setTimeout(function() {
        element.style.background = '';
        element.style.webkitBackgroundClip = '';
        element.style.webkitTextFillColor = '';
    }, 3000);
}

function reviewInfo() {
    let elements = document.querySelectorAll('.container_main > p');
    for (let elem of elements) {
        alert(elem.textContent);
    }
}

function alertFunction() {
    alert('Ви змінили колір фону!');
}

function changeBackgroundFunction() {
    if (document.body.style.background == 'gray') {
        document.body.style.background = '';
    } else {
        document.body.style.background = 'gray';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let bgColorElement = document.getElementById('bg_color');
    bgColorElement.addEventListener('click', alertFunction);
    bgColorElement.addEventListener('click', changeBackgroundFunction);

    let clearListenersElement = document.getElementById('listener_remove');
    clearListenersElement.addEventListener('click', function() {
        bgColorElement.removeEventListener('click', alertFunction);
        bgColorElement.removeEventListener('click', changeBackgroundFunction);
        alert('Ви зафіксували обраний колір фону. Щоб знову мати змогу його змінювати - перезавантажте сторінку.');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const actionMenu = document.getElementById('menu');

    actionMenu.addEventListener('click', function(event) {
        const action = event.target.getAttribute('data-action');
        if (action) {
            switch(action) {
                case 'showDeveloperInfo':
                    showDeveloperInfo('Bohdan', 'Overianov');
                    break;
                case 'compareStrings':
                    compareStrings();
                    break;
                case 'changeBackgroundFunction':
                    changeBackgroundFunction();
                    break;
            }
        }
    });

    document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;
        let elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const officeElements = document.querySelectorAll('.offices');

    officeElements.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            const target = event.currentTarget;
            target.classList.add('hovered');
        });

        element.addEventListener('mouseout', function(event) {
            const target = event.currentTarget;
            target.classList.remove('hovered');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const officeElements = document.querySelectorAll('#servicesList li');
    const servicesList = document.querySelector('#servicesList');

    officeElements.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            const relatedElement = event.relatedTarget;

            if (relatedElement && relatedElement.tagName === 'LI' && servicesList.contains(relatedElement)) {
                relatedElement.classList.remove('hovered_services');
                relatedElement.classList.add('hovered_services_related');
                setTimeout(() => {
                    relatedElement.classList.remove('hovered_services_related');
                }, 2000);
            }

            event.target.classList.add('hovered_services');
        });

        element.addEventListener('mouseout', function(event) {
            event.target.classList.remove('hovered_services');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');

    logo.onmousedown = function(event) {
        let shiftX = event.clientX - logo.getBoundingClientRect().left;
        let shiftY = event.clientY - logo.getBoundingClientRect().top;

        logo.style.position = 'absolute';
        logo.style.zIndex = 1000;

        document.body.append(logo);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            logo.style.left = pageX - shiftX + 'px';
            logo.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        logo.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            logo.onmouseup = null;
        };

        logo.ondragstart = function() {
            return false;
        };
    };
});