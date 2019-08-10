const {step} = require("./number-steps");

describe("number-steps", () => {
    describe("Bugs", () => {
        it("should handle the -1 case correctly", () => {
            expect(step({size : 1, snap: true}).down(-1)).toBe(-2)
        });
        it("should handle the 1 case correctly", () => {
            expect(step({size : 1, snap: true}).up(1)).toBe(2)
        });
    })

    describe("Happy Case", () => {
        it("should resolve non-snapped steps correctly", () => {
            expect(step({size : 50}).up(23)).toBe(73)
            expect(step({size : 50}).up(-23)).toBe(27)
            expect(step({size : 50}).down(23)).toBe(-27)
            expect(step({size : 50}).down(-23)).toBe(-73)
        })

        it.each`value | expected
        ${-23} | ${0}
        ${-100}| ${-50}
        ${-115}| ${-100}
        ${-145}| ${-100}
        ${-150}| ${-100}
        ${-155}| ${-150}
        ${-200}| ${-150}
        ${-250}| ${-200}
        ${0}| ${50}
        ${23}| ${50}
        ${115}| ${150}
        ${145}| ${150}
        ${150}| ${200}
        `("should resolve the snapped up steps for $value and step size 50 correctly", ({value, expected}) => {
            expect(step({size : 50, snap: true}).up(value)).toBe(expected)
        })

        it.each`value | expected
        ${-23} | ${0}
        ${-115}| ${-92}
        ${-145}| ${-138}
        ${-155}| ${-138}
        ${0}| ${23}
        ${23}| ${46}
        ${116}| ${138}
        ${145}| ${161}
        `("should resolve the snapped up steps for $value and step size 23 correctly", ({value, expected}) => {
            expect(step({size : 23, snap: true}).up(value)).toBe(expected)
        })

        it.each`value | expected
        ${-23} | ${-50}
        ${-115}| ${-150}
        ${-145}| ${-150}
        ${-150}| ${-200}
        ${-155}| ${-200}
        ${0}| ${-50}
        ${23}| ${0}
        ${115}| ${100}
        ${145}| ${100}
        ${150}| ${100}
        ${155}| ${150}
        `("should resolve the snapped down steps for $value and step size 50 correctly", ({value, expected}) => {
            expect(step({size : 50, snap: true}).down(value)).toBe(expected)
        })
    })
})