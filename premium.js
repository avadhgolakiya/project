let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let free = document.getElementById("free");
    let plus = document.getElementById("plus");
    let pro = document.getElementById("pro");
    let team = document.getElementById("team");
    btn2.addEventListener("click" ,()=>{
        free.style.display = "none";
        plus.style.display = "none";
        pro.style.display = "none";
        team.style.display = "block"
        btn2.style.backgroundColor = "#212121"
        btn1.style.backgroundColor = "transparent"
    })
    btn1.addEventListener("click", ()=>{
        free.style.display = "block";
        plus.style.display = "block";
        pro.style.display = "block";
        team.style.display = "none"
        btn2.style.backgroundColor = "transparent"
        btn1.style.backgroundColor = "#212121"
    })