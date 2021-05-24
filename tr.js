/* Vars to store the strings */
var inText = ""
var outText = ""

/* Elements for input and output */
const input = document.getElementById('input');
const output = document.getElementById('output');

lookup = []
lookup.A = "🅰"
lookup.B = "🅱"
lookup.C = "©"
lookup.D = "	🇩	"
lookup.E = "	🇪	"
lookup.F = "	🇫	"
lookup.G = "	🇬	"
lookup.H = "♓"
lookup.I = "ℹ"
lookup.J = "	🇯	"
lookup.K = "	🇰	"
lookup.L = "	🇱	"
lookup.M = "Ⓜ"
lookup.N = "💹"
lookup.O = "⭕"
lookup.P = "🅿"
lookup.Q = "	🇶	"
lookup.R = "®"
lookup.S = "	🇸	"
lookup.T = "✝️"
lookup.U = "⛎"
lookup.V = "♈"
lookup.W = "〰️"
lookup.X = "❌"
lookup.Y = "	🇾	"
lookup.Z = "💤"

lookup['!'] = "❗"
lookup['?'] = "❓"

lookup['-'] = "➖"
lookup['+'] = "➕"
lookup['$'] = "💲"
lookup['*'] = "✳"
lookup['#'] = "#️⃣"

lookup['0'] = "0️⃣"
lookup['1'] = "1️⃣"
lookup['2'] = "2️⃣"
lookup['3'] = "3️⃣"
lookup['4'] = "4️⃣"
lookup['5'] = "5️⃣"
lookup['6'] = "6️⃣"
lookup['7'] = "7️⃣"
lookup['8'] = "8️⃣"
lookup['9'] = "9️⃣"

lookup['.'] = "。"

/* Translate the input text to emojis */
function translate(a) {
  b = "";
  
  /* Unigrams for loop */
  for (var ci in a)
  {
  	char = a[ci]
    lookup_char = lookup[char.toUpperCase()];
	
    if (lookup_char)
    	new_char = lookup_char
     else
    	new_char = char;
    
  	b += new_char
  }
  
  return b;
}

/* Update the text in the output element */
function update() {
  inText = input.value;
  outText = translate(inText)
  output.innerHTML = outText;
}
/* Set the callback */
input.oninput = update