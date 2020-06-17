function openModal(iframeLink) {
   let isOpening = false;
   let modal = document.createElement('div');
   let iframe = document.createElement('iframe');

   iframe.src = iframeLink;

   modal.classList.add("modal");
   modal.classList.add("animate");
   modal.classList.add("opening");

   let openModalTimeOut = setTimeout(function () {
      modal.classList.remove('opening');
      clearTimeout(openModalTimeOut);
   }, 1000);

   modal.addEventListener('click', function () {
      return onModalBackgroundClicked(isOpening, modal);
   });

   modal.append(iframe);
   document.documentElement.append(modal);

}

function closeModal(isOpening, modal) {
   modal.classList.add('closing');
   let closeModalTimeOut = setTimeout(function () {
      modal.classList.add('closed');
      modal.remove();
      clearTimeout(closeModalTimeOut);
   }, 950)
}

function onModalBackgroundClicked(isOpening, modal) {
   if (!isOpening) {
      closeModal(isOpening, modal);
   } else {
      let closingTimeOut = setTimeout(function () {
         closeModal(isOpening, modal);
         clearTimeout(closingTimeOut);
      }, 1000)
   }
}
