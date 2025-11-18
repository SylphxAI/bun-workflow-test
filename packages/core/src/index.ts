import { add, multiply } from '@sylphx/workflow-test-utils';

/**
 * Calculate sum of squares
 */
export function sumOfSquares(a: number, b: number): number {
  return add(multiply(a, a), multiply(b, b));
}

/**
 * Calculate area of rectangle
 */
export function rectangleArea(width: number, height: number): number {
  return multiply(width, height);
}
