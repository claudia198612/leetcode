// function hasCircularDependency(graph) {
//     const visited = new Set();
//     const stack = new Set();
  
//     function isCircularDependency(node) {
//       if (stack.has(node)) {
//         return true;
//       }
  
//       if (visited.has(node)) {
//         return false;
//       }
  
//       visited.add(node);
//       stack.add(node);
  
//       const neighbors = graph[node];
  
//       for (const neighbor of neighbors) {
//         if (isCircularDependency(neighbor)) {
//           return true;
//         }
//       }
  
//       stack.delete(node);
//       return false;
//     }
  
//     for (const node of Object.keys(graph)) {
//       if (isCircularDependency(node)) {
//         return true;
//       }
//     }
  
//     return false;
//   }
  
//   // 示例图形表示依赖关系，a import b, b import c, c import a
//   const dependencyGraph = {
//     a: ['b'],
//     b: ['c'],
//     c: ['a'],
//   };
  
//   const hasCircular = hasCircularDependency(dependencyGraph);
//   console.log(hasCircular); // 输出 true，存在循环依赖
  


  const dependencyGraph = {
    a: ['b'],
    b: ['c'],
    c: ['a'],
  };

  function hasCircular(graph){

    let visited = new Set()
    let stack = new Set()

    function isCircularDependency(node) { 
        if(stack.has(node)){
            return true
        }

        if(visited.has(node)){
            return false
        }
        const neighbors = graph[node]

        stack.add(node)
        visited.add(node)
        for(const neighbor of neighbors){
            if(isCircularDependency(neighbor)){
                return true
            }
            
        }

        stack.delete(node)
        return false

     }


    for(const node of Object.keys(graph)){
        if(isCircularDependency(node)){
            return true
        }
        return false
    }




  }
  

console.log(hasCircular(dependencyGraph))