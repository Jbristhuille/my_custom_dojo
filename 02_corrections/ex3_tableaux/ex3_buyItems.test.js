let buyItems = require('./ex3_buyItems');

test("Buy some items", () => {
    expect(buyItems(["sword", "bombs"])).toEqual([{id: 1, name: 'sword'}, {id: 5, name: 'bombs'}]);
    expect(buyItems([])).toEqual([]);
    expect(buyItems(["skull", "arrows"])).toEqual([{id: 3, name: 'arrows'}]);
});