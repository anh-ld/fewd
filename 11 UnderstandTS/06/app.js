var Calculation;
(function (Calculation) {
    var PI = 3.14;
    function Perimeter(radius) {
        return Number((PI * 2 * radius).toFixed(3));
    }
    Calculation.Perimeter = Perimeter;
    function Area(radius) {
        return Number((PI * radius * radius).toFixed(3));
    }
    Calculation.Area = Area;
})(Calculation || (Calculation = {}));
/// <reference path='calc.ts' />
console.log(Calculation.Perimeter(3));
console.log(Calculation.Area(3));
