import mongoose, { Schema } from "mongoose";

export interface IDirector {
  name: string;
  birthDate: Date;
  biography: string;
}

export const directorSchema: Schema<IDirector> = new mongoose.Schema({
  name: String,
  birthDate: Date,
  biography: String,
});

const directorModel = mongoose.model<IDirector>("director", directorSchema);
export default directorModel;
