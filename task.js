var arr = [1, 2, 3, 4, 5, 6];
var brr = Array(1, 2, 3, 4, 5, 6);

var equals = true;
for (var i in arr) {
    equals &&= arr[i] == brr[i];
}
if (equals) {
    console.log("массивы равны")
} else {
    console.log ("массивы не равны")
}

for (var month = 1; month < 13; month++) {
    if (month == 2){
        console.log (month,28);   
    }else{ 
        if (month == 4||month == 6|| month == 9|| month == 11){
            console.log(month,30);
        }else{
            console.log(month,31);
        }
    }
}
