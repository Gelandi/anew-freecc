import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './users.routes';
import UserController from './users.controller';

export default angular.module('users', [uirouter])
  .config(routing)
  .controller('UserController', UserController)
  .name;
