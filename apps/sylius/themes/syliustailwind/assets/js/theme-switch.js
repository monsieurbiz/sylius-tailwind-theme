function themeSwitch() {
    const selectTheme = document.getElementById('theme-select');
    
    selectTheme.addEventListener('change', (e) => {
        const theme = e.target.value;
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme'));
    });
    
    if (localStorage.getItem('theme') !== null) {
        document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme'));
    }
}

// Init
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    themeSwitch();
  });
