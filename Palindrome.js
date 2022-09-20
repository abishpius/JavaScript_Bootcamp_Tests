function palindrome(str) {
  // Lowercase chars
  let lowerphrase = str.toLowerCase();
  // Remove non-alphanumeric characters
  let regex = /[A-Za-z0-9]/g;
  let naPhrase = lowerphrase.match(regex).join('');

  // Loop for palindrome
  
  for (let i = 0; i < Math.floor(naPhrase.length/2); i++){
      if(naPhrase[i] !== naPhrase[naPhrase.length-i-1]){
          return false;
          
      }
  }

  return true;
}
