const pA = new Promise<string>((resolve, reject) => {
  throw new Error("Fehler A");
});

// Variante B
const pB = new Promise<string>((resolve, reject) => {
  reject(new Error("Fehler B"));
});