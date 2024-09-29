return;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    var elements = document.getElementsByClassName("owns-context-menu");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("contextmenu", onContextMenu);
    }

    var elements = document.getElementsByClassName("tooltipable");
    for (let i = 0; i < elements.length; i++) {
        //elements[i].addEventListener("mouseover", onMouseOver);
    }

    var elements = document.getElementsByClassName("smart-input");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("input", onSmartInputChanged);
        elements[i].addEventListener("focusin", onSmartInputFocusIn);
        elements[i].addEventListener("focusout", onSmartInputFocusOut);
    }
});

// --------------------------- Context Menu -------------------- //

function onContextMenu(e) {
    e.preventDefault();

    var menu = document.getElementById("context-menu");
    var list = document.getElementById("context-menu_list");

    focus(menu);

    menu.style.animation="showing 0.25s linear";

    menu.style.top = (e.pageY - 20) + "px";
    menu.style.left = (e.pageX - 20) + "px";
};

// --------------------------- Context Tooltip --------------------------- //

function onMouseOver(e) {
    var tooltip = document.getElementById("context-tooltip");
    var target = e.target;

    while(!target.classList.contains("tooltipable")){
        target = target.parentElement;
    }

    var rect = target.getBoundingClientRect();

    tooltip.style.top = (rect.bottom + 15) + "px";
    tooltip.style.left = (rect.right + 15) + "px";

    if(target.tagName = "input"){
        if(target.value != ""){
            tooltip.innerHTML = '<p>' + target.value + '</p>';
            tooltip.style.visibility = "visible";
        }else{
            tooltip.innerHTML = '';
            tooltip.style.visibility = "hidden";
        }
    }
    else{
        console.log("Не поддерживается");
    }
};

// --------------------------- Smart Input --------------------------- //

function onSmartInputChanged(e) {
}

function onSmartInputChanged(e) {
}

function onSmartInputFocusIn(e) {
}

function onSmartInputFocusOut(e) {
    console.log(e.target.innerHTML);
    e.target.innerHTML = 'ХУЙ';
}

// --------------------------- Firearm --------------------------- //

