import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
