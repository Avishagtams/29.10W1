// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

const card = document.querySelector('#card');

const form = document.querySelector('#card-form');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const emailInput = document.querySelector('#email-input');
const bioInput = document.querySelector('#bio-input');
const avatar = document.querySelector('#avatar');
const counter=document.querySelector('.counter');
const bioLeft = document.querySelector('#bio-left');
const color = document.querySelector('#color-select');
const mode = document.querySelector('#theme-btn');
const reset = document.querySelector('#reset-btn');




const cardName = document.querySelector('#card-name');
const cardJob = document.querySelector('#card-job');
const cardEmail = document.querySelector('#card-email');
const cardBio = document.querySelector('#card-bio');

const defaultName = cardName.textContent;
const defaultJob = cardJob.textContent;
const defaultEmail = cardEmail.textContent;
const defaultBio = cardBio.textContent;

//===============T1===============

form.addEventListener("input", function(){
  const nameValue = nameInput.value.trim();
  const jobValue = jobInput.value.trim();
  const emailValue = emailInput.value.trim();
  const bioValue = bioInput.value.trim();
  cardName.textContent = nameValue || defaultName;
  cardJob.textContent = jobValue || defaultJob;
  cardEmail.textContent = emailValue || defaultEmail;
  cardBio.textContent = bioValue || defaultBio;

  //===============T2===============
  if(nameValue){
    avatar.textContent=nameValue[0].toUpperCase();
    }
  else{
    avatar.textContent="?";
    }

  //===============T3===============
  let counterBio=80-bioValue.length;
  bioLeft.textContent= counterBio ;
  counter.classList.toggle("warning",counterBio<=10);
});

//===============T4===============
  color.addEventListener("change", function(){

    let selectedColor = color.value;
    card.style.borderColor = selectedColor;
    avatar.style.backgroundColor = selectedColor;

  });

//===============T5===============

mode.addEventListener("click",function(){
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
    mode.textContent="Light mode";
}
else{
    mode.textContent="Dark mode";

}
});

//===============T6===============
reset.addEventListener("click",function(){
    form.reset();
    const defaultName = cardName.textContent;
    const defaultJob = cardJob.textContent;
    const defaultEmail = cardEmail.textContent;
    const defaultBio = cardBio.textContent;

    cardName.textContent = "Your name";
    cardJob.textContent = "Your job title";
    cardEmail.textContent = "your@email.com";
    cardBio.textContent = "Your bio will appear here.";
    avatar.textContent = "?";
    bioLeft.textContent = "80";
    counter.classList.remove("warning");
    color.value = "#4f46e5";
    card.style.borderColor = "#4f46e5";
    avatar.style.backgroundColor = "#4f46e5";
    



});



























// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//


