//import {PLATFORM} from 'aurelia-pal';
import {autoinject} from 'aurelia-framework';
import Swiper from 'swiper';

autoinject;
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
                    return '<div class="col-4 navbaricon ' + classname + '"><a><img class="svg icons" src="svg/00' + (index + 1) + '.svg"></a></div>';
                },
            },
        });
    }

    changeSvgColor(){
        $('img.svg').each((i, e) => {

            const $img = $(e);

        const imgID = $img.attr('id');

        const imgClass = $img.attr('class');

        const imgURL = $img.attr('src');

        $.get(imgURL, (data) => {
            // Get the SVG tag, ignore the rest
            let $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', `${imgClass}replaced-svg`);
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
    });
    }


    attached() {
        this.startSwiper();
        this.changeSvgColor();
    }
}