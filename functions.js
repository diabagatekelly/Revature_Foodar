//Zipcode checker
let listArray = [35801, 99501, 85001, 72201, 94203, 90001, 90209, 80201, 06101, 19901, 63116, 20876, 20877, 63118];

 document.getElementById('zip-button').onclick = function zip() {
   let zipcode = parseInt(document.getElementById('zipcode').value);
    let available = listArray.includes(zipcode);
    if(available){
      document.getElementById('message').innerHTML = "We've got your area covered!";
      document.getElementById('message').setAttribute("style", "margin-top: 25px");
      document.getElementById('message2').setAttribute("style", "visibility: visible;");
    } else {
    document.getElementById('message').innerHTML = "Sorry, we haven't expanded to that area yet.";
      document.getElementById('message').setAttribute("style", "margin-top: 25px;");
    }
 }


 //Banner
  setTimeout(() => {
    document.getElementById('close').setAttribute("style", "display: block; padding: 2px; visibility: visible");
   document.getElementById('banner').setAttribute("style", "display: block; padding: 20px; visibility: visible;");
 }, 5000);

 document.getElementById('close').onclick = function close() {
   let close = document.getElementById('close');
   let banner =  document.getElementById('banner');
   banner.setAttribute("style", "visibility: hidden; height: 0px; margin: 0; padding: 0 ");
   close.setAttribute("style", "visibility: hidden; height: 0px; margin: 0; padding: 0 ");
 }

//coupon
document.getElementById('image1').onmouseenter = function popup1() {
  let popCoupon = document.getElementById('coupon1');
  popCoupon.setAttribute("style", "visibility: visible");
  popCoupon.innerHTML = "Save 10%! Coupon code: ABC123";
  document.getElementById('image1').onmouseleave = function removePop1() {
  popCoupon.setAttribute("style", "visibility: collapse");
  }
}

document.getElementById('image2').onmouseenter = function popup2() {
  let popCoupon = document.getElementById('coupon2');
  popCoupon.setAttribute("style", "visibility: visible");
  popCoupon.innerHTML = "Save 10%! Coupon code: DEF456";
  document.getElementById('image2').onmouseleave = function removePop2() {
  popCoupon.setAttribute("style", "visibility: collapse");
  }
}

document.getElementById('image3').onmouseenter = function popup3() {
  let popCoupon = document.getElementById('coupon3');
  popCoupon.setAttribute("style", "visibility: visible");
  popCoupon.innerHTML = "Save 10%! Coupon code: GHI789";
  document.getElementById('image3').onmouseleave = function removePop3() {
  popCoupon.setAttribute("style", "visibility: collapse");
  }
}
