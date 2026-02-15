

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");



function f(x) {
    return x * x;
}
function g(x) {
    return x * x / 4;
}
function h(x) {
    return x * x - 4;
}
function i(x) {
    return x * x/4 - 4;
}

function calculate() {
    tableBody.innerHTML = "";
    const start = parseFloat(startInput.value);
    const end = parseFloat(endInput.value);
    const step = parseFloat(stepInput.value);
     if (step <= 0) {
    alert("Step muss größer als 0 sein!");
    return;
    }
    
    for (let x = start; x <= end; x += step) {
        // 1️⃣ neue Tabellenzeile
        const row = document.createElement("tr");

        // 2️⃣ Zellen erstellen
        const cellX = document.createElement("td");
        cellX.textContent = x;

        const cellF = document.createElement("td");
        cellF.textContent = f(x);

        const cellG = document.createElement("td");
        cellG.textContent = g(x);

        const cellH = document.createElement("td");
        cellH.textContent = h(x);

        const cellI = document.createElement("td");
        cellI.textContent = i(x);

        // 3️⃣ Zellen in die Zeile packen
        row.appendChild(cellX);
        row.appendChild(cellF);
        row.appendChild(cellG);
        row.appendChild(cellH);
        row.appendChild(cellI);

        // 4️⃣ Zeile in die Tabelle packen
        tableBody.appendChild(row);
    }
}

const button= document.getElementById("berechnen");
            button.addEventListener("click", () => {
            console.log("calculate button clicked");
            calculate();
            });