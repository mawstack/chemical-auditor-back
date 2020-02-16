const express = require("express");
const router = express.Router();
const EntryController = require("./../controllers/entry_controller");
const { celebrate, Joi, Segments } = require("celebrate");

router.get("/", EntryController.index);

router.get("/new", EntryController.newEntry);

router.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      startTime: Joi.number().required(),
      finishTime: Joi.number().required(),
      // currentLat: Joi.number().required(),
      // currentLong: Joi.number().required(),
      cropRow: Joi.number().required(),
      chemicalUsed: Joi.string().required(),
      whp: Joi.number().required(),
      ehd: Joi.string().required(),
      rateApplied: Joi.number().required(),
      quantityApplied: Joi.number().required(),
      equipmentMethodUsed: Joi.string().required(),
      speed: Joi.number().required(),
      deg: Joi.number().required(),
      notes: Joi.string().allow(),
      image: Joi.string().allow(),
      user: Joi.string().required(),
      date: Joi.string().required()
    }
  }),
  EntryController.create
);

router.get("/:id", EntryController.show);

router.delete("/:id", EntryController.deleteEntry);

router.get("/:id/edit", EntryController.edit);

router.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      startTime: Joi.string().required(),
      finishTime: Joi.string().required(),
      // currentLat: Joi.number().required(),
      // currentLong: Joi.number().required(),
      cropRow: Joi.number().required(),
      chemicalUsed: Joi.string().required(),
      whp: Joi.number().required(),
      ehd: Joi.string().required(),
      rateApplied: Joi.number().required(),
      quantityApplied: Joi.number().required(),
      equipmentMethodUsed: Joi.string().required(),
      speed: Joi.number().required(),
      deg: Joi.number().required(),
      notes: Joi.string().allow(),
      image: Joi.string().allow(),
      user: Joi.string().required(),
      date: Joi.string().required()
    }
  }),
  EntryController.update
);

module.exports = router;
