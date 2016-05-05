routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      template: require('./users.html'),
      controller: 'UserController',
      controllerAs: 'ul'
    });
  console.log('into users! ');
}
