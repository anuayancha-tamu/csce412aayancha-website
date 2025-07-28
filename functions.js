function toggleStyleSheet(){
    var styleElemenet = document.getElementById("mainStyleSheet");
    var currentStyleSheet = styleElemenet.getAttribute("href");
    var newStyleSheet;

    if (currentStyleSheet == "style.css"){
        newStyleSheet = "style-2.css";
    }
    else {
        newStyleSheet = "style.css";
    }

    styleElemenet.setAttribute("href", newStyleSheet);
    localStorage.setItem("currentStyleSheet", newStyleSheet);
  
}


window.onload = function(){
    var savedStyle = localStorage.getItem("currentStyleSheet");
    var styleElement = document.getElementById("mainStyleSheet");
    
    if (savedStyle){
        styleElement.setAttribute("href", savedStyle);
    }
    
}