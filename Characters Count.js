
const  lengthOfCharact = (s) => {
    let map =  new Map();
    for(var i = 0; i < s.length; i++) {
        var char = s[i]
        if(map.has(char))
            map.set(char, map.get(char) + 1)
         else map.set(char , 1)
    }
    return map.size
};
