export default class HomeController {
  constructor() {
    this.name = 'World';
    console.log('cont is alive');
  }

  changeName() {
    this.name = 'angular-tips';
  }
}
