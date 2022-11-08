window.addEventListener('load', ()=>{

 
  let parserTool = new DOMParser();

  document.querySelector("button#btn").addEventListener("click", (event)=>{
      event.preventDefault();
      let searchVal = document.querySelector("input#searchField").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
      let resultDiv = document.querySelector("div#result");
    
      let cleanUrl = `superheroes.php?query= ${searchVal}`.replace( /"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g,'');

      fetch(cleanUrl, {method : 'GET'})
      .then(resp => resp.text())
      .then(elements => {
          let El1 = document.createElement("h3");
          let EL1txt = document.createTextNode("RESULT");
          El1.appendChild(EL1txt);
          let EL2= document.createElement("hr");
          resultDiv.innerHTML = '';
          resultDiv.innerHTML = elements;
          resultDiv.prepend(El1, EL2);
          
      })
 });

});