// const sidebarToggle = document.querySelector("#sidebar-toggle");
// sidebarToggle.addEventListener("click",function(){
//     document.querySelector("#sidebar").classList.toggle("collapsed");
// });

// document.querySelector(".theme-toggle").addEventListener("click",() => {
//     toggleLocalStorage();
//     toggleRootClass();
// });

// function toggleRootClass(){
//     const current = document.documentElement.getAttribute('data-bs-theme');
//     const inverted = current == 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-bs-theme',inverted);
// }

// function toggleLocalStorage(){
//     if(isLight()){
//         localStorage.removeItem("light");
//     }else{
//         localStorage.setItem("light","set");
//     }
// }

// function isLight(){
//     return localStorage.getItem("light");
// }

// if(isLight()){
//     toggleRootClass();
// }


function copyToClipboard() {
    const textToCopy = document.getElementById('user-id').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
function copyToClipboard2() {
    const textToCopy = document.getElementById('link-web').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}



const sidebarToggle = document.querySelector("#sidebar-toggle");

function toggleSidebar() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("collapsed");
}

function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        sidebarToggle.addEventListener("click", toggleSidebar);
    } else {
        sidebarToggle.removeEventListener("click", toggleSidebar);
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.remove("collapsed"); // Ensure sidebar is not collapsed on larger screens
    }
}

// Initial check
handleResize();

// Check on window resize
window.addEventListener("resize", handleResize);
