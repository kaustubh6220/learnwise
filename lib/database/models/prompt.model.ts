import { Document, Schema, model, models } from "mongoose";

export interface IPromt extends Document {
  title: string;
  publicId: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

const PromtSchema = new Schema({
  title: { type: String, required: true },
  publicId: { type: String, required: true },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Promt = models?.Promt || model('Promt', PromtSchema);

export default Promt;