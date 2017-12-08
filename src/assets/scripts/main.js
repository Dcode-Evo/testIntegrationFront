var hotNewsItems = document.querySelectorAll('.hotNews-list__items a');
var modal = document.querySelector('.modal-container');
var modalCloseBtn = document.querySelector('.modal-close');

// EVENTS

for (var i = 0; i < hotNewsItems.length; i++) {
  const element = hotNewsItems[i];
  element.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
    request(this);
  })
}

modalCloseBtn.addEventListener('click', function(e) {
  e.preventDefault();
  closeModal();
})


// FUNCTIONS

function openModal () {
  modal.classList.add('modal-container--active');
  // document.querySelector('body').classList.add('modal-active');
}

function closeModal () {
  modal.classList.remove('modal-container--active');
  // document.querySelector('body').classList.remove('modal-active');
}

function request (el) {
  var link = el.getAttribute('href');

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
      var pageContent = xhr.response.querySelector('#page-content');
      document.querySelector('.modal-content').innerHTML = '';
      document.querySelector('.modal-content').appendChild(pageContent);
    }
  }

  xhr.open('GET', link, true);
  xhr.responseType= "document";
  xhr.send('');
}