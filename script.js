// тут 3 ошибки
function task7(){
    let svg = document.querySelector('.task7')
    setTimeout(()=>{
        svg.setProperty('fill', 'red')
    },1000)
    setTimeout(()=>{
        svg.setProperty('fill', 'blue')
    },2000)
    setTimeout(()=>{
        svg.setProperty('fill', 'green')
    },3000)
}
task7()
setInterval(()=>{
    task7()
},3000)


function task8(){
    // тут 2 ошибки
    let frame = SVG.add('#frame').size(550, 400);
    // тут 2 ошибки
    let bg=svg.rect(400,400).color("#c9c9c9"); 

    // тут 1 ошибка
    let ball=frame.round().radius(20).cx(200).cy(200).fill("#000");
}
task8()

<!--Canvas, context fillrect  canvas.strokeStyle beginPath()  lineWidth-->

function tas9(){
    // тут 1 ошибка
    let canvas = document.getElementById('canvas1').сontext('2d')
    // тут 1 ошибка
    canvas.fill="#B04BFF"
    canvas.fillRect(0,0, 400 ,400)

     // тут 1 ошибка
    canvas.begin();
    canvas.strokeStyle = "#FF6600";  
    // тут 1 ошибка
    canvas.line = 10;
    canvas.arc(200,200, 90, 0, (Math.PI/180)*360, false);
    canvas.stroke(); 
}
task9()
