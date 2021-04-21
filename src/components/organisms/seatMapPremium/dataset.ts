const startRowNumber = 1;
const count = 8;

export const premiumRows = Array(count)
  .fill(true)
  .map((_: boolean, index: number) => {
    return index + startRowNumber;
  });

export const premiumColumns: (undefined | string)[][] = [
  [undefined, 'A', 'B'],
  ['D', 'E', 'F'],
  ['H', 'J', undefined],
];
