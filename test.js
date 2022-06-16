function plusMinus (n){
   let ar = ""
   let arr=""
    for (let i=1; i<=n; i++){
    
        arr="".padStart(n-i,' ')
        ar = "".padStart(i,'#')
        console.log(arr+ar)

    } 

}
 plusMinus(7)