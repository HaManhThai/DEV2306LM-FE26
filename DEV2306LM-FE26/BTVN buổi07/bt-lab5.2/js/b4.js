var chuoi = "Tại vì thích em cực nhiều nhưng em lại nói là À Lôi" ;
document.write("Mã char code của từng kí tự là ", );
document.write('<br />');
for(let i=0; i <= chuoi.length - 1; i++){
    document.write(chuoi[i], " --> ", chuoi[i].charCodeAt(0));
    document.write('<br />');
}
