const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#output");



function stockProfitLossHandler(){
   var startingPrice = Number(initialPrice.value);
   var quantityOfStocks = Number(stockQuantity.value);
   var presentPrice = Number(currentPrice.value);
   if(startingPrice && quantityOfStocks && presentPrice){
        if(startingPrice<0 || quantityOfStocks<0 || presentPrice<0){
            message.innerText = "The value can not be negative!";
        }else{
            var floorStocks =  Math.floor(quantityOfStocks);
            if(floorStocks === quantityOfStocks){
                calculateProfitLoss(startingPrice,quantityOfStocks,presentPrice);
            }else{
                message.innerText = "The quantity of stocks can not be decimal value!";
            }
        }
   }else{
        message.innerText = "Please give all the required value!";
   }
}
 function calculateProfitLoss(oldPrice,qty,newPrice){
    if(oldPrice>newPrice){
        let loss = ((oldPrice - newPrice) * qty).toFixed(2);
        let lossPercentage = ((loss / oldPrice) * 100).toFixed(2);
        message.innerText = `Sad news 😢! The loss is ${loss} and the percentage of loss is ${lossPercentage}%`;
    }
    else if(newPrice>oldPrice){
        let profit = ((newPrice - oldPrice) * qty).toFixed(2);
        let profitPercentage = ((profit / oldPrice) * 100).toFixed(2);
        message.innerText = `Good news 🤩! The profit is ${profit} and the percentage of profit is ${profitPercentage}%`;      
    }
    else{
        message.innerText = "ohoh! neither profit nor loss😬";
    }
 }

checkButton.addEventListener("click",stockProfitLossHandler);