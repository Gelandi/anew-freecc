//import ngMaterial from 'angular-material';

export default class UserController {
  constructor($mdSidenav, $mdBottomSheet, $timeout, $log) {

      // static get $inject() {
      //   return ['$mdSidenav', '$mdBottomSheet', '$timeout', '$log'];
      // }


      this.users = [{
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      }, {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      }, {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      }, {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      }, {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      }, {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }];
      this.selected = null;

      // this.selectUser = selectUser;
      // this.toggleList = toggleUsersList;
      // this.makeContact = makeContact;


      console.log('users is alive');
    }
    // *********************************
    // Internal methods
    // *********************************
    //      * Hide or Show the 'left' sideNav area
  toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  //      * Select the current avatars
  //      * @param menuId
  selectUser(user) {
    this.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }

  //     * Show the Contact view in the bottom sheet
  makeContact(selectedUser) {
    $mdBottomSheet.show({
      controllerAs: "vm",
      templateUrl: './modules/users/view/contactSheet.html',
      controller: ['$mdBottomSheet', ContactSheetController],
      parent: angular.element(document.getElementById('content'))
    }).then(function (clickedItem) {
      $log.debug(clickedItem.name + ' clicked!');
    });

    //          * User ContactSheet controller
    function ContactSheetController($mdBottomSheet) {
      this.user = selectedUser;
      this.items = [
        { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
        { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
        { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
        { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
      ];
      this.contactUser = function (action) {
        // The actually contact process has not been implemented...
        // so just hide the bottomSheet
        $mdBottomSheet.hide(action);
      };
    }
  }
}
