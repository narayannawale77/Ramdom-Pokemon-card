let main = document.getElementById("main");
let s = '';
let arr = ["https://www.shutterstock.com/image-vector/9-vector-pokemon-made-cirebon-260nw-2341058685.jpg", "https://preview.redd.it/every-pokemon-in-a-single-image-v0-of9ktyw8s2ac1.jpeg?auto=webp&s=6734e1bece621155a4e3b4de1bbcf63617d21df8", "https://img.redbull.com/images/c_crop,x_488,y_0,h_1080,w_864/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/07/12/de1e7c14-c930-4095-81aa-b6e4ad355c32/pokemon-main", "https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg"];

for (let i = 0; i <= 51; i++) {
    let max = arr.length - 1;
    let min = 0;
    let r = Math.floor(Math.random() * (max - min)) + 1 + min;
    s += `<div class="card">
            <img src="${arr[r]}" alt="">
        </div>`;
}

main.innerHTML = s;

