import { Router, Response, Request } from "express";
import DirectorModel from "../models/director";

const router = Router();

/**
 * Get all directors
 * @route GET /api/v1/directors
 * @returns array of directors
 */
router.get("/", (req: Request, res: Response) => {
  const query = async () => {
    try {
      let result = await DirectorModel.find({});
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while getting documents");
    }
  };
  query();
});

/**
 * Get director by id
 * @route GET /api/v1/directors/:id
 * @returns director
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Invalid id");
  } else {
    const query = async () => {
      try {
        let result = await DirectorModel.findById(id).exec();
        if (!result) {
          res.status(404).send("Director not found");
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
 * Create director
 * @route POST /api/v1/directors
 * @returns created director
 */
router.post("/", (req: Request, res: Response) => {
  let document = new DirectorModel(req.body);
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
 * Update director
 * @route PUT /api/v1/directors/:id
 * @returns updated director
 */
router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await DirectorModel.findByIdAndUpdate(id, req.body, {
          returnDocument: "after",
        });
        if (!result) {
          res.status(404).send("Director not found");
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
 * Delete director
 * @route DELETE /api/v1/directors/:id
 * @returns deleted director
 */
router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await DirectorModel.findByIdAndDelete(id);
        if (!result) {
          res.status(404).send("Director not found");
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
