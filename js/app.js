window.onload=function(){
    // background of first link (Upperthorpe) changes to green when mouse enters and brown when mouse exits
    let change1 = document.getElementById("change1");
    change1.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor= "seagreen";
    })
    change1.addEventListener("mouseleave", function(event){
        event.target.style.backgroundColor= "rgb(238, 224, 207)";
    })

    
    // background of second link (Sharrow) changes to green when mouse enters and brown when mouse exits
    let change2 = document.getElementById("change2");
    change2.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor= "seagreen";
    })
    change2.addEventListener("mouseleave", function(event){
        event.target.style.backgroundColor= "rgb(238, 224, 207)";
    })
    
    
    // background of second link (Burngreave) changes to green when mouse enters and brown when mouse exits
    let change3 = document.getElementById("change3");   
    change3.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor= "seagreen";
    })
    
    change3.addEventListener("mouseleave", function(event){
        event.target.style.backgroundColor= "rgb(238, 224, 207)";
    })
}

