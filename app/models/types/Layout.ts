export type Layout =
  | { rows: 1; topCols: number; splitAt: number }
  | { rows: 2; topCols: number; bottomCols: number; splitAt: number }
  | { rows: 3; topCols: number; middleCols: number; bottomCols: number; splitAt: number; splitAt2: number };
