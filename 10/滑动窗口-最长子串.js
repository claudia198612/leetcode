function lengthOfLongestSubstring(s) {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {};
  
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
      const rightChar = s[windowEnd];
      // 如果字符已经在窗口内，则将窗口的左侧移到该字符的右侧一位
      if (charIndexMap[rightChar] >= 0) {
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // 保存字符的索引
      charIndexMap[rightChar] = windowEnd;
      // 更新最大长度
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  const inputString = "abcabcbb";
  console.log(lengthOfLongestSubstring(inputString)); // 输出 3
  
