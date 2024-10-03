let M=(parseInt)(prompt("M:"));
let N=(parseInt)(prompt("N:"));
console.log("M:"+M);
console.log("N:"+N);
let sum=0;
if(M>N){
console.log("M IS GREATER THAN N");
}
else{
for(let i=M;i<=N;i++){
    if(i%2!=0){
        sum+=i;
    }
}
console.log(sum);
}