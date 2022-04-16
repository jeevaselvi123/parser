
@builtin "whitespace.ne" 
@builtin "number.ne" 
expression -> [a-zA-Z]:*
            | input
            | boolean
            | myNull

myNull => "null"

input -> [0-9]:+

boolean -> "true"
        | "false"

