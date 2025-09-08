function toggleMobileMenu(arrow){

    arrow.classList.toggle("rotate-arrow");

    menuItem = arrow.previousSibling.lastChild;

    menuItem.classList.toggle("active-sub-mobile");

}
