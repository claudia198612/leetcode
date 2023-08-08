var isValid = function(s) {
    var stack = []

    for(let i = 0; i < s.length ; i ++){
        var c = s[i]
        switch(c){
            case'(':
                stack.push(')');
                break;
            case'{':
                stack.push('}');
                break;
            case'[':
                stack.push(']');
                break;
            default:
                if(c !== stack.pop()){
                    return false;
                }
        }
    }
    return stack.length === 0
};



s = "()"
console.log(isValid(s))













