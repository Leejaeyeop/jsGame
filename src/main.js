let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
    x: 10,
    y: 200,
    width: 50,
    heihgt: 50,
    drwa() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.heihgt);
    },
};
dino.drwa();

class Catcus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.heihgt);
    }
}

const cactus = new Catcus();
cactus.draw();

let direction = 0;
function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dino.x += direction;
    dino.drwa();
}

window.onkeydown = (e) => {
    if (e.key === "ArrowUp") {
        direction = 1;
    }
};

animate();
