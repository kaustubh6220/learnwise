import { Document, Schema, model, models } from "mongoose";

export interface IPromt extends Document {
  prompt?: string;
  answer:string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

const PromtSchema = new Schema({
  prompt: { type: String },
  answer: { type: String },

  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Promt = models?.Promt || model('Promt', PromtSchema);

export default Promt;