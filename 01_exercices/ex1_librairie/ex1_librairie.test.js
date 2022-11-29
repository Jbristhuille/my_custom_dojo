const sortBooks = require('./ex1_librairie');

test("Sort only", () => {
    expect(sortBooks(['b', 'c', 'a'])).toEqual(['a', 'b', 'c']);
});

test("Remove null", () => {
    expect(sortBooks(['b', 'c', null, null, 'a'])).toEqual(['a', 'b', 'c']);
});

test("Handle null parameter", () => {
    expect(sortBooks(null)).toEqual([]);
});