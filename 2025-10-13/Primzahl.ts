export function isPrime(num: number): boolean {
  if (num < 2) return false; 
  let i;
  for ( i =2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(i)); // true
console.log(isPrime(15)); // false  
