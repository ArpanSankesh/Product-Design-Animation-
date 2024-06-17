let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');

let move = (delts) => {
    cursor.style.top = delts.clientY + "px";
    cursor.style.left = delts.clientX + "px";
    // console.log(delts.clientY);
    // console.log(delts.clientX);
}

main.addEventListener('mousemove', move)