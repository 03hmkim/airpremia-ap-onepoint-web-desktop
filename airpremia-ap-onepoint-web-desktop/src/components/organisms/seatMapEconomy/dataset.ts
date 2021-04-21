const economySection1StartRowNumber = 10;
const economySection1ExcludeRowNumber = 13;
const economySection1Count = 16;
const economySection2StartRowNumber = 26;
const economySection2Count = 14;

export const economySection1Rows: number[] = Array(
  economySection1Count,
)
  .fill(true)
  .map((_: boolean, index: number) => {
    const rowNumber = economySection1StartRowNumber + index;

    if (rowNumber === economySection1ExcludeRowNumber)
      return 0;
    return rowNumber;
  })
  .filter(Boolean);

export const economySection2Rows: number[] = Array(
  economySection2Count,
)
  .fill(true)
  .map((_: boolean, index: number) => {
    return economySection2StartRowNumber + index;
  });

export const economySection2ExcludeSeats = [
  {
    row: 38,
    column: 'C',
  },
  {
    row: 38,
    column: 'G',
  },
  {
    row: 39,
    column: 'A',
  },
  {
    row: 39,
    column: 'B',
  },
  {
    row: 39,
    column: 'C',
  },
  {
    row: 39,
    column: 'G',
  },
  {
    row: 39,
    column: 'H',
  },
  {
    row: 39,
    column: 'J',
  },
];

export const economyColumns: string[][] = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'J'],
];
