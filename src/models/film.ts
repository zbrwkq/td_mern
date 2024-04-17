import mongoose, { Schema } from "mongoose";
import { IDirector, directorSchema } from "./director";

export interface IFilm {
  title: string;
  releaseYear: Date;
  genre: string;
  directors: IDirector[];
}

export const filmSchema: Schema<IFilm> = new mongoose.Schema({
  title: String,
  releaseYear: Date,
  genre: String,
  directors: [directorSchema],
});

const filmModel = mongoose.model<IFilm>("film", filmSchema);
export default filmModel;
