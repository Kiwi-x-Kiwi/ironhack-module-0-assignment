function removeUrlAnchor(url){
  return url.indexOf("#") > 0 ? url.slice(0, url.indexOf("#")) : url;
}