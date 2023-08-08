var reverseWords = function(s) {
    // 去除两边的空格
    s = s.trim()
    var array = s.split(" ")
    // 去除数组中的空格
    var count = 0
    for(let fast = 0,slow = 0; fast < array.length ; fast ++){
        if(array[fast] != ''){
            array[slow] = array[fast]
            count ++
            slow ++
        }
    }
    array.length = count
    array = reverse(array,0,array.length - 1)

    return array.join(" ")
};

var swap = function(array,i,j){
    var pos = array[i]
    array[i] = array[j]
    array[j] = pos

    return array
}

var reverse = function(array,i,j) {

    while(i < j){
        swap(array,i,j)
        i ++
        j --
    }
    return array
}


s = "  hello world  "

console.log(reverseWords(s))
























