// Luhn एल्गोरिथ्म, जिसे "मॉड्यूलस 10 एल्गोरिथ्म" भी कहा जाता है, एक साधारण चेकसम सूत्र है जिसका उपयोग विभिन्न पहचान संख्याओं की वैधता को सत्यापित करने के लिए किया जाता है, जैसे कि क्रेडिट कार्ड नंबर। यह एल्गोरिथ्म हांस पीटर लुहन द्वारा विकसित किया गया था और निम्नलिखित चरणों में काम करता है:

// दाईं ओर से बाईं ओर शुरू करें: नंबर के दाईं ओर से बाईं ओर की ओर चलें।
// हर दूसरे अंक को दुगना करें: पहले, तीसरे, पांचवें, आदि (दूसरे, चौथे, छठे, आदि को छोड़कर) अंकों को दुगना करें।
// अगर दुगने किए गए अंक 9 से बड़े हो जाते हैं, तो उनसे 9 घटा दें।
// सभी अंकों का जोड़ निकालें: सभी अंकों को (दुगने किए गए और बिना दुगने किए गए) जोड़ें।
// मॉड्यूलस 10 की जाँच करें: अगर कुल योग 10 से विभाज्य है (अर्थात कुल योग को 10 से भाग देने पर शेषफल 0 आता है), तो नंबर वैध है; अन्यथा, नंबर अवैध है।

function CreditCardValidation(data) {
    // Remove all non-digit characters
    let datas = data.replace(/\D/g, "");

    // Reverse the string
    let newval = "";
    for (let i = datas.length - 1; i >= 0; i--) {
        newval += datas[i];
    }

    // Convert the reversed string to an array of digits and apply the Luhn algorithm
    let sum = newval.split('').map((item, index) => {
        item = parseInt(item);
        if (index % 2 !== 0) {
            item *= 2;
            if (item > 9) {
                item -= 9;
            }
        }
        return item;
    }).reduce((acc, curr) => acc + curr, 0);

    // Return true if the sum is divisible by 10, false otherwise
    return sum % 10 === 0;
}

console.log(CreditCardValidation("4539 1488 0343 6467")); // Example usage
