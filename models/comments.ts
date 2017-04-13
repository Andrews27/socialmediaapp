import * as mongoose from 'mongoose';

export interface Comments extends mongoose.Document {
 comment: string,
 date: number

}

let commentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }

});


export default mongoose.model<Comments>('Comments', commentsSchema);
