//1.为什么return await response.json();进行json解析也是异步？
// response.json() 方法返回一个Promise，因为读取响应体并将其解析为JSON是一个异步操作。这是因为响应体可能很大，因此需要分块接收，解析过程也可能相当耗时。
// 调用了 response.json()，你就有了一个 Promise 对象，然后你可以使用 await 关键字来等待这个 Promise 解析。
// 所以，整个表达式是 await response.json()，其中 response.json() 是一个函数调用，返回一个 Promise，然后 await 用于等待这个 Promise 解析。
// response.json() 调用会返回一个解析 JSON 格式的响应体字符串并将其转换为 JavaScript 对象的 Promise

//那return await response.json();，response.json()会返回一个promise对象，使用await等待promise对象的解析，得到最终结果之后再return吗？
// 1.response.json() 方法被调用，开始读取响应体的数据流并解析为 JS 对象。这个方法返回一个 Promise 对象。
// 2.await 关键字用于等待这个 Promise 对象解析，即等待 JSON->JS 解析完成。
// 3.一旦 Promise 解析完成，它的解析值（即 JS 对象）就被 return 语句返回。
// 4.因此，这个 async 函数最终返回的是一个新的 Promise，其解析值是 response.json() 的解析值。

//那为什么这个 async 函数最终返回的是一个新的 Promise？
// async 函数的设计就是这样的：无论你返回什么值，它都会自动被包装为一个 Promise 对象。即使已经有结果了，也是promise对象，通过.then拿

// 那为什么这里不await ? const requestPromise = makeRequest(url);
//`makeRequest(url)` 调用返回一个 Promise 对象，该对象将在请求完成时解析。你可能不想立即等待每个请求完成。
//通过将每个请求的 Promise 存储在一个队列中，代码可以控制正在运行的并发请求的数量。(加上await就没法并发了，而是按顺序)
//这样做的好处是它允许你控制同时运行的请求的最大数量。
//在某些情况下，这可能是所需的行为，但在这个特定的例子中，目标是允许一些请求并行执行（最多 `maxConcurrency` 个），以便更有效地利用资源。

//requestQueue.push(requestPromise);这里不等它结束就push岂不是会push进undefined？
//不会的。当你调用 makeRequest(url) 时，它会立即返回一个 Promise 对象，并且该对象随后被推送到 requestQueue 数组中。
//即使 makeRequest 的异步操作尚未完成，该 Promise 对象依然存在，并可以随后通过 .then() 或 await 进行处理。

async function makeRequest(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw new Error(`Request to ${url} failed: ${error.message}`);
    }
  }
  
  async function controlMaxConcurrency(urls, maxConcurrency) {
    const requestQueue = [];
    let runningRequests = 0;
  
    for (const url of urls) {
      // Create a promise for each request and add it to the request queue
      const requestPromise = makeRequest(url);
      requestQueue.push(requestPromise);
  
      // Start executing requests up to the maximum concurrency limit
      if (runningRequests < maxConcurrency) {
        runningRequests++;
        executeRequest(requestPromise);
      }
    }
  
    // Function to execute a request and handle its completion
    async function executeRequest(requestPromise) {
      try {
        await requestPromise;
      } catch (error) {
        console.error(error.message);
      } finally {
        // After the request is completed, remove it from the request queue
        requestQueue.splice(requestQueue.indexOf(requestPromise), 1);
        runningRequests--;
  
        // If there are more requests in the queue, execute the next one
        if (requestQueue.length > 0) {
          executeRequest(requestQueue[0]);
        }
      }
    }
  }
  
  // Example usage
  const urls = [
    'https://api.example.com/data/1',
    'https://api.example.com/data/2',
    'https://api.example.com/data/3',
    'https://api.example.com/data/4',
    'https://api.example.com/data/5',
    // Add more URLs as needed
  ];
  
  controlMaxConcurrency(urls, 3);
  
