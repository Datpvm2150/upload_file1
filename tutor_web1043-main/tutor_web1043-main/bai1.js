//Khai báo các biến để chọn thẻ HTML được sử dụng
var username = document.getElementById("username");
var tuoi = document.getElementById("tuoi");
var thanhpho = document.getElementById("thanhpho");
var nam = document.getElementById("nam");
var nu = document.getElementById("nu");
var mota = document.getElementById("mota");

var errorMessage = document.getElementsByTagName("span"); //Thông báo lỗi khi validate

var dangky = document.getElementById("dangky");

//Kiểm tra thông tin đăng nhập
dangky.addEventListener("submit", function (e) {
  var kt = true;
  //Kiểm tra username
  if (username.value == "") {
    errorMessage[0].innerHTML = "Vui lòng nhập tên đăng nhập";
    kt = false;
  } else if (username.value.length < 8) {
    errorMessage[0].innerHTML = "Tên đăng nhập phải tối thiểu 8 ký tự";
    kt = false;
  } else {
    errorMessage[0].innerHTML = "";
  }

  //Kiểm tra tuổi
  if (tuoi.value == "") {
    errorMessage[1].innerHTML = "Vui lòng nhập tuổi";
    kt = false;
  } else if (tuoi.value < 0) {
    errorMessage[1].innerHTML = "Tuổi phải là số dương";
    kt = false;
  } else {
    errorMessage[1].innerHTML = "";
  }
  //Kiểm tra thành phố
  if (thanhpho.value == "") {
    errorMessage[2].innerHTML = "Vui lòng nhập thành phố";
    kt = false;
  } else {
    errorMessage[2].innerHTML = "";
  }

  //Kiểm tra giới tính
  if (nam.checked == false && nu.checked == false) {
    errorMessage[3].innerHTML = "Vui lòng chọn giới tính";
    kt = false;
  } else {
    errorMessage[3].innerHTML = "";
  }

  //Kiểm tra mô tả
  if (mota.value == "") {
    errorMessage[4].innerHTML = "Vui lòng nhập mô tả";
    kt = false;
  } else {
    errorMessage[4].innerHTML = "";
  }

  if (kt == false) {
    e.preventDefault();
  } else {
    alert("Đăng ký thành công");
  }
});
