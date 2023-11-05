function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

 function genSlice(str) {
     return str.slice(8, 99999);
 }
 function copyClip(text) {
     navigator.clipboard.writeText(text);
     alert('Link copied to clipboard!');
 }

export {
  truncate,
  genSlice,
  copyClip
};
