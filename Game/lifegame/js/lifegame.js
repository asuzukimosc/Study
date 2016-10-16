var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var wrapper = document.getElementById('wrapper');
var width = wrapper.clientWidth;
var height = wrapper.clientHeight;

canvas.width = width;
canvas.height = height;

var field = new Array();
var temp = new Array();

function init() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,width,height);
    
    for(i=0; i<width; i++) {
        field[i] = new Array();
        temp[i] = new Array();
        for (var j=0; j<height; j++) {
            temp[i][j] = 0;
            if ((i == 0) || (j == 0) || (i == width) || (j == height)) {
                field[i][j] = 0;
            } else {
                if (Math.floor(Math.random() * 2) == 1) {
                    field[i][j] = 0;
                } else {
                    field[i][j] = 1;
                }
            }
        }
    }
}

function step() {
    requestAnimationFrame(step);

    for(i=0;i<width;i++){
        temp[i] = field[i].slice();
    }

    for (var i=1; i<width-1; i++) {
        for (var j=1; j<height-1; j++) {
            var sum = 0;
            sum+= field[i-1][j-1];
            sum+= field[i  ][j-1];
            sum+= field[i+1][j-1];
            sum+= field[i-1][j  ];
            sum+= field[i+1][j  ];
            sum+= field[i-1][j+1];
            sum+= field[i  ][j+1];
            sum+= field[i+1][j+1];
            if ((sum >= 4) || (sum <= 1)) {
                temp[i][j] = 0;
            } else if (sum == 3) {
                temp[i][j] = 1;
            } else {
                temp[i][j] = field[i][j];
            }
        }
    }

    for(i=0;i<width;i++){
        field[i] = temp[i].slice();
    }
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,width,height);
   
    ctx.fillStyle = '#FF0000';
    for (i=0; i<width; i++) {
        for (j=0; j<height; j++) {
            if (field[i][j] == 1) {
                ctx.fillRect(i,j,1,1);
            }
        }
    }
}

init();
step();

//setInterval(render, 30);
