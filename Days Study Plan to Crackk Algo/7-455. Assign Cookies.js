var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>(a-b))// greed factor
    s = s.sort((a,b)=>(a-b))// size 
    var index = s.length - 1
    var count = 0
    for(let i = g.length - 1;i >= 0 ; i --){
        if(index >= 0 && s[index] >= g[i]){
            count ++
            index --
        }
    }
    return count
};  



var g = [1,2,3]
var s = [1,1]



console.log(findContentChildren(g,s))






