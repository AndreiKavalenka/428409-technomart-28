let feedbackPopup=document.querySelector(".feedback");let feedbackButton=document.querySelector(".feedback-button");let feedbackClose=document.querySelector(".feedback-close");if(feedbackButton!=null&&feedbackClose!=null){feedbackButton.addEventListener("click",function(event){event.preventDefault(event);feedbackPopup.classList.add("show-block")});feedbackClose.addEventListener("click",function(event){event.preventDefault(event);feedbackPopup.classList.remove("show-block")});window.addEventListener("keydown",function(event){if(event.keyCode==27){if(feedbackPopup.classList.contains("show-block")){feedbackPopup.classList.remove("show-block")}}})}let buyItemButtons=document.querySelectorAll(".button-buy"),i;let cartBlock=document.querySelector(".cart-notification");let cartClose=document.querySelector(".cart-notification-close");let cartCancel=document.querySelector(".cart-cancel-btn");for(i=0;i<buyItemButtons.length;++i){buyItemButtons[i].addEventListener("click",function(event){event.preventDefault(event);cartBlock.classList.add("show-block")})}cartClose.addEventListener("click",function(event){event.preventDefault(event);cartBlock.classList.remove("show-block")});cartCancel.addEventListener("click",function(event){event.preventDefault(event);cartBlock.classList.remove("show-block")});window.addEventListener("keydown",function(event){if(event.keyCode==27){if(cartBlock.classList.contains("show-block")){cartBlock.classList.remove("show-block")}}});let serviceLinks=document.querySelectorAll(".service-list a");let serviceBlocks=document.querySelectorAll(".details-block");let j,h,k;for(i=0;i<serviceLinks.length;++i){serviceLinks[i].addEventListener("click",function(event){event.preventDefault(event);for(j=0;j<serviceLinks.length;++j){serviceLinks[j].classList.remove("active-button")}for(h=0;h<serviceLinks.length;++h){if(serviceLinks[h]==this){serviceLinks[h].classList.add("active-button");for(k=0;k<serviceBlocks.length;++k){serviceBlocks[k].classList.remove("details-active")}serviceBlocks[h].classList.add("details-active")}}})}