function rot13(str) {
  return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + 13 ) % 26 + 65));
}

rot13("SERR PBQR PNZC");
