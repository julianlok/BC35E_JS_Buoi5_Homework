function tienDien (soKW) {
    var tongTienDien = 0;
    if (soKW > 0 && soKW <= 50) {
        tongTienDien = soKW * 500;
    //50kw ke 650vnd
    }else if (soKW > 50 && soKW <= 100)  {
        tongTienDien = (50 * 500) + (soKW - 50) * 650;
    //100kw ke 850vnd
    }else if (soKW > 100 && soKW <= 200) {
        tongTienDien = (50 * 500) + (50 * 650) + (soKW - 100) * 850;
    //150kw ke 1100vnd
    }else if (soKW > 200 && soKW <= 350) {
        tongTienDien = (50 * 500) + (50 * 650) + (100 * 850) + (soKW - 200) * 1100;
    }else if (soKW > 350) {
        tongTienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKW - 350) * 1300;
    }else {
        alert("Xin vui lòng nhập đúng thông tin!")
    }
    tongTienDien = new Intl.NumberFormat("Vn-vn").format(tongTienDien)
    
    return tongTienDien;
}

function hienThiTienDien (a) {
    document.getElementById("show1").style.display = "block";
    document.getElementById("showTienDien").innerHTML = a;
}

function tinhTienDien () {
    //đầu vào lấy số liệu người dùng nhập vào
    var hoTen = document.getElementById("hoTen").value;
    var soKW = +document.getElementById("soKW").value;
    var tongTienDien = 0;
    var showTienDien = "";

    //xử lý
    tongTienDien = tienDien(soKW)
    showTienDien = "Họ tên: " + hoTen + "<br/>" + "Tiền điện: " + tongTienDien + " VNĐ";
    

    //đầu ra xuất ra kết quả
    hienThiTienDien(showTienDien)
}