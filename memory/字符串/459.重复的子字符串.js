/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (s.length === 0)
        return false;

    const getNext = (s) => {
        let next = [];
        let j = 0;

        next.push(j);

        for (let i = 1; i < s.length; i++) {
            // 这里一定要用while，因为回退过程是连续的，一直回退到j = 0的时候才停止
            while (j > 0 && s[i] !== s[j])
                j = next[j - 1];
            if (s[i] === s[j])
                j++;
            next.push(j);
        }

        return next;
    }

    let next = getNext(s);
    console.log(next)
    if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0)
        return true;
    return false;
};
console.log(repeatedSubstringPattern('abac'))
