// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test on function 1
test("114-514-1919 is a phone number, true", () => {
    expect(functions.isPhoneNumber("114-515-1919")).toBe(true);
});

test("858-368-1957 is a phone number, true", () => {
    expect(functions.isPhoneNumber("858-368-1957")).toBe(true);
});

test("114514 is a phone number, false", () => {
    expect(functions.isPhoneNumber("114514")).toBe(false);
});

test("1919-810 is a phone number, false", () => {
    expect(functions.isPhoneNumber("1919-810")).toBe(false);
});

// Test on function 2
test("hhung@ucsd.edu is an email, true", () => {
    expect(functions.isEmail("hhung@ucsd.edu")).toBe(true);
});

test("someone123@hotmail.com is an email, true", () => {
    expect(functions.isEmail("someone123@hotmail.com")).toBe(true);
});

test("hhung!ucsd.edu is an email, false", () => {
    expect(functions.isEmail("hhung!ucsd.edu")).toBe(false);
});

test("www.nicovideo.jp is an email, false", () => {
    expect(functions.isEmail("www.nicovideo.jp")).toBe(false);
});

// Test on function 3
test("myPaSSwOrd is a strong password, true", () => {
    expect(functions.isStrongPassword("myPaSSwOrd")).toBe(true);
});

test("cSe1_10i is a strong password, true", () => {
    expect(functions.isStrongPassword("cSe1_10i")).toBe(true);
});

test("114Kitazawa is a strong password, false", () => {
    expect(functions.isStrongPassword("114Kitazawa")).toBe(false);
});

test("pwd is a strong password, false", () => {
    expect(functions.isStrongPassword("pwd")).toBe(false);
});

// Test on function 4
test("12/12/1979 is a date, true", () => {
    expect(functions.isDate("12/12/1979")).toBe(true);
});

test("01/03/0079 is a date, true", () => {
    expect(functions.isDate("01/03/0079")).toBe(true);
});

test("114/514 is a date, false", () => {
    expect(functions.isDate("114/514")).toBe(false);
});

test("1888/9/10 is a date, false", () => {
    expect(functions.isDate("1888/9/10")).toBe(false);
});

// Test on function 5
test("#2c031d is a hex color code, true", () => {
    expect(functions.isHexColor("#2c031d")).toBe(true);
});

test("#000000 is a hex color code, true", () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});

test("#11451# is a hex color code, false", () => {
    expect(functions.isHexColor("#11451#")).toBe(false);
});

test("#@23345, is a hex color code, false", () => {
    expect(functions.isHexColor("#@23345")).toBe(false);
});
