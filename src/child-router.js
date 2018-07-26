import { PLATFORM } from 'aurelia-pal';

export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['chats'], name: 'chats',      moduleId: PLATFORM.moduleName('./chats'),      nav: true, title: 'chats' },
      { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./users'),        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./child-router'), nav: true, title: 'Child Router' },
        { route: ['', 'willkommen'],  name: 'willkommen', moduleId: PLATFORM.moduleName('./willkommen'), nav: true, title: 'willkommen' }
    ]);

    this.router = router;
  }
}
