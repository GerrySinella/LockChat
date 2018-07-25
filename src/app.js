//import {PLATFORM} from 'aurelia-pal';
import Swiper from 'swiper';
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./welcome'),      nav: false, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./users'),        nav: false, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./child-router'), nav: false, title: 'Child Router' }
    ]);

    this.router = router;
  }

  startSwiper(){
    let menuSwiper = new Swiper('#swiper', {
    })
  }

  attached(){
    this.startSwiper();
  }
}
