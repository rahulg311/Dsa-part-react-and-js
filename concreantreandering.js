// // तो फिर सवाल आता है कि अगर 1 करोड़ डेटा पर यह फेल हो जाता है, तो useTransition का असली इस्तेमाल कब और कहाँ करना 
// // चाहिए?useTransition वहाँ सबसे बेस्ट काम करता है जहाँ डेटा या कॉम्पोनेंट इतना बड़ा नहीं है कि ब्राउज़र को क्रैश कर दे, लेकिन
// //  इतना भारी ज़रूर है कि वो यूजर इंटरैक्शन में 200ms से 500ms का एक छोटा सा लैग (Stutter) पैदा कर रहा हो।आसान शब्दों में, 
// //  इसका इस्तेमाल नीचे दिए गए 4 सबसे कॉमन सिनेरियो में किया जाता है:1. Tab Switching (भारी डैशबोर्ड या व्यू बदलना)मान लीजिए
// //   आपके ऐप में अलग-अलग टैब्स हैं। टैब-ए नॉर्मल है, लेकिन टैब-बी एक भारी डैशबोर्ड है जिसमें ढेर सारे चार्ट्स, ग्राफ्स और कॉम्प्लेक्स 
// //   टेबल्स हैं।दिक्कत: जब यूजर टैब-बी पर क्लिक करता है, तो स्क्रीन 300ms के लिए फ्रीज हो जाती है, और अगर वो तुरंत वापस टैब-ए 
// //   पर क्लिक करना चाहे, तो नहीं कर पाता।useTransition का रोल: टैब-बी के रेंडर को लो-प्रायोरिटी बना दो। यूजर क्लिक करेगा, स्क्रीन 
// //   फ्रीज नहीं होगी। वो चाहे तो टैब-बी के लोड होने के दौरान ही वापस टैब-ए पर क्लिक कर सकता है (Interruptible)।2. Moderate
  
// //   Search & Filtering (2,000 से 5,000 आइटम्स की लिस्ट)जैसा कि आपने देखा, 1 करोड़ आइटम्स बहुत ज्यादा हैं। लेकिन मान लीजिए 
// //   आपके पास 2,000 से 5,000 प्रोडक्ट्स या एम्प्लॉई की लिस्ट है।दिक्कत: बिना useTransition के जब यूजर सर्च बॉक्स में टाइप करेगा, 
// //   तो हर की-स्ट्रोक (Key-stroke) पर लिस्ट फिल्टर होगी और टाइपिंग अटक-अटक के चलेगी।useTransition का रोल: टाइपिंग स्मूथ 
// //   (High Priority) रहेगी और लिस्ट बैकग्राउंड में फिल्टर होगी (Low Priority)। यहाँ वर्चुअलाइजेशन की जरूरत नहीं है,
// //    सिर्फ useTransition से काम चल जाएगा।3. Suspense और Data Fetching के साथजब आप कोई नया डेटा फेच 
// //    (API Call) करते हैं और React Suspense का इस्तेमाल कर रहे होते हैं:दिक्कत: जैसे ही नया डेटा फेच होता है, पुराना पूरा पेज गायब हो जाता है 
// //    और एक बड़ा सा 'Loading...' स्पिनर आ जाता है, जो यूजर को परेशान करता है।useTransition का रोल: जब तक नया डेटा बैकग्राउंड में फेच 
// //    और रेंडर हो रहा है, तब तक यूजर को पुराना पेज ही दिखता रहेगा (बस वह थोड़ा फेड या ओपेक हो जाएगा)। जैसे ही नया डेटा तैयार होगा, स्क्रीन स्मूथली 
// //    अपडेट हो जाएगी।4. Router Navigation (पेज बदलना)मॉडर्न फ्रेमवर्क्स (जैसे Next.js या React Router v6+) बैकग्राउंड में useTransition का ही
// //     इस्तेमाल करते हैं। जब आप एक पेज से दूसरे पेज पर जाते हैं, तो पुराना पेज तब तक एक्टिव रहता है जब तक अगले पेज का कोड और डेटा पूरी तरह
// //      डाउनलोड नहीं हो जाता। इससे पेज चेंज होते वक्त झटके महसूस नहीं होते।थम्ब रूल (Rule of Thumb)Urgent (तुरंत चाहिए): टाइपिंग (Typing),
// //       क्लिकिंग (Clicking), सेलेक्ट बॉक्स ओपन करना (Dropdown toggling), बटन प्रेस—ये सब बिना लैग के होने चाहिए।Non-Urgent (Transition):
// //        डेटा का लोड होना, लिस्ट का फिल्टर होना, बड़े कंपोनेंट का रेंडर होना,
// //  चार्ट्स का ड्रा होना—इन्हें आप startTransition में डाल सकते हैं।




// इस रेस्टोरेंट वाले एग्जांपल (Heavy Order vs Water Bottle) को React में कोड के जरिए समझते हैं।

// यहाँ हमारा Input Box पानी मांगने वाला कस्टमर है (जिसे तुरंत रिस्पॉन्स चाहिए) और नीचे दिखने वाली 10,000 आइटम्स की भारी लिस्ट हमारा बड़ा फूड ऑर्डर है (जो रेंडर होने में टाइम लेती है)।

// हम यहाँ useTransition हुक का इस्तेमाल करेंगे, जो React को बताता है कि कौन सा काम अर्जेंट है और कौन सा काम बैकग्राउंड में डाला जा सकता है।

// Real-Time React Code
// JavaScript
// import React, { useState, useTransition } from 'react';

// // यह हमारा भारी कॉम्पोनेंट है (Big Food Order)
// // जो 10,000 आइटम्स को लूप करके स्क्रीन को स्लो कर देता है।
// const HeavyList = ({ query }) => {
//   if (!query) return null;

