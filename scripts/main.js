var entries = []
var current = ""

function getButton(el){
  var val = el.value
  if( numberCheck(val) ){
    current += val
    updateInput(current)
  }
  else if(val == "AC"){
    entries = []
    resetCurrent()
  }
  else if(val == "CE"){
    resetCurrent()
  }
  else{
    pushToEntries(val)  
  }
}

function doMath(){
  var total = Number(entries[0])
  for( var i=1; i<entries.length; i++){
    nextNum = Number(entries[i+1])
    if(entries[i] == "+"){total += nextNum}
    else if(entries[i] == "-"){total -= nextNum}
    else if(entries[i] == "*"){total *= nextNum}
    else if(entries[i] == "/"){total /= nextNum}
    i++
  }
  updateInput(total)
}

function resetCurrent(){
  current = ""
  updateInput("")
}

function updateInput(val){
  document.getElementById("answer").value = val
}

function numberCheck(val){
  if( !isNaN(val) || val == "." ){
    return true
  }
  return false
}

function pushToEntries(val){
  if( current == ""){
    alert("Please enter a number before attempting to math")
  }
  else if( val == "="){
    entries.push(current)
    doMath()
    current = ""
    entries = []
  }
  else{
    entries.push(current)
    entries.push(val)
    resetCurrent()
  }
}