import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import routing from './app.config';
import home from './modules/home/';
import users from './modules/users/';

angular.module('app', [uirouter, ngMaterial, home, users])
  .config(routing);
