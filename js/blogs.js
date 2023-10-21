
const alls = document.querySelectorAll(".all1");
const panes = document.querySelectorAll(".stories");
alls.forEach((all, index) =>{
const pane = panes[index];
all.onclick = function(){
    document.querySelector(".all1.active").classList.remove("active"); 
    document.querySelector(".stories.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");

};

});
