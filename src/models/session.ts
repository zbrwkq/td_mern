import mongoose, { Schema } from "mongoose";
import { IFilm, filmSchema } from "./film";

export interface ISession {
  film: IFilm;
  date: Date;
  time: string;
  availableSeats: number;
}

export const sessionSchema: Schema<ISession> = new mongoose.Schema({
  film: filmSchema,
  date: Date,
  time: String,
  availableSeats: Number,
});

const sessionModel = mongoose.model<ISession>("session", sessionSchema);
export default sessionModel;
