const chatArray = [
    "That sounds great. I’d be happy with that.",
    "Could you send over some pictures of your dog, please?",
    "Here are a few pictures. She’s a happy girl!",
    "Can you make it?",
    "She looks so happy! The time we discussed works. How long shall I take her out for?"
];

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const walkPrice = document.querySelector('.walk-price')

const chat = document.querySelectorAll('.chat');
let i = 0;
let j = 0;
let currentPharse = [];


function loop(){
    chat[i].innerHTML=currentPharse.join("");
    if(i<chatArray.length){
        if(j<chatArray[i].length){
            currentPharse.push(chatArray[i][j]);
            j++;
        }
        if(j===chatArray[i].length){
            if(i<chatArray.length-1){
                currentPharse.splice(0,currentPharse.length);
                i++;
                if(i===2){
                    img1.style.display = 'flex';
                    img2.style.display = 'flex';
                    img3.style.display = 'flex';
                };
                console.log(i)
                if(i===4){
                   setTimeout(() => {
                    walkPrice.innerHTML+=
                    `
                    <div class="part3-1">
                    <div class="left">
                      <div class="circle"></div>
                      <p>30 minute walk</p>
                    </div>
                    <p>$29</p>
                  </div>
                  <!-- *************** -->
                  <div class="part3-1">
                    <div class="left">
                      <div class="circle"></div>
                      <p>1 hour walk</p>
                    </div>
                    <p>$49</p>
                  </div>
                    `;
                   }, 7000);
                }
                j=0;
            }
        };
        setTimeout(loop, 70);
    };
};

window.onload = loop()














// const filledChat = () =>{
//     console.log(ChatArray[0].charAt(0))
//     chat.forEach((elem,ind)=>{
//         let splitArray =  ChatArray[ind].split('');
//         splitArray.forEach((word)=>{
//          let span = document.createElement('span');
//          span.innerText = word;
//          span.style.opacity = '0';
//          elem.innerHTML+=`${span.outerHTML}`;
//         });
//     });
// };
// filledChat()



// const showChatDiv = async () =>{
//     await filledChat();
//     const chat = document.querySelectorAll('.chat');
//     let chatIndex= -1;
//     let i =0;
//     setInterval(() => {
//         chatIndex++;
//         if(chatIndex>chat.length-1) return;
//         console.log(chatIndex)
//         const child = Array.from(chat[chatIndex].children);
//         setInterval(() => {
//             child[i].style.opacity = '1';
//             // child.forEach((span)=>{
//                 // span.style.opacity='1';
//             // });
//         }, 30);
//     }, 10000);
// }

// showChatDiv();

// Array.from(chat).forEach((elem,ind)=>{
//     const child = Array.from(elem.children);
    
//     Array.from(elem.children).forEach((child)=>{
//         setTimeout(() => {
//             child.style.opacity = '1';
//         }, 1000);
//     });
// });