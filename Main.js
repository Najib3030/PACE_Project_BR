
//Array of all nodes
const nodes = document.getElementsByClassName("node");

//Change background colour when btn is clicked
let vulnOnOff = 0;
function toggleVuln() {
    vulnOnOff ++;
    if (vulnOnOff%2 == 1) {
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

