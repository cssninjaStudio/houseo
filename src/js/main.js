"use strict";

import './store/store';
import 'alpinejs';
import { env } from './libs/utils/constants';
import { initPageLoader } from './libs/components/pageloader';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';
import { initWizard } from './libs/components/wizard';
const feather = require('feather-icons');

window.initNavbar = initNavbar;
window.initWizard = initWizard;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}

