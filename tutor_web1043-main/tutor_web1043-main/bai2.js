//Khai báo biến mảng chưa các phần tử anh cho slider
var arrImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg"];

//Khai báo biến lấy phần tử HTML
var img = document.getElementById("img");

//biến index lưu trữ vị trí hình ảnh trong mảng
var index = 0;

//Hàm next để chuyển sang ảnh kế tiếp
function next() {
  index++;
  //nếu index vượt quá index của mảng, thì sẽ trở về phần tử đầu tiên
  if (index >= arrImgs.length) {
    index = 0;
  }
  console.log(index);
  //Thay đổi hình ảnh
  img.src = "images/" + arrImgs[index];
}

//Hàm previous để quay lại trước đó
function previous() {
  index--;
  //Nễu ảnh index của ảnh < 0 thì gán lại index về cái phần tử cuối cùng
  if (index < 0) {
    index = arrImgs.length - 1;
  }
  console.log(index);
  img.src = "images/" + arrImgs[index];
}

setInterval(function () {
  next();
}, 2000);
