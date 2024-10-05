// const btn = document.querySelector('.talk');
// const content = document.querySelector('.content');

// function speak(sentence) {
//     const text_speak = new SpeechSynthesisUtterance(sentence);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     var day = new Date();
//     var hr = day.getHours();

//     if(hr >= 0 && hr < 12) {
//         speak("Good Morning, Sir.");
//     }

//     else if(hr == 12) {
//         speak("Good noon, Sir.");
//     }

//     else if(hr > 12 && hr <= 17) {
//         speak("Good Afternoon, Sir.");
//     }

//     else {
//         speak("Good Evening, Sir.");
//     }
// }

// window.addEventListener('load', ()=> {
//     wishMe();
//     speak("Sir, How Can I assist you today?");
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;
//     content.textContent = transcript;
//     speakThis(transcript.toLowerCase());
// }

// btn.addEventListener('click', ()=> {
//     recognition.start();
// })

// function speakThis(message) {
//     const speech = new SpeechSynthesisUtterance();

//     speech.text = "I did not understand what you said. Please speak again, Sir.";

//     if (message.includes('hey') || message.includes('hello')) {
//         const finalText = "Hello, Sir. How can I assist you?";
//         speech.text = finalText;
//     }

//     else if (message.includes('how are you')) {
//         const finalText = "I am fine, sir. Tell me, how can I help you?";
//         speech.text = finalText;
//     }

//     else if (message.includes('who are you')) {
//         const finalText = "I am a robotic Artificial Intelligence. My name is Assistro.";
//         speech.text = finalText;
//     }

//     else if (message.includes('Tell me about you')) {
//         const finalText = "I am a robotic Artificial Intelligence. My name is Assistro.";
//         speech.text = finalText;
//     }

//     else if (message.includes('who created you')) {
//         const finalText = "I am created by the team named Make a plan for our future.";
//         speech.text = finalText;
//     }

//     else if (message.includes('yunus')) {       
//         const finalText = "Muhammad Yunus is a Bangladeshi economist, entrepreneur, politician, and civil society leader. You can learn more about him on Wikipedia.";
//         window.open("https://en.wikipedia.org/wiki/Muhammad_Yunus", "_blank");
//         speech.text = finalText;
//     }

//     else if (message.includes('name')) {
//         const finalText = "My name is Assistro.";
//         speech.text = finalText;
//     }

//     else if (message.includes('open google')) {
//         window.open("https://google.com", "_blank");
//         const finalText = "Opening Google";
//         speech.text = finalText;
//     }

//     else if (message.includes('open instagram')) {
//         window.open("https://instagram.com", "_blank");
//         const finalText = "Opening Instagram";
//         speech.text = finalText;
//     }

//     else if (message.includes('open facebook')) {
//         window.open("https://facebook.com", "_blank");
//         const finalText = "Opening Facebook";
//         speech.text = finalText;
//     }

//     else if (message.includes('open youtube')) {
//         window.open("https://youtube.com", "_blank");
//         const finalText = "Opening YouTube";
//         speech.text = finalText;
//     }

//     else if (message.includes('search') || message.includes('play')) {
//         const searchQuery = message.replace("search", "").replace("play", "").trim();
//         window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
//         const finalText = `Playing ${searchQuery} on YouTube.`;
//         speech.text = finalText;
//     }

//     else if (message.includes('news') && message.includes('today')) {
//         window.open("https://news.google.com/search?q=Bangladesh", "_blank");
//         const finalText = "Here are today's latest news in Bangladesh.";
//         speech.text = finalText;
//     }

//     else if (message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         const finalText = `The current time is ${time}`;
//         speech.text = finalText;
//     }

//     else if (message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
//         const finalText = `Today's date is ${date}`;
//         speech.text = finalText;
//     }

//     else if (message.includes('calculator')) {
//         window.open('Calculator:///')
//         const finalText = "Opening Calculator";
//         speech.text = finalText;
//     }

//     else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = `I found some information for "${message}" on Google.`;
//         speech.text = finalText;
//     }

