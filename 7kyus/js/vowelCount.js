// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach(element => {
        if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
                    vowelsCount+=1;
                }
    });
    return vowelsCount;
}

console.log(getCount('abracadabra'))