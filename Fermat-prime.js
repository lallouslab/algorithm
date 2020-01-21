function power(a, n, p) {
  let res = 1; // Initialize result
  a = a % p; // Update 'a' if 'a' >= p

  while (n > 0) {
    // If n is odd, multiply 'a' with result
    if (n & 1) res = (res * a) % p;

    // n must be even now
    n = n >> 1; // n = n/2
    a = (a * a) % p;
  }

  return res;
}

/*Recursive function to calculate gcd of 2 numbers*/
function gcd(a, b) {
  if (a < b) return gcd(b, a);
  else if (a % b == 0) return b;
  else return gcd(b, a % b);
}

function isPrime(n, k) {
  // Corner cases
  if (n <= 1 || n == 4) return false;
  if (n <= 3) return true;

  // Try k times
  while (k > 0) {
    // Pick a random number in [2..n-2]
    // Above corner cases make sure that n > 4
    let a = 2 + (Math.floor(Math.random() * 10000) % (n - 4));

    // Checking if a and n are co-prime
    if (gcd(n, a) != 1) return false;

    // Fermat's little theorem
    if (power(a, n - 1, n) != 1) return false;

    k--;
  }

  return true;
}

function solution(min, max) {
  let result = [];

  for (let i = min; i <= max; i++) {
    if (isPrime(i, 10)) {
      result = [...result, i];
    }
  }

  return result;
}

console.log(solution(20, 30));
