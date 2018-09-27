import mongoose from "mongoose";
import { Schema } from "mongoose";

export const phCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

export default mongoose.model("PhCategory", phCategorySchema);
