import mongoose from "mongoose";
import { Schema } from "mongoose";
import { phUserSchema } from "./PhUser";
import { phPhraseSchema } from "./PhPhrase";

export const phDictionarySchema = new Schema({
  name: {
    type: String,
    required: false
  },
  user: {
    type: phUserSchema,
    required: true
  },
  phrases: {
    type: [phPhraseSchema],
    default: []
  },
  nativeLanguage: {
    type: String,
    required: true
  },
  foreignLanguage: {
    type: String,
    required: true
  }
});

export default mongoose.model("PhDictionary", phDictionarySchema);
