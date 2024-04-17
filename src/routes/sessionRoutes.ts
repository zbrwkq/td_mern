import { Router, Response, Request } from "express";
import SessionModel from "../models/session";

const router = Router();
/**
 * Get all sessions
 * @route GET /api/v1/sessions
 * @returns array of sessions
 */
router.get("/", (req: Request, res: Response) => {
  const query = async () => {
    try {
      let result = await SessionModel.find({});
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while getting documents");
    }
  };
  query();
});

/**
 * Get session by id
 * @route GET /api/v1/sessions/:id
 * @returns session
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Invalid id");
  } else {
    const query = async () => {
      try {
        let result = await SessionModel.findById(id).exec();
        if (!result) {
          res.status(404).send("Session not found");
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
 * Create new session
 * @route POST /api/v1/sessions
 * @returns created session
 */
router.post("/", (req: Request, res: Response) => {
  let document = new SessionModel(req.body);
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
 * Update session
 * @route PUT /api/v1/sessions/:id
 * @returns updated session
 */
router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await SessionModel.findByIdAndUpdate(id, req.body, {
          returnDocument: "after",
        });
        if (!result) {
          res.status(404).send("Session not found");
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
 * Delete session
 * @route DELETE /api/v1/sessions/:id
 * @returns deleted session
 */
router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    res.send("Invalid id");
  } else {
    const query = async () => {
      try {
        const result = await SessionModel.findByIdAndDelete(id);
        if (!result) {
          res.status(404).send("Session not found");
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
