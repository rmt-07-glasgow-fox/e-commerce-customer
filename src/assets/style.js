const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      console.log('here');
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle','nav-menu')