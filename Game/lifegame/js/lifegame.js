var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var wrapper = document.getElementById('wrapper');
var width = wrapper.clientWidth;
var height = wrapper.clientHeight;

canvas.width = width;
canvas.height = height;

var field = new Array();

function init() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,width,height);
    
    for(i=0; i<width; i++) {
        field[i] = new Array();
        for (var j=0; j<height; j++) {
            if (Math.floor(Math.random() * 2) == 1) {
                field[i][j] = 0;
            } else {
                field[i][j] = 1;
            }
        }
    }
}

function step() {
    requestAnimationFrame(step);
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
            if ((field[i][j] == 0) && (sum == 3)) {
                field[i][j] = 1;
            } else if (field[i][j] == 1) {
                if ((sum <= 1) || (sum >= 4)) {
                    field[i][j] = 0;
                }
            }
        }
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
