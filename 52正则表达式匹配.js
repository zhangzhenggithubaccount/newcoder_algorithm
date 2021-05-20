function checkMatch(s, i, p, j){
    if(j===p.length && i!==s.length) return false
    if(j===p.length && i===s.length) return true
    if(p[j+1]!=='*'){
        if(s[i]===p[j] || p[j]==='.') {
            return checkMatch(s, i+1, p, j+1)
        }else{
            return false
        }
    }else{
        if(s[i]!==p[j] && p[j]!=='.'){
            return checkMatch(s, i, p, j+2)
        }
        else if(s[i]===p[j] || (p[j]==='.' && i!==s.length)){
            return checkMatch(s,i+1, p, j)||checkMatch(s,i+1, p, j+2)||checkMatch(s,i,p,j+2)
        }else if(p[j]==='.' && s.length===0) return true
    }
    return false
}
let res = match('aaa', 'a*a');
console.log(res);