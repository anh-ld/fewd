namespace Calculation {
  const PI = 3.14

  export function Perimeter(radius: number) {
    return Number((PI * 2 * radius).toFixed(3))
  }

  export function Area(radius: number) {
    return Number((PI * radius * radius).toFixed(3))
  }
}