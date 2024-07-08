let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

const typedTextElement = document.querySelector('.typed-text');
const text = 'Hi there! Welcome to my website.'; // Replace with your desired text

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedTextElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // Adjust speed here (lower number = faster typing)
  } else {
    setTimeout(() => {
      typedTextElement.style.borderRight = "0px"; // Set border-right to 0px
    }, 2000);
    // First message finished, show second bubble with a customizable delay
    const secondBubble = document.querySelector('.chat-bubble-2');
    setTimeout(() => {
      secondBubble.style.visibility = 'visible'; // Trigger typing animation for second bubble after a delay
    }, 2000);
     // Make second bubble visible
    setTimeout(() => {
      typeWriter2(); // Trigger typing animation for second bubble after a delay
    }, 2000); // Adjust delay (in milliseconds) for a natural pause between messages
  }
}
const chatBubble = document.querySelector('.chat-bubble-4');

function startChatBubbleAnimation() {
  chatBubble.style.opacity = 1;  // Set opacity to 1 for full fade-in
  chatBubble.style.visibility = 'visible'; // Make the element visible
  
  // Ensure animation is removed before starting again (prevents stacking)
  chatBubble.classList.remove('pop-in');  // Remove existing animation class (if any)
  
  // Start the animation (no animation property needed with CSS transition)
  chatBubble.style.animationPlayState = 'running';  // Can be removed if not using an animation fallback
}

const typedTextElement2 = document.querySelector('.typed-text-2');
const text2 = 'Hi there!.'; // Replace with your desired text

let j = 0;

function typeWriter2() {
  if (j < text2.length) {
    typedTextElement2.textContent += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, 80); // Adjust speed here (lower number = faster typing)
  } else {
    setTimeout(() => {
      typedTextElement2.style.borderRight = "0px"; // Set border-right to 0px
    }, 500);
    // First message finished, show second bubble with a customizable delay
    const thirdBubble = document.querySelector('.chat-bubble-3');
    setTimeout(() => {
      thirdBubble.style.visibility = 'visible'; // Trigger typing animation for second bubble after a delay
    }, 1000);
     // Make second bubble visible
    setTimeout(() => {
      typeWriter3(); // Trigger typing animation for second bubble after a delay
    }, 1000); // Adjust delay (in milliseconds) for a natural pause between messages
  }
}


const typedTextElement3 = document.querySelector('.typed-text-3');
const text3 = 'Hi! How can I help you today?'; // Replace with your desired text

let k = 0;
 
function typeWriter3() {
  if (k < text3.length) {
    typedTextElement3.textContent += text3.charAt(k);
    k++;
    setTimeout(typeWriter3, 80);
    setTimeout(() => {
      typedTextElement3.style.borderRight = "0px"; // Set border-right to 0px
    }, 2000); // Adjust speed here (lower number = faster typing)
  } else {
    startChatBubbleAnimation()
  }
}



// Call typeWriter function to initiate animation for the first bubble
typeWriter();


const sendButton = document.getElementById('loginButton');
const popup = document.getElementById('loginPopup');
const closeButton = document.getElementById('closeButton');

sendButton.addEventListener('click', () => {
  popup.style.display = 'block'; // Make the popup visible
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup on close button click
});