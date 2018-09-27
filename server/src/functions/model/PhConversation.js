import mongoose from "mongoose";
import { Schema } from "mongoose";
import { phUserSchema } from "./PhUser";
import { phChatMessageSchema } from "./PhChatMessage";

export const phConversationSchema = new Schema({
  participants: {
    type: [phUserSchema],
    default: []
  },
  messages: {
    type: [phChatMessageSchema],
    default: []
  }
});

export default mongoose.model("PhConversation", phConversationSchema);
