//import {PLATFORM} from 'aurelia-pal';
import Swiper from 'swiper' ;

export class App {
    menuswiper = this.menuswiper;
    menuswiperNav = this.menuswiperNav;

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            {
                route: ['', 'welcome'],
                name: 'welcome',
                moduleId: PLATFORM.moduleName('./welcome'),
                nav: false,
                title: 'Welcome'
            },
            {
                route: 'users',
                name: 'users',
                moduleId: PLATFORM.moduleName('./users'),
                nav: false,
                title: 'Github Users'
            },
            {
                route: 'child-router',
                name: 'child-router',
                moduleId: PLATFORM.moduleName('./child-router'),
                nav: false,
                title: 'Child Router'
            }
        ]);

        this.router = router;
    }

    startSwiper() {
        this.menuswiper = new Swiper('#swiper', {
            pagination: {
                el: $('#navabr'),
                clickable: true,
                renderBullet: function (index, classname) {
                    return '<div class="col-4 navbaricon ' + classname + '"><a><inline-svg class="svg icons" svg="svg/00' + (index + 1) + '.svg"></inline-svg></a></div>';
                },
            },
        });
    }


    attached() {
        this.startSwiper();
    }
}