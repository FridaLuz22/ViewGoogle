const visibility="visibility"
let buttonAppsGoogle=document.getElementById("button-apps")
let appsGoogle=document.getElementById("Google-Apps")


function addEventShowCardAppsGoogle(){
  buttonAppsGoogle.addEventListener("click",function() {
    if(appsGoogle.classList.contains(visibility)){
      appsGoogle.classList.remove(visibility)
    } else appsGoogle.classList.add(visibility);
  });
}

function init() {
  addEventShowCardAppsGoogle()
}

init();