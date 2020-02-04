conts { create } = require("./controllers/entry_controller");
conts { show } = require("./controllers/entry_controller");
const assert = require("assert");

const id = 123

test(findById("get.123"), ()=> {
    const actual = findById(get.id);
    const expectation = err

    assert.equal(actual, expectation);
})