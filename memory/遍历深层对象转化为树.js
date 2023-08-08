// function transformToTree(data, parentId) {
//     let nodes = [];
//     for (let key in data) {
//       let node = {
//         id: key,
//         parentId: parentId,
//         children: []
//       };
//       if (typeof data[key] === 'object') {
//         node.children = transformToTree(data[key], key);
//       } else {
//         node.value = data[key];
//       }
//       nodes.push(node);
//     }
//     return nodes;
//   }


  
  const data = {
    a: {
      a1: 1,
      a2: {
        a21: 'a21',
        a22: {
          a221: true
        }
      }
    },
    b: {
      b1: 'b1',
      b2: {
        b21: ['b21-1', 'b21-2', 'b21-3'],
        b22: null
      }
    },
    c: false,
    d: 123
  };

  const treeData = transformToTree(data, null);
  console.dir(treeData, { depth: null });
  