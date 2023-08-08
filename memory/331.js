async function addNumbers(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(a + b), 0);
    });
  }
  
  async function calculateSum() {
    const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
    const chunkSize = 50; // 可调整的分块大小，可以根据需求进行调整
    const chunks = [];
  
    for (let i = 0; i < numbers.length; i += chunkSize) {
      chunks.push(numbers.slice(i, i + chunkSize));
    }
  
    async function processChunk(chunk) {
      let sum = 0;
      for (const number of chunk) {
        sum = await addNumbers(sum, number);
  
      }
      // console.log("sum: ", sum);
      return sum;
    }
    const promises =  chunks.map((chunk) =>  processChunk(chunk));
    const results = await Promise.all(promises);
    console.log("promises: ", promises);
    // console.log("results: ", results);
  
    let totalSum = 0;
    for (const sum of results) {
      totalSum = await addNumbers(totalSum, sum);
    }
  
    console.log("Total sum: ", totalSum);
  }
  
  calculateSum();
  