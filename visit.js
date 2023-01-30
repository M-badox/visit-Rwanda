//creating and assigning variable to a given element in documment
let shift=document.querySelector(".img");
let changeOver=document.querySelector("#sect");

//adding event listern
shift.addEventListener("click",()=>
{
    //adding toggle to the close and humburger images
    shift.classList.toggle("active");

    //adding toggle to the menu and whole landing pages
    changeOver.classList.toggle("active");
});

    