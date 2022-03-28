const tabContainer = document.getElementsByClassName('tab');
const targetContainer = document.getElementsByClassName('target');
 
for (let i = 0; i < tabContainer.length; i++) {
  tabAction(tabContainer[i], i);
}

function tabAction(tabDOM, tabId) {
  tabDOM.addEventListener("click", function(){
    this.classList.toggle('is-active');
    targetContainer[tabId].classList.toggle('is-show');

    for (let i = 0; i < tabContainer.length; i++) {
      if (tabId !== i) {
        if (tabContainer[i].classList.contains('is-active')){
          tabContainer[i].classList.remove('is-active');
        }
        if (targetContainer[i].classList.contains('is-show')){
          targetContainer[i].classList.remove('is-show');
        }
      }
    }
  })
}
