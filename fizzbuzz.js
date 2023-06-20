// This is our main function
function fizzbuzz() {
    let dividends = [
        [3, "Fizz"],
        [13, "Fezz"],
        [5, "Buzz"],
        [7, "Bang"],
        [11, "Bong"],        
        [17, ""]
    ];


    for (let num = 0; num <= 255; num++) {
        let dict = [false, false, false, false, false, false];

        // scanning
        for (let i = 0; i < dividends.length; i++) {
            dict[i] = num % dividends[i][0] == 0; 
        }

        // Bong(11) removes other dividends except Fezz(13) and (17)
        if (dict[4]) {
            dict[0] = false;
            dict[2] = false;
            dict[3] = false;
        }

        let output = "";
        // reverse printing due to (17)
        if (dict[5]) {
            for (let i = dict.length - 1; i >= 0; i--) {
                    if (dict[i]) {
                        output += dividends[i][1]
                }
            }
        }
        // normal printing
        else {
            for (let i = 0; i < dict.length; i++) {
                if (dict[i]) {
                    output += dividends[i][1]
                }
            }
        }

        // print plain number if no dividends match or (17)
        divideCount = dict.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
        if (divideCount == 0 || (divideCount == 1 && dict[5])) {
            output = num;
        }

        console.log(output);

    }
}

// Now, we run the main function:
fizzbuzz();

