module.exports = {
    spec: ["./src/tests/specs/api.spec.js", "./src/tests/numbers-validator/isNumberEven.spec.js"],
    require: "chai/register-expect.js",
    reporter: "mochawesome"
}