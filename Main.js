
//Array of all nodes
const nodes = document.getElementsByClassName("node");



//Change background colour when btn is clicked
let vulnOnOff = 0;
function toggleVuln() {
    vulnOnOff++;
    if (vulnOnOff % 2 == 1) {
        for (const element of nodes) {
            element.style.background = "#4FC3F7";   //Remove this line
            //Replace with vulberability checks
            if (element.vuln == 'low') {
                //Blue
                element.style.background = "#4FC3F7";
            }
            else if (element.vuln == 'medium') {
                //Yellow
                element.style.background = "#FFEB3B";
            }
            else if (element.vuln == 'high') {
                //Red
                element.style.background = "#EF5350";
            }
        }
    } else {
        for (const element of nodes) {
            element.style.background = "#fff";
        }
    }
}

//Popup variable

function togglePopup() {
    document.getElementById("popup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

//Scroll functionality
const ele = document.getElementById('container');
ele.scrollTop = 100;
ele.scrollLeft = 150;

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
        
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};

//https://htmldom.dev/drag-to-scroll/