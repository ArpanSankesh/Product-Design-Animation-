let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');

let move = (delts) => {
    cursor.style.display = 'block';
    cursor.style.top = delts.clientY + "px";
    cursor.style.left = delts.clientX + "px";
    cursor.style.width = 15 + "px";
    cursor.style.height = 15 + "px";
}

let hideCursor = () => {
    cursor.style.display = 'none';
    cursor.style.width = 0 + "px";
    cursor.style.height = 0 + "px";
};


main.addEventListener('mousemove', move);
main.addEventListener('mouseleave', hideCursor);