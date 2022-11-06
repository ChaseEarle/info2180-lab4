/**$(document).ready(function() {
  var searchBtn = $('#searchbtn');
  var lst = $('#results');
  

  searchBtn.on('click', function() {
    $.ajax('superheroes.php', {
      method: 'GET'
    }).done(function(response) {
      alert(response);
    }).fail(function() {
      alert('There was a problem with the request.');
    });
  });
}); */
window.addEventListener('load',()=>{
 var btn=document.getElementById("searchbtn");
 var url='superheroes.php';

 btn.addEventListener("click",()=>{
  fetch(url,{
    method:'GET',
    headers:{
      'Conent-Type': "application/json",
    },
  })
  .then(response => response.text())
  .then(text =>alert(text))
  .catch((error =>(console.log("error"))))
 })
})
