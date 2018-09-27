import mongoose from "mongoose";
import { Schema } from "mongoose";
import { phUserSchema } from "./PhUser";

export const phChatMessageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  user: {
    type: phUserSchema,
    required: true
  }
});

export default mongoose.model("PhChatMessage", phChatMessageSchema);
