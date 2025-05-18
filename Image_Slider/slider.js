let imageArray = ['./images/interstellar.jpg','./images/solar.jpg','./images/blackhole.jpg','./images/time.webp','./images/Picture1.png','./images/last page.jpg','./images/satoru-gojo.jpg','./images/bhagavad.jpg','./images/time-trav.jpg','./images/bttf.jpg'];
function headerComponent(){
    let header = document.getElementById("head");
    let headDiv = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Image Slider <i class='bi bi-image text-info'></i>";
    h1.setAttribute("style","text-align:center; margin:20px;");
    headDiv.appendChild(h1);
    header.appendChild(headDiv);
    imageslider();
}
function imageslider(){
    let main = document.getElementById("main");
    // image container
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class","d-flex justify-content-center align-items-center");
    imgDiv.setAttribute("style","width:90%; height:75vh; margin-left:70px;");
    // images
    let img = document.createElement("img");
    img.setAttribute("style","width:85%; height: 70vh; border-radius:10px;");
    img.alt = "slider image";

    // logic
    let index = 0;
    function showImg(index){
        img.src = imageArray[index];
    }
    imgDiv.appendChild(img);
    function next(){
        index = (index+1) % imageArray.length;
        showImg(index);
    }
    function previous(){
        index = (index-1)%imageArray.length;
        showImg(index);
    }
    // control buttons
    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("class","d-flex justify-content-around align-items-center bg-dark ");
    btnDiv.setAttribute("style","width:90%; margin-left:70px; height:50px; border-radius:10px;")
    
    let previousBtn = document.createElement("button");
    previousBtn.innerText = "Previous";
    previousBtn.setAttribute("class","btn btn-primary");
    previousBtn.addEventListener("click",previous);
    btnDiv.appendChild(previousBtn);

    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.setAttribute("class","btn btn-primary");
    nextBtn.addEventListener("click",next);
    btnDiv.appendChild(nextBtn);

    main.appendChild(imgDiv);
    main.appendChild(btnDiv);
}