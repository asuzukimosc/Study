var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var W = 300, H = 600;
var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

function drawBlock(x,y) {
    ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W -1, BLOCK_H -1);
    ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W -1, BLOCK_H -1);
}

function render_title() {
    ctx.font = "80px PixelMplus";
    ctx.fillStyle = "red";
    ctx.fillText("REKLIS", 10, 100);
}

function render_game() {
    // Board
    for (var x=0; x<COLS; ++x) {
        for (var y=0; y<ROWS; ++y) {
            if (board[y][x]) {
                ctx.fillStyle = shapes[board[y][x] - 1].color;
                drawBlock(x, y);
            }
        }
    }

    // Shadow
    for (var y=0; y<4; y++) {
        for (var x=0; x<4; x++) {
            if (info.current[y][x]) {
                ctx.fillStyle = shapes[info.current[y][x] -1].color;
                ctx.fillStyle = "gray";
                drawBlock(info.x + x, info.y + y + info.shadowOffset);
            }
        }
    }

    // Current shape
    for (var y=0; y<4; ++y) {
        for (var x=0; x<4; ++x) {
            if (info.current[y][x]) {
                ctx.fillStyle = shapes[info.current[y][x] -1].color;
                drawBlock(info.x + x, info.y + y);
            }
        }
    }
}

function render_gameover() {
    ctx.font = "80px PixelMplus";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", 10, 100);
}

function render() {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = 'black';

    if (info.mode == MODE.TITLE) {
        render_title();
    } else if (info.mode == MODE.GAME) {   
        render_game(); 
    } else if (info.mode == MODE.GAMEOVER) {
        render_gameover();
    }
}

setInterval(render, 30);
