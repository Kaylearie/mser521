const drawerEl = document.querySelector('#drawer');

function openDrawer () {
    drawerEl.classList.add ("open");
    drawerEl.setAttribute ("false");
}

function closeDrawer () {
    drawerEl.classList.remove ("open");
    drawerEl.setAttribute ("true")
}

