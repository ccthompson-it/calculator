var entries = []
var current = ""
var total = 0

function itWorks(el){
  val = el.value
  if( !isNaN(val) || val == "." ){
    current += val
    document.getElementById("answer").value = current
  }
  else if(val == "AC"){
    entries = []
    current = []
    total = []
    document.getElementById("answer").value = ""
  }
  else if(val == "CE"){
    current = []
    document.getElementById("answer").value = ""
  
}