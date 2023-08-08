let result = []
let path = []
var combine = function(n, k) {
    // 这行非要写result = []，不然上次运行的就会影响下次运行测试，因为result是全局变量
    result = []
   Combinations(n,k,1)
   return result
};

var Combinations = function(n,k,start){
   if(path.length === k){
       // 等于k值说明到达叶节点了
       result.push([...path])
       return
   }
   // 没有到达叶节点就继续递归

//    这里的n - (k-path.length) + 1是剪枝操作，避免不必要的循环--n - (k-path.length) + 1 在集合n中至多要从该起始位置
   for(let i = start;i <= n - (k-path.length) + 1;i ++){
       path.push(i)
       Combinations(n,k,i + 1)
       // 回溯
       path.pop()
   }

}


console.log(combine(1,1))