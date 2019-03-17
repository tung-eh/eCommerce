import mongoose, {Schema} from 'mongoose';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    products: {
      type: Number,
      required: true
    },
    children: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Category', CategorySchema);
