// btvn2: log ra mh f12 số lần xuất hiện phần tử 66 trong mảng sau:
var array = [1, 3, 9, 100, 55, 88, 99, 66, 7, 4, 8, 99, 77, 88, 77, 55, 11, 22, 66];
var c = 0;
for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] == 66) c++;
}
console.log("Số lần xuất hiện phần tử 66 là: ", c);