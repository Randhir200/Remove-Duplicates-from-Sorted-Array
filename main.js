let arr = [1,1,1,1,1];
let n=arr.length;
let s = 0
let e = 1;
let c = 1
while(e<arr.length){
    if(arr[s] == arr[e]){ // 1==1
        arr.splice(e,1);
        // console.log(arr)
    }else{
        s++; // 1,2,3
        e++; // 2,3,4
    }
    c++;
}
// arr.splice(3,1)
console.log(arr);