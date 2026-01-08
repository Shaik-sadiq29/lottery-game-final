const PickNumber = document.getElementById("PickNumber")
const result = document.getElementById("result")
const lotterySheetContainer = document.getElementById("lotterySheetContainer")
const tick = new Audio("tap.wav");
const winningsound= new Audio("gamecompleted.wav")
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

PickNumber.addEventListener("click", function () {
    for (let i=1; i<50; i++){
document.getElementById(i).classList.remove("winningbox")

    }
     result.innerText = "please wait"
     /*  setTimeout(function () {
   
  const randomNumber =  Math.random()*50;
 const UpdatedNumber = Math.floor(randomNumber)
 const gift = gifts[UpdatedNumber -1]
 console.log(gift)
console.log(UpdatedNumber)
result.textContent = `congratrulations you got the number ${UpdatedNumber}, you have won the ${gift}`
document.getElementById(UpdatedNumber).classList.add("winningbox");
    
   }, 5000);*/
 
let secondscount = 0;
const intervalid = setInterval(function () {
    tick.pause();  
tick.currentTime = 0;
       tick.play();
   secondscount = secondscount +1;
  const randombox =  Math.floor(Math.random()*50) +1;
  console.log(randombox)
  for(let i=1; i<=50; i++){
  
   if (i===randombox){
    document.getElementById(i).classList.add("highlightedBox");

   }
else {
    document.getElementById(i).classList.remove("highlightedBox")
}
  }

if (secondscount===5){
   
     const randomNumber =  Math.random()*50;
 const UpdatedNumber = Math.floor(randomNumber) +1;
 console.log(UpdatedNumber)
 const gift = gifts[UpdatedNumber -1];
 console.log(gift)
console.log(UpdatedNumber)
result.textContent = `congratrulations you got the number ${UpdatedNumber}, you have won the ${gift}`
document.getElementById(UpdatedNumber).classList.add("winningbox");
document.getElementById(randombox).classList.remove("highlightedBox");
winningsound.pause()
winningsound.play();

clearInterval(intervalid)

    
    
}
    
},1000);
}) 
  

console.log(gifts);

 gifts.forEach(function (value, i, ) {
  const boxelement = `<div class="box" id=${i + 1}> ${i +1}. ${value} </div> `;
  console.log(boxelement)
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxelement)
})
