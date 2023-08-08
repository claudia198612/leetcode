function parseUrlParam(url) {
    // 解析查询字符串部分
    const queryString = url.split('?')[1];
    const pairs = queryString.split('&');
    const urlObject = {};
  
    // 遍历键值对，解析成对象属性
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      let decodedValue;
  
      if (value === undefined) {
        // 如果没有指定值，则将属性值设置为 true
        decodedValue = true;
      } else if (!isNaN(value)) {
        // 如果值可以被转成数字，则将属性值设置为数字类型
        decodedValue = Number(value);
      } else {
        // 否则将属性值解码成中文
        decodedValue = decodeURIComponent(value);
      }
  
      // 如果该属性已经存在，则将值添加到数组中
      if (urlObject.hasOwnProperty(key)) {
        if (Array.isArray(urlObject[key])) {
          urlObject[key].push(decodedValue);
        } else {
          urlObject[key] = [urlObject[key], decodedValue];
        }
      } else {
        // 否则直接设置属性值
        urlObject[key] = decodedValue;
      }
    });
  
    return urlObject;
  }
let url = 'http://www.4399.com/?user=candidate&id=43&id=99&city=%E5%B9%BF%E5%B7%9E&enabled'; 
console.log(parseUrlParam(url))

