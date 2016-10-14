var COLS = 10;
var ROWS = 20;
var board = [];

// TODO
// Display information(Score)
// Dropping smooth.

const MODE = {
    TITLE: 0,
    GAME: 1,
    GAMEOVER: 2,
}

var info = {
    mode : MODE.TITLE,
    current : [],
    shadowOffset: 0,
    x: 0,
    y: 0,
    shape: 0,
};

var shapes = [
    {
        shape: [ 0, 0, 0, 0,
                 1, 1, 1, 1 ],
        color: 'cyan'
    },
    {
        shape: [ 0, 0, 0, 0,
                 1, 1, 1, 0,
                 1 ],
        color: 'orange'
    },
    {
        shape: [ 0, 0, 0, 0,
                 1, 1, 1, 0,
                 0, 0, 1 ],
        color: 'blue',
    },
    {
        shape: [ 0, 0, 0, 0,
                 1, 1, 0, 0,
                 0, 1, 1 ],
        color: 'yellow',
    },
    {
        shape: [ 0, 0, 0, 0,
                 0, 1, 1, 0,
                 1, 1 ],
        color: 'red',
    },
    {
        shape: [ 0, 0, 0, 0,
                 0, 1, 0, 0,
                 1, 1, 1 ],
        color: 'green',
    },
    {
        shape: [ 1, 1, 0, 0,
                 1, 1, ],
        color: 'gray',
    },
];

function init() {
    for ( var y = 0; y < ROWS; y++ ) {
        board[y] = [];
        for ( var x = 0; x < COLS; x++ ) {
            board[y][x] = 0;
        }
    }
}

function newShape() {
    var id = Math.floor(Math.random() * shapes.length);
    var shape = shapes[id].shape;
    info.current = [];
    info.shape = id + 1;
    for(var y=0; y<4; y++) {
        info.current[y] = [];
        for (var x=0; x<4; x++) {
            var i = 4 * y + x;
            if (typeof shape[i] != 'undefined' && shape[i]) {
                info.current[y][x] = id + 1;
            } else {
                info.current[y][x] = 0;
            }
        }
    }
    info.x = 5;
    info.y = 0;
}

function calcShadow() {
    return "";
    info.shadowOffset = 0;
    for(;;) {
        if (valid(0,info.shadowOffset)) {
            info.shadowOffset++;
        } else {
            info.shadowOffset-=1;
            break;
        }
    }
}

function tick(step) {
    if (info.mode == MODE.GAME) {
        calcShadow();
        if (step % 100 == 0) {
        if (valid(0,1)) {
            ++info.y;
        } else {
            freeze();
            clearLines();
            if (info.mode == MODE.GAMEOVER) {
                newGame();
                return false;
            } else {
                newShape();
            }
        }
        }
    }
}

function valid(offsetX, offsetY, newCurrent) {
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    offsetX = info.x + offsetX;
    offsetY = info.y + offsetY;
    newCurrent = newCurrent || info.current;
    for (var y=0; y<4; ++y) {
        for (var x=0; x<4; ++x) {
            if (newCurrent[y][x]) {
                if (typeof board[y + offsetY] == 'undefined'
                    || typeof board[y + offsetY][x + offsetX] == 'undefined'
                    || board[y + offsetY][x + offsetX]
                    || x + offsetX < 0
                    || y + offsetY >= ROWS
                    || x + offsetX >= COLS ) {
                    if (offsetY == 1 && offsetX - info.x == 0 && info.y == 0) {
                        info.mode = MODE.GAMEOVER;
                    }
                    return false;
                }
            }
        }
    }
    return true;
}

function freeze() {
    for (var y=0; y<4; y++) {
        for (var x=0; x<4; x++) {
            if (info.current[y][x]) {
                board[y + info.y][x + info.x] = info.current[y][x];
            }
        }
    }
}

function clearLines() {
    for (var y = ROWS -1; y >= 0; y--) {
        var rowFilled = true;
        for (var x=0; x<COLS; x++) {
            if (board[y][x] == 0) {
                rowFilled = false;
                break;
            }
        }
        if (rowFilled) {
            document.getElementById('clearsound').play();
            for (var yy = y; yy > 0; yy--) {
                for (var x=0; x<COLS; x++) {
                    board[yy][x] = board[yy - 1][x];
                }
            }
            y++;
        }
    }
}

function keyPress(key) {
    if(info.mode == MODE.TITLE) {
        info.mode = MODE.GAME;
        newGame();
        return;
    }
    
    switch(key) {
        case 'left':
            if (valid(-1, 0)) {
                --info.x;
            }
            break;
        case 'right':
            if (valid(1, 0)) {
                ++info.x;
            }
            break;
        case 'down':
            for(;;) {
                if (valid(0,1)) {
                    ++info.y;
                } else {
                    break;
                }
            }
            break;
        case 'rotate':
            var rotated = rotate(info.current);
            if (valid(0,0,rotated)) {
                info.current = rotated;
            }
            break;
    }
}

function rotate(current) {
    var newCurrent = [];
    for (var y=0; y<4; ++y) {
        newCurrent[y] = [];
        for (var x=0; x<4; ++x) {
            newCurrent[y][x] = current[3-x][y];
        }
    }

    return newCurrent;
}

var step = 0;
var renderloop = function() {
    requestAnimationFrame(renderloop);
    tick(step++);
    if (typeof render == "function"){
        render();
    }
};

function newGame() {
    newShape();
}

init();
renderloop();

document.body.onkeydown = function(e) {
    var keys = {
        // Cursor
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        // AWSD
        65: 'left',
        68: 'right',
        83: 'down',
        87: 'rotate'
    }
    
    if (typeof keys[e.keyCode] != 'undefined') {
        keyPress(keys[e.keyCode]);
        calcShadow();
    }

};
