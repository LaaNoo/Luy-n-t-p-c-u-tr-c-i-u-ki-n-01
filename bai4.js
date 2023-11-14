sosanhN.addEventListener("click" , function(){

    let soN1 = +document.getElementById("so1").value;
    let soN2 = +document.getElementById("so2").value;
    let soN3 = +document.getElementById("so3").value;
    
    if ( soN1 > soN2 && soN1 > soN3  ){
    document.getElementById("kQ").innerHTML= soN1 + " là số lớn nhất";
    
    } else if (soN2 > soN1 && soN2 > soN3) {
    document.getElementById("kQ").innerHTML = soN2 + " là số lớn nhất";
    } else{
        document.getElementById("kQ").innerHTML = soN3 + " là số lớn nhất";
    }
    })