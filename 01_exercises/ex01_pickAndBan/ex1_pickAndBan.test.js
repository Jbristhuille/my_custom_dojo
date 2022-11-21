const pickAndBan = require("./ex1_pickAndBan");

test("Pick many", () => {
    expect(pickAndBan([{
        name: "Yasuo",
        picked: false
    }, {
        name: "Bard",
        picked: true
    }, {
        name: "Ezreal",
        picked: true
    }])).toEqual({champs: ["Bard", "Ezreal"], picked: 2});
});

test("Empty list", () => {
    expect(pickAndBan([])).toEqual({champs: [], picked: 0});
});

test("No pick", () => {
    expect(pickAndBan([{name: "Thresh", picked: false}])).toEqual({champs: [], picked: 0});
});

test("Pick one", () => {
    expect(pickAndBan([{name: "Lulu", picked: true}])).toEqual({champs: ["Lulu"], picked: 1});
});