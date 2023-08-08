var commonChars = function (words) {
    let res = []
    let firstHash = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    // 先把words[0]填充到firstHash里面
    for(const i of words[0]){
        let idx = i.charCodeAt()
        firstHash[idx - base] ++
    }
    let otherHash = new Array(26).fill(0)
    for(let i = 1;i < words.length;i ++){
        // 填充otherhash
        for(const j of words[i]){
            let idx = j.charCodeAt()
            otherHash[idx - base] ++
        }
        // 选出最小的
        for(let i = 0;i < 26;i ++){
            firstHash[i] = Math.min(firstHash[i], otherHash[i])
        }
        otherHash.fill(0)
    }

    for(let i = 0;i < 26;i ++){
        while(firstHash[i] > 0){
            let s = String.fromCharCode(base + i)
            res.push(s)
            firstHash[i] --
        }
    }
    return res
};

var words = ["bella","label","roller"]
console.log(commonChars(words))