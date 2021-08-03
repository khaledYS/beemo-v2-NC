const othersBtn = document.querySelector(".others-btn");
const othersBtnDiv = document.querySelector(".others-btn-div");

othersBtn.addEventListener("click", ()=>{
    if(othersBtnDiv.classList.contains("others-btn-div-shown") == true){
        othersBtnDiv.classList.remove("others-btn-div-shown");
    }else{
       othersBtnDiv.classList.add("others-btn-div-shown");
       console.log("First");
    }
    console.log("dfgsf");
});

var ten = {
    "domn1": true,
    "domn2": 3,
    "domn3": true,
    "domn4": 3,
    "domn5": true,
    "domn6": 3,
    "domn7": true,
    "domn8": 3
};