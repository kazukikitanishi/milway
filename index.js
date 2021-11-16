// const iframeElement = document.getElementById("iframe");
// const iframeElementTitleBar = iframeElement.contentWindow.document.querySelector(".i4ewOd-pzNkMb-haAclf");
// iframeElementTitleBar.style.display = "none";
const logo = document.getElementById("logo");
const CLOSE = document.getElementById("CLOSE");
const MODALWRAP = document.getElementById("MODALWRAP");
const modalwrap = document.getElementsByClassName("modalwrap");
// console.log(logo);
// console.log(CLOSE);
// console.log(MODALWRAP);
logo.addEventListener('click' ,modalopen);
function modalopen(){
    MODALWRAP.style.opacity="1";
    MODALWRAP.style.zIndex="10";
    MODALWRAP.style.transition="0.35s";
};
CLOSE.addEventListener('click',modalclose);
function modalclose(){
    MODALWRAP.style.opacity="0";
    MODALWRAP.style.zIndex="-1";
};
