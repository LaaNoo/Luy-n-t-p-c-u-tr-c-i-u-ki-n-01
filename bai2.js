action.addEventListener("click" , function(){

    let tuoi = +document.getElementById("soTuoi").value;
    
    if ( tuoi > 15 ){
    document.getElementById("lop10").innerHTML= " Bạn đủ tuổi học lớp 10";
    } else{
    document.getElementById("lop10").innerHTML = " Bạn không đủ tuổi học lớp 10";
    }
    })
