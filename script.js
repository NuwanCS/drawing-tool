window.addEventListener('load', ()=> {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    // resizeTheWindow();

    ctx.strokeStyle = 'red';
    // ctx.strokeRect(50,50,200,200);
    // ctx.fillRect(50,50,200,200);
    // ctx.fillStyle = 'red';
    // ctx.rect(50,50,100,100);
    // ctx.fill()


    let drawing = false;

    function startPosition(e) {
        drawing = true;
        draw(e);
    }
    
    function endPosition() {
        drawing = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!drawing) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    document.addEventListener('mousedown', startPosition);
    document.addEventListener('mouseup', endPosition);
    document.addEventListener('mousemove', draw);
})


function resizeTheWindow () {
    window.addEventListener('resize', () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    })
} 