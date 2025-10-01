import { bench } from "vitest";

// O(n2)
function twiceSum(arr: number[], number: number) {
  const array: [number, number][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= number) break; // 목표값보다 크거나 같은 수는 아예 고려 x
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) array.push([arr[i], arr[j]]);
    }
  }
  return array;
}

// O(n)
function twiceSums(numArr: number[], target: number): [number, number][] {
  const pairs: [number, number][] = [];
  const seen = new Set<number>();

  for (const num of numArr) {
    const completed = target - num;
    if (seen.has(completed)) {
      pairs.push([completed, num]);
    }
    seen.add(num);
  }

  return pairs;
}

// 테스트용 배열
function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

const sizes = [1000, 5000, 10000] as const;
for (const n of sizes) {
  const arr = generateArray(n);
  const target = Math.floor(n / 2);

  bench(`O(n2) - n = ${n}`, () => {
    twiceSum(arr, target);
  });

  bench(`O(n) - n = ${n}`, () => {
    twiceSums(arr, target);
  });
}
