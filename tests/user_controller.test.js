const UserController = require("../controllers/user_controller");
const UserModel = require("../database/models/user_model");

describe("UserController", () => {
    describe("index()", () => {
        test("calls res.render()", async () => {
            const res = {
                render: jest.fn()
            };

            await UserController.index(null, res);
            expect(res.render).toBeCalled();
        });
    });
});
