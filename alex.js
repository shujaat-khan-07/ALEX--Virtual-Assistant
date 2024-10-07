let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB";
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("good morning sir")
    } else if(hours>=12 && hours<16 ){
        speak("good afternoon sir")
    }else{
        speak("good evening sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition
recognition.onresult = (event)=>{
    let currentIndex =event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
    
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
 function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir ,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak(" i am a virtual assistant , created by shujaat sir")
    }
    else if (message.includes("open youtube")){
        speak("opening youtube ....")
        window.open("https://youtube.com/","_blank")
    }
    else if (message.includes("open google")){
        speak("opening google ....")
        window.open("https://google.com/","_blank")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook ....")
        window.open("https://facebook.com/","_blank")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram ....")
        window.open("https://instagram.com/","_blank")
    }
    else if (message.includes("open whatsapp")){
        speak("opening whatsapp ....")
        window.open("https://whatsapp.com/","_blank")
    }
    else if (message.includes("open notepad")){
        speak("opening notepad ....")
        window.open("notepad://")
    }
    else if (message.includes("open calculator")){
        speak("opening calculator ....")
        window.open("calculator://")
    }
        else if (message.includes("what is the time")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric" , minute:"numeric"})
            speak(time)
        }
        else if (message.includes("what date is today")){
            let date =new Date().toLocaleString(undefined,{day:"numeric" , month:"short"})
            speak(date)
        }
    else{
       let finalText ="this is what i found on internet regarding" + message.replace("alex","") || message.replace("alex","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=what+is+javascript`, "_blank")
    }
 }