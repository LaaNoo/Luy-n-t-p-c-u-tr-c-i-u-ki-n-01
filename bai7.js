tinhCuoc.addEventListener("click" , function(){

    let soPhut = +document.getElementById("phut").value;
    let tenHo = document.getElementById("ten").value;
    let diaChi = document.getElementById("diaChi").value;
    let coDinh = 50000;
    let cuocDT;

    if (soPhut <= 50 ){
        cuocDT = coDinh + (2000 * soPhut);
        document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
    } else if ( 50 < soPhut && soPhut <= 200 ){
        cuocDT = coDinh + (2000 * soPhut);
        document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
    } else {
        cuocDT = coDinh + (2000 * soPhut);
        document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
    }

})