import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import directorRoutes from "./routes/directorRoutes";
import filmRoutes from "./routes/filmRoutes";
import sessionRoutes from "./routes/sessionRoutes";

const uri =
  "mongodb+srv://user1:KEplL71VMVTGReQ7@cluster0.l27w5f3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions: ConnectOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
  dbName: "Test",
};

const app = express();
const PORT = process.env.PORT || 3000;

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);

app.use(express.json());
app.use("/api/directors", directorRoutes);
app.use("/api/films", filmRoutes);
app.use("/api/sessions", sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
