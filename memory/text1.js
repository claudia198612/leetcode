function xxl(boards) {

    let row = boards.length;
    let cols = boards[0].length;
    let visited = Array.from({length:row}, ()=>new Array(cols).fill(false));
    let direction = [[0,1],[0,-1],[1,0],[-1,0]];
    function dfs(row,col,char,pieces){
      if(row < 0 || row > boards.length || col < 0 || col > boards[0].length ||boards[row][col] !== char || visited[row][col]){
        return;
      }
        
      visited[row][col] = true;
      pieces.push([row,col]);

      for(let [dx,dy] of direction){

        dfs(row + dx ,col + dy,char,pieces);
      }


    }
    let startRow = 0;
    let startCol = 0;
    let piecesRemove = [];
    dfs(startRow,startCol,boards[startRow][startCol],piecesRemove);
    let result = [];
    if(piecesRemove.length >= 3){
      for(let [row,col] of piecesRemove){
        result.push([row,col]);
      }
    }
    return result;
}


boards = [
     [ 'a', 'a', 'a', 'a' ],

      [ 'b', 'c', 'd', 'a' ],
    
     [ 'b', 'd', 'a', 'b' ],
    
      [ 'b', 'a', 'b', 'c' ],
     ]



console.log(xxl(boards))