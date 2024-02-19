function getCombinations(n, c) {
    return [];
}

function main() {
    const cases_file = require("fs").readFileSync("case_3.txt", "utf-8");
    const cases = [];
    const solutions = [];
    for (const line of cases_file.split("\n")) {
        if (line.length > 0) {
            const [c, a] = line.split(",");
            cases.push(c.split("|").map((x) => x.split("")));
            solutions.push(a.split("|"));
        }
    }
    for (let i = 0; i < cases.length; i++) {
        const r = getCombinations(cases[i].length, cases[i]);
        const a = new Set(r.map((x) => x.join("")));
        const b = new Set(solutions[i]);
        for (const x of a) {
            b.delete(x);
        }
        console.log(`Case ${i + 1} : ${b.size === 0 ? "OK" : "FAIL"}`);
    }
}
main();
