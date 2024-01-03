document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate the offset considering the fixed header
    function getOffset(element, offset = 190) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        return elementPosition - headerHeight - offset;
    }

    // Add smooth scroll behavior to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElementId = this.getAttribute('href');
            const targetElement = (targetElementId === '#top') ? document.body : document.querySelector(targetElementId);
            const offset = getOffset(targetElement);

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
var dataset = [" a Fullstack Developer"];
var datasetIndex = 0;
var data;
var pause = 2200;
var addTime = 100;
var removeTime = 150;
var letterIndex = 0;
var currentInterval;

var autoType = document.getElementById("autoType");

function textRotation() {
  if(datasetIndex == dataset.length) {
    datasetIndex = 0;
  };
  
  data = dataset[datasetIndex];
  letterIndex = 0;
  autoType.className = "";
  currentInterval = window.setInterval(addLetter, addTime);
};

function addLetter() {
  autoType.innerHTML += data.charAt(letterIndex);
  letterIndex += 1;
  
  if(letterIndex > data.length) {
    autoType.className = "caretAnimation";
    window.clearInterval(currentInterval);
    window.setTimeout(startRemove, pause);
  };
};

function startRemove() {
  currentInterval = window.setInterval(removeLetter, removeTime);
}

function removeLetter() {
  var currentString = autoType.innerHTML;
  autoType.innerHTML = currentString.slice(0, -1);
  
  if(currentString.length < 1) {
    window.clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  };
};

window.onload = window.setTimeout(textRotation, 500);
});
