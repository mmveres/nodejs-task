async function runSequentially<T, R>(
  array: T[],
  callback: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < array.length; i++) {
    const result = await callback(array[i], i);
    results.push(result);
  }
  return results;
}

async function print() {  
const array: string[] = ["one", "two", "three"];
const results = await runSequentially(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);
console.log(results);
}

print();

