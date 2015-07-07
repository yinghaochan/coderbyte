function ExOh(str) { 
  return str.split("").sort().indexOf("x") == (str.length)/2; 
}
ExOh(readline());           
