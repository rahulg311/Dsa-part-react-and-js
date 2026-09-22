const str = "dcccasaa";
let dd = "";

function rep(a) {
    let seen = "";
    for (let i = 0; i <= a.length - 1; i++) {
        let count = 0;
        for (let j = 0; j <= a.length - 1; j++) {
            if (a[j] == a[i]) {
                count++;
            }
        }
        if (count > 1) {
            seen += a[i];
            break;
        }
    }
    return seen;
}

console.log(rep(str)); // Output: "a"





// ek se jada repated  
// const str = "dcccasaa";

function rep(a) {
    let seen = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        // count occurrences of a[i] in string
        for (let j = 0; j < a.length; j++) {
            if (a[j] === a[i]) {
                count++;
            }
        }

        // check if a[i] is already in seen
        let alreadyAdded = false;
        for (let k = 0; k < seen.length; k++) {
            if (seen[k] === a[i]) {
                alreadyAdded = true;
                break;
            }
        }

        if (count > 1 && !alreadyAdded) {
            seen.push(a[i]);
        }
    }
    return seen;
}

console.log(rep(str)); // Output: ["d", "c", "a"]

