import { Router, Response, Request } from "express";
import FilmModel from "../models/film";

const router = Router();

/**
 * Get all films
 * @route GET /api/v1/films
 * @returns array of films
 */
router.get("/", (req: Request, res: Response) => {
  const query = async () => {
    try {
      let result = await FilmModel.find({});
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while getting documents");
    }
  };
  query();
});

/**
 * Get film by id
 * @route GET /api/v1/films/:id
 * @returns film
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Invalid id");
  } else {
    const query = async () => {
      try {
        let result = await FilmModel.findById(id).exec();
        if (!result) {
          res.status(404).send("Film not found");
        } else {
          res.status(200).send(result);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Error while getting document");
      }
    };
    query();
  }
});

/**
 * Create film
 * @route POST /api/v1/films
 * @returns created film
 */
router.post("/", (req: Request, res: Response) => {
  let document = new FilmModel(req.body);
  const query = async () => {
    try {
      let result = await document.save();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while saving document");
    }
  };
  query();
});

/**
 * Update film
 * @route PUT /api/v1/films/:id
 * @returns updated film
 */
router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await FilmModel.findByIdAndUpdate(id, req.body, {
          returnDocument: "after",
        });
        if (!result) {
          res.status(404).send("Film not found");
        } else {
          res.status(200).send(result);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Error while updating document");
      }
    };
    query();
  }
});

/**
 * Delete film
 * @route DELETE /api/v1/films/:id
 * @returns deleted film
 */
router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await FilmModel.findByIdAndDelete(id);
        if (!result) {
          res.status(404).send("Film not found");
        } else {
          res.status(200).send(result);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Error while updating document");
      }
    };
    query();
  }
});

export default router;
