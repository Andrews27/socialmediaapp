namespace socialmediaapp.Services {

  export class SocialService{
    private SOCIAL_RESOURCE = this.$resource('/api/v1/social/:id');

      constructor(private $resource) {}

      public getAll() {
        return this.SOCIAL_RESOURCE.query();
      }

      public add(user) {
        return this.SOCIAL_RESOURCE.save(user).$promise;
      }


  }

  angular.module('socialmediaapp').service('socialService', SocialService);

}
