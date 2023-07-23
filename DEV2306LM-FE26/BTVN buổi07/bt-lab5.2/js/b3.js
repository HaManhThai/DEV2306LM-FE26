var a = prompt("Nhập 1 số có 2 chữ số: ");
while (a < 10 || a >= 100) {
    a = prompt("Vui lòng nhập 1 số có 2 chữ số: ");
}
var count_c = 0, count_l = 0, sum_c = 0, sum_l = 0;
for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        count_c++;
        sum_c += i;
    } else {
        count_l++;
        sum_l += i;
    }
}
document.write("Từ 1 đến ", a, " có ", count_c, " số chẵn");
document.write('<br />');
document.write("Từ 1 đến ", a, " có ", count_l, " số lẻ");
document.write('<br />');
document.write("Tổng các số chẵn từ 1 đến ", a, " là ", sum_c);
document.write('<br />');
document.write("Tổng các số lẻ từ 1 đến ", a, " là ", sum_l);



