//let newsletterPrompt = document.createElement('input');
//newsletterPrompt.type = 'email';
//newsletterPrompt.placeholder = 'john@example.com';
//newsletterPrompt.classname = 'email-prompt'
//
//
//swal({
//    title: "SUBSCRIBE TO OUR NEWSLETTER!",
//    content: newsletterPrompt,
//    buttons: [
//        "Cancel",
//        "Submit",
//    ],
//});

function openMenu() {
    var menu = document.createElement('div');
    var menuItems = document.getElementsByClassName('header-link')
    for(let i=0; i<menuItems.length; i++) {
        let nelem = menuItems[i].cloneNode();
        //let nelem = document.createElement('button');

        nelem.className='menu-item';
        nelem.innerHTML=menuItems[i].innerHTML;
        nelem.href=menuItems[i].href;
        menu.appendChild(nelem)
        menu.style='padding:2rem;'
    }
    swal({content: menu, button: false})
};

