const cases = [
    ["({})", true],
    ["()[]{}", true],
    ["(]", false],
    ["{[()()]}", true],
    ["{[(])}", false],
    ["([)]", false],
    ["((()))", true],
    ["(()())", true],
    ["((())", false],
    ["(()))", false],
    ["", true],
    ["[({})]", true],
    ["[({)}]", false],
    ["{[({})]}", true],
    ["{[({})}]", false],
    ["{[]({})}", true],
    ["{[([]{})]}", true],
    ["{[([]{})}", false],
    ["{[()()()]}", true],
    ["{[()()()]}{}", true],
    ["{[()()()]}{", false],
    ["{[()()()]}}", false],
    ["({[]})", true],
    ["({[})", false],
    ["({[]})[]", true],
    ["({[]})[", false],
    ["(){}[]", true],
    ["({})[{}]", true],
    ["{[]}", true],
    ["({[()]})", true],
];

function isValid(n, c) {}

function main() {
    for (let i = 0; i < cases.length; i++) {
        const [s, a] = cases[i];
        const r = isValid(s.length, s);
        const is_ok = r === a;
        console.log(`Case ${i + 1} ${is_ok ? "OK" : "FAIL"}`);
    }
}
main();
