const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning, Sir.");
    }

    else if(hr == 12) {
        speak("Good noon, Sir.");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon, Sir.");
    }

    else {
        speak("Good Evening, Sir.");
    }
}

window.addEventListener('load', ()=> {
    wishMe();
    speak("Sir, How Can I assist you today?");
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

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

    speech.text = "I did not understand what you said. Please speak again, Sir.";

    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello, Sir. How can I assist you?";
        speech.text = finalText;
    }

    else if (message.includes('how are you')) {
        const finalText = "I am fine, sir. Tell me, how can I help you?";
        speech.text = finalText;
    }

    else if (message.includes('who are you')) {
        const finalText = "I am a robotic Artificial Intelligence. My name is Assistro.";
        speech.text = finalText;
    }

    else if (message.includes('Tell me about you')) {
        const finalText = "I am a robotic Artificial Intelligence. My name is Assistro.";
        speech.text = finalText;
    }

    else if (message.includes('who created you')) {
        const finalText = "I am created by the team named Make a plan for our future.";
        speech.text = finalText;
    }

    else if (message.includes('yunus')) {       
        const finalText = "Muhammad Yunus is a Bangladeshi economist, entrepreneur, politician, and civil society leader. You can learn more about him on Wikipedia.";
        window.open("https://en.wikipedia.org/wiki/Muhammad_Yunus", "_blank");
        speech.text = finalText;
    }

    else if (message.includes('name')) {
        const finalText = "My name is Assistro.";
        speech.text = finalText;
    }

    else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if (message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening Instagram";
        speech.text = finalText;
    }

    else if (message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening Facebook";
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening YouTube";
        speech.text = finalText;
    }

    else if (message.includes('search') || message.includes('play')) {
        const searchQuery = message.replace("search", "").replace("play", "").trim();
        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
        const finalText = `Playing ${searchQuery} on YouTube.`;
        speech.text = finalText;
    }

    else if (message.includes('news') && message.includes('today')) {
        window.open("https://news.google.com/search?q=Bangladesh", "_blank");
        const finalText = "Here are today's latest news in Bangladesh.";
        speech.text = finalText;
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = `The current time is ${time}`;
        speech.text = finalText;
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = `Today's date is ${date}`;
        speech.text = finalText;
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = `I found some information for "${message}" on Google.`;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
