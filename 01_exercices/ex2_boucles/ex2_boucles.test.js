const countAmmo = require('./ex2_boucles');

test("Count ammo", () => {
    expect(countAmmo([10, 2, 5])).toBe(17);
    expect(countAmmo([20, 0, 0, 63])).toBe(83);
    expect(countAmmo([])).toBe(0);
    expect(countAmmo(null)).toBe(0);
    expect(countAmmo([-20, 10, 35])).toBe(45);
});