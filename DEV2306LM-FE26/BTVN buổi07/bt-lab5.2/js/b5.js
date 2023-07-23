var chuoi = "Tại vì thích em cực nhiều nhưng em lại nói là À Lôi";
var chuoi_CharCode = "";
for (let i = 0; i <= chuoi.length - 1; i++) {
    chuoi_CharCode = chuoi_CharCode + chuoi[i].charCodeAt(0);
}
document.write(chuoi_CharCode);
document.write('<br />');
for (let i = 0; i <= chuoi_CharCode.length - 1; i++) {
    document.write(String.fromCharCode(chuoi_CharCode[i]));
}