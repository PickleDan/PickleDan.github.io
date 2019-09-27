const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    return begin + sequenceSum(begin + step, end, step);
};

console.log(sequenceSum(2, 6, 2));