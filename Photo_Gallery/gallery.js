let images = JSON.parse(localStorage.getItem("image-list")) || [];
function Component(){
    let body = document.getElementById("body");
    let headDiv = document.createElement("div");
    headDiv.innerHTML = "<i class='bi bi-camera-fill'></i><label style='color: #007bff; margin:8px;'>Photo Gallery</label><i class='bi bi-camera-fill'></i>";
    headDiv.setAttribute("class","d-flex justify-content-center align-items-center fs-2 mt-5");
    headDiv.setAttribute("style","width:100%; min-height:60px; font-weight:bold");
    body.appendChild(headDiv);

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("style","min-height:50px; width:100%;");
    btnDiv.setAttribute("class","d-flex justify-content-center align-items-center mt-3 mb-4")

    // image url taking input
    let imageUrlInput = document.createElement("input");
    imageUrlInput.type = 'text';
    imageUrlInput.setAttribute("id","urlInput");
    imageUrlInput.placeholder = 'Enter image url here';
    imageUrlInput.setAttribute("style","width:38%; border:2px solid #007bff; margin-right:8px;")
    imageUrlInput.setAttribute("class","form-control");
    btnDiv.appendChild(imageUrlInput);

    // add btn
    let addBtn = document.createElement("button");
    addBtn.innerHTML = "<b>Add Image</b>";
    addBtn.setAttribute("id","addButton");
    addBtn.setAttribute("style","padding:7px 12px;")
    addBtn.setAttribute("class","btn btn-primary");
    
    btnDiv.appendChild(addBtn);
    body.appendChild(btnDiv);
    
    // table of image
    let imageTable = document.createElement("table");
    imageTable.setAttribute("id","imgTab");
    imageTable.setAttribute("style","margin:0px auto; width:75%; border-collapse:separate; border-spacing:10px;")
    body.appendChild(imageTable);

    addBtn.addEventListener("click",()=>{
        let image = imageUrlInput.value.trim();
        if(image != ""){
            images.push(image);
            localStorage.setItem("image-list", JSON.stringify(images));
            imageUrlInput.value = "";
            imageInserter();
        }
    });
    imageInserter();
}

function imageInserter(){
    let imgTab = document.getElementById("imgTab");
    imgTab.innerHTML="";
    if(images.length==0){
        imgTab.innerHTML="<tr><td colspan='5' style='padding:20px; box-shadow: 0px 5px 12px grey; text-align:center; vertical-align:middle; color: #777;'>No images added yet</td></tr>"
        return;
    }
    else{
        let row;
        images.forEach((imgurl, index)=>{
            if(index % 5 == 0){
                row = document.createElement("tr");
                imgTab.appendChild(row);
            }
            let col = document.createElement("td");
           
            let img = document.createElement("img");
            img.src = imgurl;
            img.alt = "Gallery Image";
            img.setAttribute("style","max-width:100%; max-height:160px; display:block;");
            
            // delete btn handling
            let dltIcon = document.createElement("i");
            dltIcon.setAttribute("class","bi bi-trash fs-4 btn text-danger");
            dltIcon.addEventListener("click",()=>{
                images.splice(index, 1);
                localStorage.setItem("image-list",JSON.stringify(images));
                imageInserter();
            });
            col.appendChild(img);
            col.appendChild(dltIcon);
            row.appendChild(col);
        });
    }
}