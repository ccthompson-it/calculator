var entries = []
var current = ""

function itWorks(el){
  val = el.value
  if( !isNaN(val) || val == "." ){
    current += val
    document.getElementById("answer").value = current
  }
  else if(val == "AC"){
    entries = []
    current = ""
    document.getElementById("answer").value = ""
  }
  else if(val == "CE"){
    current = ""
    document.getElementById("answer").value = ""
  }
  else{
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
      current = ""
      document.getElementById("answer").value = ""
    }
  }
}

function doMath(){
  var total = Number(entries[0])
  for( var i=1; i<entries.length; i++){
    var symbol = entries[i]
    var nextNumber = Number(entries[i + 1])
    if(symbol == "+"){total += nextNumber}
    else if(symbol == "-"){total -= nextNumber}
    else if(symbol == "*"){total *= nextNumber}
    else if(symbol == "/"){total /= nextNumber}
    i++
  }
  document.getElementById("answer").value = total
}