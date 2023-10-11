import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import { displayRestaurants } from '../public/data/data-source.js';

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navList = document.getElementById('drawer');
  
    menuButton.addEventListener('click', function() {
      navList.classList.toggle('open');
      menuButton.classList.toggle('open');
    });
  });

