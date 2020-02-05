const assert = require("assert");
const { create } = require("./../controllers/entry_controller");

describe("Tests for the Entry Controller", () => {
    test("Entry creation returns empty object", () => {
        const req = {
            body: {
                startTime: 1,
                finishTime: 2,
                currentLat: 3,
                currentLong: 4,
                cropRow: 5,
                chemicalUsed: "A",
                whp: 6,
                ehd: "B",
                rateApplied: 7,
                quantityApplied: 8,
                equipmentMethodUsed: "C",
                speed: 9,
                deg: 10,
                date: 11,
                user: "D"
            }
        };
        const actual = create(req);
        const expectation = {};
        assert.equal(actual, expectation);
    });
});