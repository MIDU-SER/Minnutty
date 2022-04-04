
async function base64_encode(s) {      
    return btoa(unescape(encodeURIComponent(s)));
}
async function base64_decode(s) {      
    return decodeURIComponent(escape(atob(s)));
}
module.exports = { 
  base64_encode: base64_encode,
  base64_decode: base64_decode
};