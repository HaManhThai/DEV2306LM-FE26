
// btvn3:  log ra mh f12 các phần tử và số lần xuất hiện của chúng với mảng có dạng như sau:
var array = [1, 3, 9, 100, 55, 88, 99, 66, 7, 4, 8, 99, 77, 88, 77, 55, 11, 22, 66];
// vd: phần tử 1 xuất hiện 1 lần
// ý tưởng: 3 vòng for lồng nhau
//                             Bài làm: 
var c1 = 0;
var c2 = 0;
for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j < i; j++) {
        if (array[j] == array[i]) c1++;
    }
    if (c1 == 0) {
        for (let k = i; k <= array.length - 1; k++) {
            if (array[k] == array[i]) c2++;
        }
        console.log("Phần tử ", array[i], "xuất hiện", c2, "lần");
        c2=0;
    }
    c1=0;
}