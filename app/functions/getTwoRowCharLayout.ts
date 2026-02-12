import { Layout } from "../models/types/Layout";

export function getTwoRowCharLayout(count: number): Layout {
  
  if (count === 3 || count === 2 || count === 4) return { rows: 1, topCols: count, splitAt: count };
  if (count === 5) return { rows: 2, topCols: 2, bottomCols: 3, splitAt: 2 };
  if (count === 6) return { rows: 2, topCols: 3, bottomCols: 3, splitAt: 0 };

  if (count === 7) return { rows: 2, topCols: 3, bottomCols: 4, splitAt: 3 };

  if (count <= 8) return { rows: 1, topCols: 4, splitAt: count };

  if (count === 9) return { rows: 2, topCols: 4, bottomCols: 5, splitAt: 4 };

  if (count === 10) return { rows: 1, topCols: 5, splitAt: count };

  if (count === 11) return { rows: 2, topCols: 5, bottomCols: 6, splitAt: 5 };

  if (count === 14) return { rows: 2, topCols: 4, bottomCols: 5, splitAt: 4 };
  if (count === 15) return { rows: 2, topCols: 5, bottomCols: 5, splitAt: 5 };


  if (count === 16) return { rows: 1, topCols: 8, splitAt: count };

  if (count === 20) {
    return {
      rows: 1, topCols: 5, splitAt: count 
    };
  }

  // Fallback: 2 rader så jämnt som möjligt
  const splitAt = Math.ceil(count / 2);
  const topCols = Math.min(splitAt, 6);
  const bottomCols = Math.min(count - splitAt, 6);
  return { rows: 2, topCols, bottomCols, splitAt };
}
