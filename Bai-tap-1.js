function kiemTraDiem(dc, d1, d2, d3, kv, dt) {
    var ketQuaTs = "";
    var dtk = (d1 + d2 + d3 + kv + dt);

    if (dtk >= dc && d1 > 0 && d2 > 0 && d3 > 0) {
        ketQuaTs += "Bạn đã đậu. Tổng điểm: " + dtk;
    } else if (dtk < dc && d1 > 0 && d2 > 0 && d3 > 0) {
        ketQuaTs += "Bạn đã rớt. Tổng điểm: " + dtk;
    } else {
        ketQuaTs += "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
    return ketQuaTs;
};

function hienThi(ketQuaTs) {
    document.getElementById("show").style.display = "block";
    document.getElementById("showKetQua").innerHTML = ketQuaTs;
};

function checkResult() {
    //đầu vào: lấy số liệu người dùng nhập và chọn
    var diemChuan = +document.getElementById("diemChuan").value;
    var diem1 = +document.getElementById("diem1").value;
    var diem2 = +document.getElementById("diem2").value;
    var diem3 = +document.getElementById("diem3").value;
    var chonKV = +document.getElementById("chonKV").value;
    var chonDT = +document.getElementById("chonDT").value;
    var ketQuaTs = "";

    //xử lý
    ketQuaTs = kiemTraDiem(diemChuan, diem1, diem2, diem3, chonKV, chonDT);

    //đầu ra: xuất ra kết quả
    hienThi(ketQuaTs);
};