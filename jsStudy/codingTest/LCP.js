const longestCommonPrefix = (strs) => {
    let prefix = "";

    if(strs === null || strs.length === 0){
        return prefix;
    }

    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i];

        for(let j = 1; j< strs.length; j++){
            if(char !== strs[j][i]){
                return prefix;
            }
        }
        // build prefix
        prefix += char
    }
    return prefix;
}

console.log(longestCommonPrefix(["flow", "flower", "flox"]));