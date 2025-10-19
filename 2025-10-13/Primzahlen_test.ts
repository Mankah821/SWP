import { assertEquals } from "jsr:@std/assert";
import { isPrime } from "./Primzahl.ts"; // Pfad anpassen, falls dein File anders heißt

Deno.test(`10 Primzahlen`, () => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  for (const n of primes) {
    assertEquals(isPrime(n), true);
  }
});

Deno.test(`10 Nicht-Primzahlen`, () => {
  const notPrimes = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];
  for (const n of notPrimes) {
    assertEquals(isPrime(n), false);
  }
});
