//1
describe("should return sum of positive numbers", function () {
    it("should return the sum of all the numbers when the numbers are all positive", function () {
        expect(positiveSum([2, 4, 6, 8, 10])).toBe(30);
    })
    it("should return sum of only positive numbers if array has some negative numbers too", function () {
        expect(positiveSum([2, 4, -5, 10, 15])).toBe(31);
    })
    it("should return a sum as 0, when the provided array is empty", function () {
        expect(positiveSum([])).toBe(0);
    })
    it("should return a sum of 0, when the provided array is all negative numbers", function () {
        expect(positiveSum([-3, -35, -2, -10])).toBe(0);
    })
})

//2
describe("should return true or false when number is divisble by both the divisors", function () {
    it("should return true when a number is divisible by both of the provided divisors", function () {
        expect(isDivisible(49, 7, 49)).toBe(true);
    })
    it("should return false when the number is smaller then both the provided divisors", function () {
        expect(isDivisible(5, 25, 125)).toBe(false);
    })
    it("should return false when the number is not divisible by only one of the provided divisors", function () {
        expect(isDivisible(108, 12, 16)).toBe(false);
    })
    it("should return false when the number is not divisible by any of the provided divisors", function () {
        expect(isDivisible(73, 10, 3)).toBe(false)
    })
})

//3
describe("Should return the reverse if string is provided", function () {
    it("should returns itself, When there is only 1 characters in the string", function () {
        expect(solution("v")).toBe("v");
    })
    it("should returns the reversed string, When there are multiple characters in the string", function () {
        expect(solution("reverse")).toBe("esrever")
    })
    it("should returns empty string, When there are no characters in the string", function () {
        expect(solution("")).toBe("")
    })
})

//4
describe("should return reverse sequence of the number pased until 1", function () {
    it("should accept only number as an argument", function () {
        expect(reverseSeq("string")).toEqual([])
    })
    it("should return the reverse array of the number til one when a positive number is passed", function () {
        expect(reverseSeq(6)).toEqual([6, 5, 4, 3, 2, 1])
    })
    it("should retrurn an empty array when a negative number is passed", function () {
        expect(reverseSeq(-9)).toEqual([])
    })
})