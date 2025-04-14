function changeText() {
    let description = document.getElementById('description');
    description.textContent = "The text has been changed!";
    console.log("Text content changed to:", description.textContent);
  }
  
  function changeStyle() {
    let title = document.getElementById('main-title');
    title.style.color = 'blue';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Arial, sans-serif';
    console.log("Style changed for title");
  }
  
  function addElement() {
    let container = document.getElementById('container');
    let newElement = document.createElement('p');
    newElement.textContent = "A new paragraph has been added!";
    newElement.classList.add('dynamic-element');
    container.appendChild(newElement);
    console.log("New element added:", newElement);
  }
  
  function removeElement() {
    let container = document.getElementById('container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
      console.log("Last element removed from container.");
    } else {
      console.log("No elements to remove.");
    }
  }
  
  