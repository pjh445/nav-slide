document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const nav = document.getElementsByTagName('nav')[0];
    const slide = document.getElementById("slide"); 
    const slideArea = document.getElementById("slideArea");

    //slide의 범위설정을 위해.
    let sw = slideArea.clientWidth;

    //<h2>의 위치설정
    let sh = slideArea.clientHeight;
    let h2 = document.getElementsByTagName('h2')[0];
    let h2Width = h2.clientWidth;
    let h2Height= h2.clientHeight;
    
    let sww = (sw - h2Width) / 2;            
    h2.style.left = sww + "px";
    let shh = Math.trunc(( sh - h2Height ) /2 );
    //alert(shh);
    h2.style.top = shh + "px";     

    let menu = () => {
        if( nav.clientHeight == 0 )  nav.style.height = "200px";
        else nav.style.height = "0px";
    }

    let ss = () => {
        if( window.innerWidth>=1024 )  nav.style.height = "auto";
        else      nav.style.height = 0; 
        pos =   sw* (-1) + "px"; 

        //slide의 범위설정을 위해.
        sw = slideArea.clientWidth;

        //<h2>의 위치설정
        sh = slideArea.clientHeight;
        h2 = document.getElementsByTagName('h2')[0];
        h2Width = h2.clientWidth;
        h2Height= h2.clientHeight;

        sww = (sw - h2Width) / 2;            
        h2.style.left = sww + "px";
        shh = Math.trunc(( sh - h2Height ) /2 );
        h2.style.top = shh + "px";  
    }

    let pos =  sw * (-1) + "px";     
    
    const circleArea = document.getElementById('circle');//동그라미3개의 부모영역
    let i = 0; //빨간동그라미 위치표시

    const move = () => {        
        slide.style.transition = "left 1.5s";
        slide.style.left = pos;

        setTimeout( po, 1500  );
        
        //동그라미에서 빨간색을 제거
        document.getElementsByClassName('red')[0].classList.remove('red'); //초기값으로 index0이 빨간색을 지웠다
        i = (i+1) % 3; //3은 동그라미 개수, 1%3하면 1을 3으로 나눌수가 없으므로 나머지는 그대로 1된다.
        circleArea.children[i].classList.add('red'); //index i에 빨간색을 넣는다.
        /*
            index 0 의 빨간색 제거  remove()
            index 1에 빨간색 넣기  add()    i =1

            index 1의 빨간색 제거  remove()
            index 2에 빨간색 넣기  add()    i =2

            index 2의 빨간색 제거  remove()
            index 0에 빨간색 넣기  add()    i =0
            (2+1) % 3; 나머지가 0이므로  i=0;
        */
    }

    const po = () => {
        slide.append( slide.firstElementChild );
        slide.style.left = 0;
        slide.style.transition = "none";
    }
               
    btn.addEventListener("click" , menu );
    window.addEventListener("resize" , ss  );
    setInterval( move , 2500);
});/////////// 마지막 부분