soSanh0.addEventListener("click" , function(){

    let soNguyen = +document.getElementById("soSanh").value;
    
    if ( soNguyen > 0 ){
    document.getElementById("ketQua").innerHTML= soNguyen + " lớn hơn 0";
    } else{
    document.getElementById("ketQua").innerHTML = soNguyen + " nhỏ hơn 0";
    }
    })