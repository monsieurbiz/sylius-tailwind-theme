import './css/styles.css';
import 'slick-carousel/slick/slick.css';

const selectTheme = document.getElementById('theme-select');
selectTheme.addEventListener('change', (e) => {
  const theme = e.target.value;
  document.querySelector('html').setAttribute('data-theme', theme);
});
