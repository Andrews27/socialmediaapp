namespace socialmediaapp.Controllers {

    export class HomeController {
      public user;
      public newUser = {
        name: ''
      };

      constructor(private socialService){
        this.user = socialService.getAll();
      }

      public add(user) {
        this.socialService.add({name: this.newUser.name})
          .then((data) => {
            this.newUser.name = '';
            this.user.push(data);
          });
      }

    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class PostController {
      public post;
      public date;

      constructor($stateParams) {
//        this.post.filter((currentUser) => currentUser.id == $stateParams['id'])[0];
    }
  }
}
