module.exports = function reverse(n) {
    return Number(
        n
            .toString()
            .split("")
            .map((i) => (i === "-" ? "" : i))
            .reverse()
            .join("")
    );
};
