export function fizzBuzz(current: number): string {
  if (current === 0) {
    return 'zero';
  }
  if (current % 3 === 0 && current % 5 === 0) {
    return 'FizzBuzz';
  }
  if (current % 3 === 0) {
    return 'Fizz';
  }
  if (current % 5 === 0) {
    return 'Buzz';
  }
  return 'none';
}

export const add = (a: number, b: number) => a + b;

export function sortThese(nums: number[]): number[] {
  return nums.toSorted();
}
