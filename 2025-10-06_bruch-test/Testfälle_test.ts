import { Bruch } from "./bruch.ts";
import { assertEquals} from "https://deno.land/std/assert/mod.ts";
for(let i=0;i<15;i++)
{
let zaehler=Math.ceil(Math.random()*100);
let nenner=Math.ceil(Math.random()*100);
let ergebnis_bruch = Bruch.fromString(`${zaehler}/${nenner}`);

let subtrakt = Math.ceil(Math.random()*zaehler);
let zaehler1 = Math.ceil(Math.random()*zaehler);
let zaehler2 = zaehler-subtrakt;

let erweiterungszahl=(Math.ceil(Math.random()*20));
let erweiterunhszahl2=(Math.ceil(Math.random()*20));

let erweiterung_z1 = zaehler1*erweiterungszahl;
let erweiterung_z2 = zaehler2*erweiterunhszahl2

let erweiterung_n1 = nenner*erweiterungszahl;
let erweiterung_n2 = nenner*erweiterunhszahl2;

Deno.test(`Test ${i + 1}`, () => 
{
    
    let bruch1 = Bruch.fromString(`${erweiterung_z1}/${erweiterung_n1}`);
    let bruch2 = Bruch.fromString(`${erweiterung_z2}/${erweiterung_n2}`);

    assertEquals (bruch1.addiere(bruch2).toString,ergebnis_bruch.toString);
});

}

