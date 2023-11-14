// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

kt.addEventListener("click" , function(){

    let a = +document.getElementById("soA").value;
    let b = +document.getElementById("soB").value;
    
    if ( a % b == 0){
    document.getElementById("hienthi").innerHTML= " a chia hết cho b";
    } else{
    document.getElementById("hienthi").innerHTML = " a không chia hết cho b";
    }
    })