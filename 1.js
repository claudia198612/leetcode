function compareVersion(version1, version2) {
    const parts1 = version1.split('.');
    const parts2 = version2.split('.');
    const length = Math.max(parts1.length, parts2.length);
  
    for (let i = 0; i < length; i++) {
      const num1 = parseInt(parts1[i] || 0);
      const num2 = parseInt(parts2[i] || 0);
  
      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      }
    }
  
    return 0;
  }
  
  function sortVersions(versions) {
    return versions.sort(compareVersion);
  }
  
  const versions = ['1.3.0', '1.0.2', '1.2.4', '1.2.3', '1.1.0'];
  const sortedVersions = sortVersions(versions);
  
  console.log(sortedVersions); // 输出 ['1.0.2', '1.1.0', '1.2.3', '1.2.4', '1.3.0']
  