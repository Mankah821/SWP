import { holeEssen, loescheEssen } from "./essen.ts"; // so ists ideal
// import * as essensfunctions from "./essen.ts";  -> neues Objekt mit essensfunctions.holeEssen
// import "./essen.ts"; --> es wird nur das Modul ausgeführt, aber keine Funktionen importiert
import ms from "ms";

type EssenGlobals = typeof globalThis & {
    holeEssen: typeof holeEssen;
    loescheEssen: typeof loescheEssen;
    ms_converter: typeof ms_converter;
};

const globals = globalThis as EssenGlobals;

globals.holeEssen = holeEssen;
globals.loescheEssen = loescheEssen;

document.getElementById("hole-essen")?.addEventListener("click", holeEssen);
document.getElementById("loesche-essen")?.addEventListener(
    "click",
    loescheEssen,
);
document.getElementById("ms-converter")?.addEventListener(
    "click",
    ms_converter,
);


function ms_converter(): void {
    const input = document.getElementById("ms-input") as HTMLInputElement;
    const output = document.getElementById("ms-output");

    if (!input || !output) return;

    const value = Number(input.value);
    const result = ms(value);

    output.textContent = result;
}