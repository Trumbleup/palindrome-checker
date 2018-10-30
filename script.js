
function palindrome(str) {
  let newStr =  str.replace(/[^a-z0-9]/gmi, "").toLowerCase();
  let reverseStr = str.split("").reverse().join("").replace(/[^a-z0-9]/gmi, "").toLowerCase();
  if (newStr === reverseStr) {
    return document.getElementById("answer").innerHTML = "true";
  }

  else {
    return document.getElementById("answer").innerHTML = "false";
  }

  
};

let button = document.getElementById("enter");
let input = document.getElementById("palindrome");


button.addEventListener("click", function() {
	if (input.value.length > 0){
		palindrome(input.value)
	}
});
