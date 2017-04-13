import * as mongoose from 'mongoose';

export interface Users extends mongoose.Document {
 name: string;

}



let usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});


export default mongoose.model<Users>('users', usersSchema);
