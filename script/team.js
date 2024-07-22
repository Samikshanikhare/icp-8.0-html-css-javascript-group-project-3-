
    let count = 0; 
    let moving = document.getElementById("moving")
    document.addEventListener("mousemove",function(e){
    moving.style.left = `${e.x-100}px`
    moving.style.top = `${e.y-100}px`
    setInterval(() => {
        moving.innerText = count;
        count++
    }, 1000);
    })
            