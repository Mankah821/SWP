import { assertEquals, assertThrows } from "@std/assert";
import { Bruch } from "./bruch.ts";

Deno.test(function bruchTest() {
  const bruch1 = Bruch.fromString("1/2");
  const bruch2 = Bruch.fromString("1/3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5/6");
});

// ✅ gültiger Testfall: gemischter Bruch
Deno.test(function bruchGemischtTest() {
  const bruch = Bruch.fromString("2 3/4");
  assertEquals(bruch.toString(), "2 3/4");
});

// ✅ gültiger Testfall: ganze Zahl
Deno.test(function bruchGanzzahlTest() {
  const bruch = Bruch.fromString("5");
  assertEquals(bruch.toString(), "5");
});

// ❌ Fehlerfall: Nenner = 0
Deno.test(function bruchNennerNullTest() {
  assertThrows(() => {
    Bruch.fromString("3/0");
  }, Error, "Nenner darf nicht 0 sein!");
});

// ❌ Fehlerfall: ungültige Eingabe
Deno.test(function bruchUngueltigTest() {
  assertThrows(() => {
    Bruch.fromString("abc/2");
  }, Error, "Ungültige Eingabe!");
});