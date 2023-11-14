tinhHH.addEventListener("click" , function(){

    let doanhSo = +(document.getElementById("doanhSo").value);
    let tienHH = +(doanhSo / 100 * 3);
    
    document.getElementById("hoaHong").innerHTML= " Hoa hồng của " + doanhSo + " đồng là : " + tienHH + " đồng";
   
})            
