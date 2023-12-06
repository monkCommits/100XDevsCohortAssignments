/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  if(str1.length!==str2.length){
    return false
  }
  else{
    for(let i=0; i<str1.length;i++){
      let j=0
      while(j<str1.length){
        
        if(str1[i]===str2[j]){

          str2[j]='0'
          break
        }
        j++
      }
      if(j===str1.length){

        return false
      }
    }
  }
  return true
}
console.log(isAnagram('name','mane'));
module.exports = isAnagram;
