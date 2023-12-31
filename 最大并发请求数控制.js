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
  