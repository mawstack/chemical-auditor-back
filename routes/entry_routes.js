const express = require("express");
const router = express.Router();
const EntryController = require("./../controllers/entry_controller");
const { celebrate, Joi, Segments } = require("celebrate");
const { isAdminCheck } = require("./../middleware/is_admin_check");

router.get("/", EntryController.index);

router.get("/new", EntryController.newEntry);

router.post("/", celebrate({
        [Segments.BODY]: {
            startTime: Joi.number().required(),
            finishTime: Joi.number().required(),
            currentLat: Joi.number().required(),
            currentLong: Joi.number().required(),
            cropRow: Joi.number().required(),
            chemicalUsed: Joi.string().required(),
            WHP: Joi.number().required(),
            EHD: Joi.string().required(),
            rateApplied: Joi.number().required(),
            quantityApplied: Joi.number().required(),
            equipmentMethodUsed: Joi.string().required(),
            speed: Joi.number().required(),
            deg: Joi.number().required(),
            notes: Joi.string().allow(),
            image: Joi.string().allow()
        }
    }),
    EntryController.create
);

router.get("/:id", EntryController.show);

router.delete("/:id",
    isAdminCheck,
    EntryController.deleteEntry
);

router.get("/:id/edit",
    isAdminCheck,
    EntryController.edit
);

router.put("/:id", celebrate({
        [Segments.BODY]: {
            startTime: Joi.number().required(),
            finishTime: Joi.number().required(),
            currentLat: Joi.number().required(),
            currentLong: Joi.number().required(),
            cropRow: Joi.number().required(),
            chemicalUsed: Joi.string().required(),
            WHP: Joi.number().required(),
            EHD: Joi.string().required(),
            rateApplied: Joi.number().required(),
            quantityApplied: Joi.number().required(),
            equipmentMethodUsed: Joi.string().required(),
            speed: Joi.number().required(),
            deg: Joi.number().required(),
            notes: Joi.string().allow(),
            image: Joi.string().allow()
        }
    }),
    isAdminCheck,
    EntryController.update
);

module.exports = router;
