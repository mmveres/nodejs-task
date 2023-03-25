function arrayMutateRemove<T>(array: T[], predicate: (item: T) => boolean): T[] {
  const removedElements: T[] = [];
  let writeIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (!predicate(currentItem)) {
      array[writeIndex++] = currentItem;
    } else {
      removedElements.push(currentItem);
    }
  }

  array.length = writeIndex;

  return removedElements;
}

const array = [1, 2, 3, 6, 7, 9];
const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);

console.log(array); // [1, 3, 7, 9]
console.log(removedElements); // [2, 6]
