const ChatArray = [
    "That sounds great. I’d be happy with that.",
    "Could you send over some pictures of your dog, please?",
    "Here are a few pictures. She’s a happy girl!",
    "Can you make it?",
    "She looks so happy! The time we discussed works. How long shall I take her out for?"
]




const chat1 = document.querySelector('.chat-1');
const chat = document.querySelectorAll('.chat');
chat1.style.display = 'none';
console.log(chat1);


window.onload=()=>{
    setTimeout(() => {
        chat1.style.display = 'block';
    }, 500);

    chat.forEach((elem,ind)=>{
        console.log(elem,ind);
        elem.innerHTML=ChatArray[ind];
    })
}