// Navbar
function toggleNav(event, action) {
  const navMenuElement = document.getElementById('nav-menu');
  const closeNavElem = document.getElementById('close-nav')
  const openNavElem = document.getElementById('open-nav')
  if (action === 'show') {
    openNavElem.classList.add('hidden')
    closeNavElem.classList.remove('hidden')
    closeNavElem.classList.add('flex')
    navMenuElement.style.left = '0'
  } else if(action === 'close') {
    closeNavElem.classList.add('hidden')
    openNavElem.classList.remove('hidden')
    openNavElem.classList.add('flex')
    navMenuElement.style.left = '-300vh'
  }
}

function copyId() {
 const text = document.getElementById('user-id').innerHTML
 const copyBtn = document.getElementById('copy-btn')
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.classList.add('text-green-400');
      setTimeout(() => {
        copyBtn.classList.remove('text-green-400')
      }, 400)
    } catch (err) {
      console.log('failed to copy: ', err)
    }
  }
  copyContent()
}
