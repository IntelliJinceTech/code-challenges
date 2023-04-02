// parameter could be a string or number
//returns a number or String "Error"
// ("hello"), "Error");
// (1), 56);
// (5), 256);
// (0), 6);
// (1.2), 66);
// (3), 156);
// ("RyanIsCool"), "Error");
// (-3), -144);
// (""), "Error");
// (0.03), 7.5);

//* function uses parameter of some value
//* check if parameter is String
//*     if string--> return "Error"
//* return (50*value) +6

function problem(x) {
    if (typeof x == "string") {
        return "Error";
    }
    return 50 * x + 6;
}

console.log(problem("chris"));
