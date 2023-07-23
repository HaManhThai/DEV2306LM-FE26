var arr = [3, 5, 7 ,1 ,12 ,89];
var sum_c = 0, sum_l = 0;
for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] % 2 ==0){
        sum_c += arr[i];
    } else {
        sum_l += arr[i];
    }
}
document.write("Tổng các số chẵn trong mảng là " ,sum_c);
document.write('<br />');
document.write("Tổng các số lẻ trong mảng là " ,sum_l);
