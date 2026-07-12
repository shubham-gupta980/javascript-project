// https://github.com/fawazahmed0/exchange-api
// https://api.frankfurter.app/latest?from=USD&to=INR
const URL = "https://api.frankfurter.app/latest?from";
const dd = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".detailed")

// for(code in countryList) {
//     console.log(code, countryList[code]);
// }

for (let select of dd) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name ==="from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if(select.name ==="to" && currCode ==="INR") {
                newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        changeFlag(evt.target);  // target is basically jo bhi hmne update kiya kaha pr change aaya
    });

}

const changeFlag = (element) => {
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
    
}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value;
    // console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value ,toCurr.value);

    const url = `${URL}=${fromCurr.value}&to=${toCurr.value}`;   // =USD&to=INR
    let response = await fetch(url);
    let data = await response.json();
    let rate = data.rates.INR;
    console.log(rate)

    let finalAmt = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
})