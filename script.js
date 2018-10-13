
function palindrome(str) {
  let newStr =  str.replace(/[^a-z0-9]/gmi, "").toLowerCase();
  let reverseStr = str.split("").reverse().join("").replace(/[^a-z0-9]/gmi, "").toLowerCase();
  if (newStr === reverseStr) {
    return true
  }

  else {
    return false;
  }

  
}



palindrome("eye");