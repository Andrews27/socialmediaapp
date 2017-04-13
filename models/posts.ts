import * as mongoose from 'mongoose';

export interface Posts extends mongoose.Document {
 post: string;
 date: number;

}

let postsSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  },

  date: {
    type: Number,
    required:true
  }
});


export default mongoose.model<Posts>('posts', postsSchema);
