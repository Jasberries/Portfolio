const navbar = document.getElementById('navbar')
const overlay = document.getElementById('sidebar-overlay')

function openSidebar(){
    navbar.classList.add('show')
    overlay.classList.add('show')
}

function closeSidebar(){
    navbar.classList.remove('show')
    overlay.classList.remove('show')
}

document.addEventListener('click', (e) => {
    const clickedInsideNav = navbar.contains(e.target)
    const clickedOpenButton = e.target.closest('#open-sidebar-button')

    if (navbar.classList.contains('show') && !clickedInsideNav && !clickedOpenButton) {
        closeSidebar()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar()
})