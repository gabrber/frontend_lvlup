import './styles/style.scss'
import 'bootstrap';

import preMainModule from './js/pre-main';
import mainModule from './js/main';

preMainModule();

document.addEventListener('DOMContentLoaded', function() {
    mainModule();
  });