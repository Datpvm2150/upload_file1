//Lấy/Thiết lập 2 element
const output = document.querySelector('.output');
const message = document.querySelector('.message');
message.textContent = "Press to Star";
//Thiết lập message bắt đầu, thời gian game bắt đầu và tạo ô vuông (đỏ)
const box = document.createElement('div');
const game = {
    timer: null,
    start: null
};
box.classList.add('box');
output.append(box);
//Tạo vị trí ngẫu nhiên
function ranNum(max){
    return Math.floor(Math.random() * max);
}
//Load ô vuông ngẫu nhiên, lấy thời gian bắt đầu
function addBox(){
    message.textContent = 'Click it...';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}
//Sự kiện click chuột: tính toán thời lượng và hiển thị thông báo
box.addEventListener('click', () => {
    box.textContent = "";
    box.style.display = 'none';
    clearTimeout(game.timer);//Xóa timer trước khi tạo timer mới
    game.timer = setTimeout(addBox, ranNum(3000));
    if (!game.start){
        message.textContent = 'Loading.....';
    } else {
        const cur = new Date().getTime();
        const dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
});
//Khởi động lại game
addBox();