//     speech.volume = 1;
//     speech.pitch = 1;
//     speech.rate = 1;

//     window.speechSynthesis.speak(speech);
// }


const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.lang = 'hi-IN';  // Set language to Hindi
    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("सुप्रभात, सर।");
    }

    else if(hr == 12) {
        speak("नमस्कार, सर।");
    }

    else if(hr > 12 && hr <= 17) {
        speak("शुभ अपराह्न, सर।");
    }

    else {
        speak("शुभ संध्या, सर।");
    }
}

window.addEventListener('load', ()=> {
    wishMe();
    speak("सर, आज मैं आपकी किस प्रकार से मदद कर सकता हूँ?");
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'hi-IN';  // Set recognition language to Hindi

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=> {
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'hi-IN';  // Set language to Hindi

    speech.text = "मुझे समझ नहीं आया कि आपने क्या कहा। कृपया फिर से बोलें, सर।";

    // Handle general greetings
    if (message.includes('नमस्ते') || message.includes('हैलो')) {
        const finalText = "नमस्ते, सर। मैं आपकी किस प्रकार से मदद कर सकता हूँ?";
        speech.text = finalText;
    }

    // Handle "How are you?"
    else if (message.includes('कैसे हो')) {
        const finalText = "मैं ठीक हूँ, सर। बताइए, मैं आपकी किस प्रकार से मदद कर सकता हूँ?";
        speech.text = finalText;
    }

    // Handle "Who are you?"
    else if (message.includes('तुम कौन हो')) {
        const finalText = "मैं एक रोबोटिक आर्टिफिशियल इंटेलिजेंस हूँ। मेरा नाम असिस्त्रो है।";
        speech.text = finalText;
    }

    // Handle "Tell me about yourself"
    else if (message.includes('आपके बारे में बताओ')) {
        const finalText = "मैं एक रोबोटिक आर्टिफिशियल इंटेलिजेंस हूँ। मेरा नाम असिस्त्रो है।";
        speech.text = finalText;
    }

    // Handle "Who created you?"
    else if (message.includes('किसने बनाया')) {
        const finalText = "मुझे एक टीम ने बनाया है जिसका नाम है 'Make a plan for our future'.";
        speech.text = finalText;
    }

    // Handle "Open Wikipedia"
    else if (message.includes('विकिपीडिया खोलो')) {
        window.open("https://www.wikipedia.org", "_blank");
        const finalText = "विकिपीडिया खोल रहा हूँ।";
        speech.text = finalText;
    }

    // Handle "Search on Wikipedia"
    else if (message.includes('विकिपीडिया पर खोजो')) {
        const searchQuery = message.replace("विकिपीडिया पर खोजो", "").trim();
        window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`, "_blank");
        const finalText = `विकिपीडिया पर "${searchQuery}" के लिए खोज कर रहा हूँ।`;
        speech.text = finalText;
    }

    // Handle "Open YouTube"
    else if (message.includes('यूट्यूब खोलो')) {
        window.open("https://www.youtube.com", "_blank");
        const finalText = "यूट्यूब खोल रहा हूँ।";
        speech.text = finalText;
    }

    // Handle "Play song on YouTube"
    else if (message.includes('यूट्यूब पर गाना बजाओ') || message.includes('यूट्यूब पर वीडियो चलाओ')) {
        const searchQuery = message.replace("यूट्यूब पर गाना बजाओ", "").replace("यूट्यूब पर वीडियो चलाओ", "").trim();
        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
        const finalText = `${searchQuery} के लिए यूट्यूब पर खोज रहा हूँ।`;
        speech.text = finalText;
    }

    // Handle generic search on Google
    else if (message.includes('गूगल खोलो')) {
        window.open("https://google.com", "_blank");
        const finalText = "गूगल खोल रहा हूँ।";
        speech.text = finalText;
    }

    // Default fallback case for unknown commands
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = `मैंने "${message}" के लिए गूगल पर कुछ जानकारी ढूंढी है।`;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
