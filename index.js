const btnPlus=document.querySelectorAll(".plus");
const btnMinus=document.querySelectorAll(".minus");
const btnlike=document.querySelectorAll(".like");
const btndelete=document.querySelectorAll(".delete");

const chekboxtag=document.getElementsByClassName("check");


for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",increment);
    chekboxtag[i].addEventListener("click",totelprice);
    btnMinus[i].addEventListener("click",decrement);
    btnlike[i].addEventListener("click",wishlist);
    btndelete[i].addEventListener("click",supp);
}

function increment(event){
    var btnplus=event.target;
    var divElt=btnplus.parentElement;
    var quentitytag=divElt.querySelector("p");
    quentityvalue=Number(quentitytag.innerHTML);
    quentityvalue++;
    quentitytag.innerHTML=quentityvalue;

    var trElt=divElt.parentElement.parentElement;
    var unitpricevalue=Number(trElt.querySelector(".unitePrice").innerHTML);
    var pricetag=trElt.querySelector(".price");
    var pricevalue=Number(pricetag.innerHTML);
    pricevalue=quentityvalue*unitpricevalue;
    pricetag.innerHTML=pricevalue;
}

function totelprice(e){
    checkbox=e.target;
    var pricevalue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML);
    var totaltag=document.getElementById("total");
    var totalvalue=Number(totaltag.innerHTML);
    var btnPluss=checkbox.parentElement.parentElement.querySelector(".plus");
    var btnMinus=checkbox.parentElement.parentElement.querySelector(".minus");
    if(checkbox.checked===true){
        totalvalue+=pricevalue;
        btnPluss.setAttribute("disabled",true);
        btnMinus.setAttribute("disabled",true);

    }
    else{
        totalvalue-=pricevalue;
        btnPluss.removeAttribute("disabled");
        btnMinus.removeAttribute("disabled");
    }
    totaltag.innerHTML=totalvalue;


}

function wishlist(event) {

    var btnlike = event.target;


    if(btnlike.style.color==="gray"){
        btnlike.style.color = "red";
    }
    else {
        btnlike.style.color = "gray";
    } 
  }



function supp(event) {
    var btndelete= event.target
    var trElt=btndelete.parentElement.parentElement.parentElement.parentElement
    trElt.remove()
}

  function decrement(event){
    var btnplus=event.target;
    var divElt=btnplus.parentElement;
    var quentitytag=divElt.querySelector("p");
    quentityvalue=Number(quentitytag.innerHTML);
    quentityvalue=quentityvalue-1;
    quentitytag.innerHTML=quentityvalue;

    var trElt=divElt.parentElement.parentElement;
    var unitpricevalue=Number(trElt.querySelector(".unitePrice").innerHTML);
    var pricetag=trElt.querySelector(".price");
    var pricevalue=Number(pricetag.innerHTML);
    pricevalue=quentityvalue*unitpricevalue;
    pricetag.innerHTML=pricevalue;
}

