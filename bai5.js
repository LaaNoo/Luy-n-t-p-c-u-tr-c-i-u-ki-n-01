xepHang.addEventListener("click" , function(){

    let diemGiuaKi = +document.getElementById("diemgiuaki").value;
    let diemCuoiKi = +document.getElementById("diemcuoiki").value;
    
    let diemXepHang = +((diemGiuaKi * 2 +diemCuoiKi * 3)/5) ;
    
    if ( diemXepHang > 8.5 ){
    document.getElementById("xepLoai").innerHTML= "Điểm trung bình của bạn là " + diemXepHang + " : Xếp loại Giỏi";
    } else if (6.5 < diemXepHang && diemXepHang <= 8.5 ) {
    document.getElementById("xepLoai").innerHTML = "Điểm trung bình của bạn là " + diemXepHang + " : Xếp loại Khá" ;
    } else if ( 5 < diemXepHang && diemXepHang <= 6.5 ) {
    document.getElementById("xepLoai").innerHTML = "Điểm trung bình của bạn là " + diemXepHang + " : Xếp loại Trung bình" ;
    } else if (3.5 < diemXepHang && diemXepHang <= 5 ) {
    document.getElementById("xepLoai").innerHTML = "Điểm trung bình của bạn là " + diemXepHang + " : Xếp loại Yếu" ;
    } else {
    document.getElementById("xepLoai").innerHTML = "Điểm trung bình của bạn là " + diemXepHang + " : Xếp loại dốt" ;
    }
    })