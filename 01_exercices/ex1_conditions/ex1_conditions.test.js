const isAlive = require('./ex1_conditions');

test('Player is dead', () => {
    expect(isAlive(0)).toBe("Player is dead !");
    expect(isAlive(-2)).toBe("Player is dead !");
    expect(isAlive('Hello')).toBe("Player is dead !");
    expect(isAlive(null)).toBe("Player is dead !");
});

test('Player is alive', () => {
    expect(isAlive(10)).toBe("Is alive with 10 HP");
    expect(isAlive(1)).toBe("Is alive with 1 HP");
    expect(isAlive(56895)).toBe("Is alive with 56895 HP");
});