function header(){
    let body = document.getElementById("body");
    body.setAttribute("class","d-flex justify-content-center align-items-center");
    let calcDiv = document.createElement("div");
    calcDiv.setAttribute("style","width:350px; min-height: 400px; border:1px solid grey; margin:50px; padding:16px;");
    
    let h1 = document.createElement("h1");
    h1.setAttribute("style","text-align:center; margin-bottom:10px; display:block;")
    h1.textContent = "Calculator";
    calcDiv.appendChild(h1);
    
    let input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.setAttribute("id","inputField");
    input.setAttribute("style","width:100%; height:50px; background-color: #F4EDED; border:2px solid grey; text-align:end; font-size:23px;");
    calcDiv.appendChild(input);
    
    let buttonDiv = document.createElement("div");
    let clearBtn = document.createElement("button");
    clearBtn.innerHTML = "<b>AC</b>"
    clearBtn.setAttribute("class","btn btn-danger m-1");
    clearBtn.setAttribute("style","width:55px; font-size:18px;");
    clearBtn.addEventListener("click",()=>{
        clearAll();
    });
    buttonDiv.appendChild(clearBtn);

    let addBtn = document.createElement("button");
    addBtn.innerHTML = "<b>+</b>"
    addBtn.setAttribute("class","btn m-1");
    addBtn.setAttribute("style","width:55px; font-size:18px; background-color: skyblue;");
    addBtn.addEventListener("click",()=>{
        operator("+");
    });
    buttonDiv.appendChild(addBtn);

    let subBtn = document.createElement("button");
    subBtn.innerHTML = "<b>-</b>"
    subBtn.setAttribute("class","btn m-1");
    subBtn.setAttribute("style","width:55px; font-size:18px; background-color: skyblue;");
    subBtn.addEventListener("click",()=>{
        operator("-");
    });
    buttonDiv.appendChild(subBtn);

    let mulBtn = document.createElement("button");
    mulBtn.innerHTML = "<b>x</b>"
    mulBtn.setAttribute("class","btn m-1");
    mulBtn.setAttribute("style","width:55px; font-size:18px; background-color: skyblue;");
    mulBtn.addEventListener("click",()=>{
        operator("x");
    });
    buttonDiv.appendChild(mulBtn);

    let divBtn = document.createElement("button");
    divBtn.innerHTML = "<b>/</b>"
    divBtn.setAttribute("class","btn m-1");
    divBtn.setAttribute("style","width:55px; font-size:18px; background-color: skyblue;");
    divBtn.addEventListener("click",()=>{
        operator("/");
    });
    buttonDiv.appendChild(divBtn);

    let num7 = document.createElement("button");
    num7.innerHTML = "<b>7</b>"
    num7.setAttribute("class","btn m-1");
    num7.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num7.addEventListener("click",()=>{
        number(7);
    });
    buttonDiv.appendChild(num7);

    let num8 = document.createElement("button");
    num8.innerHTML = "<b>8</b>"
    num8.setAttribute("class","btn m-1");
    num8.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num8.addEventListener("click",()=>{
        number(8);
    });
    buttonDiv.appendChild(num8);

    let num9 = document.createElement("button");
    num9.innerHTML = "<b>9</b>"
    num9.setAttribute("class","btn m-1");
    num9.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num9.addEventListener("click",()=>{
        number(9);
    });
    buttonDiv.appendChild(num9);

    let num4 = document.createElement("button");
    num4.innerHTML = "<b>4</b>"
    num4.setAttribute("class","btn m-1");
    num4.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num4.addEventListener("click",()=>{
        number(4);
    });
    buttonDiv.appendChild(num4);

    let num5 = document.createElement("button");
    num5.innerHTML = "<b>5</b>"
    num5.setAttribute("class","btn m-1");
    num5.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num5.addEventListener("click",()=>{
        number(5);
    });
    buttonDiv.appendChild(num5);

    let num6 = document.createElement("button");
    num6.innerHTML = "<b>6</b>"
    num6.setAttribute("class","btn m-1");
    num6.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num6.addEventListener("click",()=>{
        number(6);
    });
    buttonDiv.appendChild(num6);

    let num1 = document.createElement("button");
    num1.innerHTML = "<b>1</b>"
    num1.setAttribute("class","btn m-1");
    num1.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num1.addEventListener("click",()=>{
        number(1);
    });
    buttonDiv.appendChild(num1);

    let num2 = document.createElement("button");
    num2.innerHTML = "<b>2</b>"
    num2.setAttribute("class","btn m-1");
    num2.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num2.addEventListener("click",()=>{
        number(2);
    });
    buttonDiv.appendChild(num2);

    let num3 = document.createElement("button");
    num3.innerHTML = "<b>3</b>"
    num3.setAttribute("class","btn m-1");
    num3.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num3.addEventListener("click",()=>{
        number(3);
    });
    buttonDiv.appendChild(num3);

    let num0 = document.createElement("button");
    num0.innerHTML = "<b>0</b>"
    num0.setAttribute("class","btn m-1");
    num0.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    num0.addEventListener("click",()=>{
        number(0);
    });
    buttonDiv.appendChild(num0);

    let dot = document.createElement("button");
    dot.innerHTML = "<b>.</b>"
    dot.setAttribute("class","btn m-1");
    dot.setAttribute("style","width:97px; font-size:20px; background-color: skyblue;");
    dot.addEventListener("click",()=>{
        number(".");
    });
    buttonDiv.appendChild(dot);

    let equal= document.createElement("button");
    equal.innerHTML = "<b>=</b>"
    equal.setAttribute("class","btn btn-success m-1");
    equal.setAttribute("style","width:97px; font-size:20px;");
    equal.addEventListener("click",()=>{
        result();
    });
    buttonDiv.appendChild(equal);

    calcDiv.appendChild(buttonDiv);
    body.appendChild(calcDiv);
}   
let inputs = '';
let operatorInput = "";
let previousInput = '';
function number(value){
    inputs += value;
    let display = document.getElementById("inputField");
    display.value = `${previousInput}${operatorInput}${inputs}`;
}
function operator(op){
    if(previousInput!=''){
        result();
    }
    operatorInput = op;
    previousInput = inputs;
    inputs='';
    document.getElementById("inputField").value = `${previousInput}${operatorInput}`;
}
function result(){
    let res;
    let prev = parseFloat(previousInput);
    let now = parseFloat(inputs);
    switch(operatorInput){
        case "+": res = prev+now;
        break;
        case "-": res = prev-now;
        break;
        case "x": res = prev*now;
        break;
        case "/":
            if(now == 0){
                alert("Cannot divide by 0");
                return;
            }
            res = prev/now;
        break;
        default: return;
    }
    inputs = res.toString();
    operatorInput = '';
    previousInput = '';
    document.getElementById("inputField").value = inputs;
}
function clearAll(){
    inputs = '';
    operatorInput = '';
    previousInput = '';
    document.getElementById("inputField").value = '';
}