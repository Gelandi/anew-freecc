settings.$inject = [
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider',
  '$mdIconProvider'
];

export default function settings(
  $urlRouterProvider,
  $locationProvider,
  $mdThemingProvider,
  $mdIconProvider
) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $mdIconProvider
    .defaultIconSet("/svg/avatars.svg", 128)
    .icon("menu", "/svg/menu.svg", 24)
    .icon("share", "/svg/share.svg", 24)
    .icon("google_plus", "/svg/google_plus.svg", 512)
    .icon("hangouts", "/svg/hangouts.svg", 512)
    .icon("twitter", "/svg/twitter.svg", 512)
    .icon("phone", "/svg/phone.svg", 512);

  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
}
