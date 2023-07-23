// btvn 1: Biện luận nghiệm của ptr có dạng như sau:
// a*x^2 + b*x + c = 0 ;
var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
var c = prompt("Nhập hệ số c: ");
var denta = b * b - 4 * a * c;
if (a != 0) { // Phương trình bậc 2
    if (denta > 0) {
        document.write("Phương trình có 2 nghiệm phân biệt");
    } else if (denta == 0) {
        document.write("Phương trình có 1 nghiệm kép");
    } else {
        document.write("Phương trình vô nghiệm");
    }
} else { // phương trình suy biến về bậc nhất
    if (b == 0) {
        if (c != 0) {
            document.write("Phương trình vô nghiệm");
        } else {
            document.write("Phương trình có vô số nghiệm");
        }
    } else {
        document.write("Phương trình có 1 nghiệm");
    }
}

