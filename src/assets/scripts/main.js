var hotNewsItems = document.querySelectorAll('.hotNews-list__items a');

for (let i = 0; i < hotNewsItems.length; i++) {
  const element = hotNewsItems[i];
  element.addEventListener('click', function(e) {
    e.preventDefault();
  })
}