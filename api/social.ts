import * as express from 'express'
import Comments from '../models/comments';
import User from '../models/users';
import Posts from '../models/posts';


let router = express.Router();

router.get('/', (req, res) => {
  User.find().then((users) => res.json(users));
});

router.post('/', (req, res) => {
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.save()
    .then((createdUser) => res.json(newUser));
});






export default router;
