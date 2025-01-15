// मोड़ (mode) एक सांख्यिकी माप है जो किसी संख्या श्रृंखला में सबसे अधिक बार प्रकट होने वाली संख्या को दर्शाता है। यदि किसी श्रृंखला में एक से अधिक संख्याएँ सबसे अधिक बार आती हैं, तो वह श्रृंखला बहु-मोडल (multi-modal) कहलाती है।

// जावास्क्रिप्ट में मोड़ संख्या निकालने के लिए एक उदाहरण कोड इस प्रकार हो सकता है:

// javascript
// Copy code
function findMode(arr) {
    let frequency = {};
    let maxFreq = 0;
    let modes = [];

    // Count the frequency of each number in the array
    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }

        // Update the maximum frequency
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    // Find all numbers that have the maximum frequency
    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes;
}

const data = [5, 3, 9, 1, 7, 2, 5, 3, 5];
const mode = findMode(data);
console.log(mode); // Output: [5]