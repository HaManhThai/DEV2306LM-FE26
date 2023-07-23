var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
var c = prompt("Nhập hệ số c: ");
var no_kep = -b / (2*a);
var no = -c / b;
var denta = b * b - 4 * a * c;
var no_1 = (-b + Math.sqrt(denta)) / (2*a);
var no_2 = (-b - Math.sqrt(denta)) / (2*a);
if (a != 0) { // Phương trình bậc 2
    if (denta > 0) {
        alert("Phương trình có 2 nghiệm phân biệt là "+ no_1 + " và " + no_2 );
    } else if (denta == 0) {
        alert("Phương trình có 1 nghiệm kép là "+ no_kep);
    } else {
        alert("Phương trình vô nghiệm");
    }
} else { // phương trình suy biến về bậc nhất
    if (b == 0) {
        if (c != 0) {
            alert("Phương trình vô nghiệm");
        } else {
           alert("Phương trình có vô số nghiệm");
        }
    } else {
        alert("Phương trình có 1 nghiệm là "+ no);
    }
}