//   const items = Array.from({ length: 10000 }, (_, i) => `Dish #${i} prepared for "${query}"`);

//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default function RestaurantApp() {
//   const [input, setInput] = useState('');         // तुरंत अपडेट होने वाला स्टेट (Water Bottle)
//   const [searchQuery, setSearchQuery] = useState(''); // भारी लिस्ट का स्टेट (Big Food Order)
  
//   // useTransition हुक का इस्तेमाल
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     const value = e.target.value;

//     // STEP 1: इनपुट बॉक्स को तुरंत अपडेट करो (High Priority)
//     // यूजर जैसे ही टाइप करेगा, स्क्रीन पर बिना किसी लैग के दिखेगा।
//     setInput(value);

//     // STEP 2: भारी लिस्ट के अपडेट को 'startTransition' में डाल दो (Low Priority)
//     // React को पता चल जाएगा कि इसे बैकग्राउंड में आराम से रेंडर करना है।
//     startTransition(() => {
//       setSearchQuery(value);
//     });
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       <h2>Chef's Kitchen (Concurrent Mode)</h2>
      
//       {/* पानी की बोतल मांगने वाला इनपुट */}
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Type to order (Fast Interaction)..."
//         style={{ padding: '10px', width: '300px', fontSize: '16px' }}
//       />

//       {/* isPending बताता है कि क्या बैकग्राउंड में भारी काम अभी भी चल रहा है */}
//       {isPending && (
//         <p style={{ color: 'orange', fontWeight: 'bold' }}>
//           ⏳ Chef is preparing the big order in the background...
//         </p>
//       )}

//       {/* भारी लिस्ट (Big Order) */}
//       <div style={{ marginTop: '20px', opacity: isPending ? 0.5 : 1 }}>
//         <HeavyList query={searchQuery} />
//       </div>
//     </div>
//   );
// }
// यह कोड कैसे काम कर रहा है? (Under the Hood)
// Urgent Update (setInput): जैसे ही आप कीबोर्ड पर कोई की दबाते हैं, setInput(value) तुरंत फायर होता है। React इसे High Priority मानता है। इनपुट बॉक्स में टेक्स्ट तुरंत अपडेट हो जाता है—यूज़र को जरा सा भी लैग (Lag) महसूस नहीं होता।

// Transition Update (startTransition): लिस्ट को फिल्टर करने और 10,000 आइटम्स जनरेट करने का काम हमने startTransition के अंदर रखा है। React इसे Low Priority मानकर बैकग्राउंड में डाल देता है (जैसे शेफ बड़े ऑर्डर को साइड में रख देता है)।

// Interruptible Rendering: अगर आप लगातार तेजी से टाइप कर रहे हैं, तो React पुरानी सर्च क्वेरी की रेंडरिंग को बीच में ही रद्द (Abort) कर देता है और आपके लेटेस्ट इनपुट पर काम करना शुरू कर देता है। इससे CPU की ताकत बर्बाद नहीं होती।

// isPending का जादू: जब तक बैकग्राउंड में लिस्ट तैयार हो रही है, तब तक isPending की वैल्यू true रहती है। इसका इस्तेमाल करके हमने स्क्रीन पर एक छोटा सा इंडिकेटर दिखा दिया है, जिससे यूजर को पता रहे कि काम चल रहा है, लेकिन उसकी स्क्रीन फ्रीज नहीं होती।

// क्या आप यह देखना चाहते हैं कि useDeferredValue हुक का इस्तेमाल करके इसी सेम प्रॉब्लम को और आसान तरीके से कैसे सॉल्व किया जा सकता है?

















import { useState, useDeferredValue, memo } from 'react';

// 1. एक भारी कॉम्पोनेंट जो डेटा रेंडर करने में समय लेता है।
// 'memo' का उपयोग करना यहाँ ज़रूरी है ताकि यह केवल 'query' बदलने पर ही रेंडर हो।
const HeavyProductList = memo(({ query }) => {
  if (!query) return null;

  // एक काल्पनिक भारी सूची (10,000 आइटम)
  const products = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Product ${i} for "${query}"`
  }));

  console.log("HeavyList Rendering for:", query);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
});

export default function SearchPage() {
  const [query, setQuery] = useState('');
  
  // 2. 'useDeferredValue' हुक:
  // यह इनपुट (query) को तुरंत अपडेट करता है (High Priority),
  // और भारी सूची के अपडेट को बैकग्राउंड में टाल देता है (Low Priority)।
  const deferredQuery = useDeferredValue(query);

  // 3. 'isStale' चेक:
  // जब तक बैकग्राउंड में सूची अपडेट हो रही है, तब तक उपयोगकर्ता को
  // पुरानी सूची और एक लोडिंग इंडिकेटर दिखाई देगा।
  const isStale = query !== deferredQuery;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Product Search</h1>
      
      {/* उपयोगकर्ता का खोज इनपुट */}
      <input 
        type="text"
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Type to search (responsive)..." 
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      
      {/* 4. 'isStale' का विज़ुअल इंडिकेटर (Loading UI) */}
      {isStale && (
        <p style={{ color: 'orange', fontWeight: 'bold' }}>
          ⏳ List is catching up... (Loading in background)
        </p>
      )}

      {/* 5. भारी सूची कॉम्पोनेंट: */}
      {/* इसे 'deferredQuery' दी गई है, न कि 'query'। */}
      {/* जब सूची स्टेल (Stale) होती है, तो हम इसे अस्पष्ट (faded) दिखाते हैं। */}
      <div style={{ 
        marginTop: '20px', 
        opacity: isStale ? 0.5 : 1, 
        transition: 'opacity 0.2s' 
      }}>
        <HeavyProductList query={deferredQuery} />
      </div>
    </div>
  );
}