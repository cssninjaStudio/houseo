//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import mediumZoom from 'medium-zoom'
import Iconify from '@iconify/iconify';

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init persist plugin
Alpine.plugin(persist);
//Init store
Alpine.store("app", {
  init() {
    this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
  isLoggedIn: Alpine.$persist(false),
});
//Start Alpine JS
Alpine.start();

import { initVideoPlayers } from "./libs/components/player/player";
import { insertBgImages } from "./libs/utils/utils";
import { initLazyLoading } from "./libs/utils/lazyload";
import "./libs/demo";
import "./libs/components";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Lazy Loading
    const lazy = initLazyLoading();

    //Video Players
    const players = initVideoPlayers();

    //Image zoom
    const zoom = document.querySelector("[data-zoom]");
    if (typeof zoom != "undefined" && zoom != null) {
      mediumZoom("[data-zoom]");
    }
  }
};
