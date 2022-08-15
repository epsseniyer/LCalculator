const terminal = require('terminal-kit');
const term = require('terminal-kit').terminal;
const intify = require("convert-string-to-number").convertStringToNumber
var autocomplete = [
    'divide', 'multiply', 'sum', 'sub'
]
term.appName = "Calculator"
term.windowTitle("Calculator - Lillayly")
term("Loading...")
setTimeout(() => {
    term("What you Wanna do (divide,multiply,sum,sub) >> ")
    term.inputField({
        autoComplete: autocomplete
    }, function(err, input) {
        if (input == "divide") {
            let First;
            let Second;
            term.magenta("\n First Number *Need to be higher* \n")
            term.inputField(function(err2, in2) {
                First = in2
                term.magenta("Second Number \n")
                term.inputField(function(erro2, input2) {
                    Second = input2
                    term.magenta("\nResult  : " + First / Second)
                })
            })
        } else if (input == "multiply") {
            term.magenta("\nFirst Number \n")
            term.inputField(function(errw, inpw) {
                First = inpw
                term.magenta("\nSecond Number \n")
                term.inputField(function(err, inputo) {
                    Second = inputo
                    term.magenta("\nResult : " + First * Second)
                })
            })
        } else if (input == "sum") {
            term.magenta("\nFirst Number \n")
            term.inputField(function(errw, inpw) {
                First = inpw
                term.magenta("\nSecond Number \n")
                term.inputField(function(err, inputo) {
                    Second = inputo
                    term.magenta("\nResult : \n")
                    term.magenta(intify(First) + intify(Second))
                })
            })
        } else if (input == "sub") {
            term.magenta("\nFirst Number \n")
            term.inputField(function(errw, inpw) {
                First = inpw
                term.magenta("\nSecond Number \n")
                term.inputField(function(err, inputo) {
                    Second = inputo
                    term.magenta("\nResult : " + intify(First) - intify(Second))
                })
            })
        } else {
            term.error("Unknown Input.")
        }
    })
}, 1000);