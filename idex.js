let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
errorBtns.forEach((btn, index) => {
  switch(btn.textContent) {
    case "Console Log":
      btn.addEventListener('click', () => {
        console.log("Logging form data:", {
          firstNum: document.querySelector('#first-num').value,
          secondNum: document.querySelector('#second-num').value,
          operator: document.querySelector('#operator').value
        });
      });
      break;
      
    case "Console Error":
      btn.addEventListener('click', () => {
        console.error("Error: Form values are:", 
          document.querySelector('#first-num').value, 
          document.querySelector('#second-num').value);
      });
      break;
      
    case "Console Count":
      btn.addEventListener('click', () => {
        console.count("Button click count");
      });
      break;
      
    case "Console Warn":
      btn.addEventListener('click', () => {
        console.warn("Warning: Be careful with the calculator!");
      });
      break;
      
    case "Console Assert":
      btn.addEventListener('click', () => {
        const output = document.querySelector('output').textContent;
        console.assert(output !== '', "Assertion: Output is empty");
      });
      break;
      
    case "Console Clear":
      btn.addEventListener('click', () => {
        console.clear();
      });
      break;
      
    case "Console Dir":
      btn.addEventListener('click', () => {
        console.dir(document.querySelector('form'));
      });
      break;
      
    case "Console dirxml":
      btn.addEventListener('click', () => {
        console.dirxml(document.querySelector('fieldset'));
      });
      break;
      
    case "Console Group Start":
      btn.addEventListener('click', () => {
        console.group("Form Details");
        console.log("First number:", document.querySelector('#first-num').value);
        console.log("Operator:", document.querySelector('#operator').value);
      });
      break;
      
    case "Console Group End":
      btn.addEventListener('click', () => {
        console.groupEnd();
      });
      break;
      
    case "Console Table":
      btn.addEventListener('click', () => {
        console.table([
          { field: 'First Number', value: document.querySelector('#first-num').value },
          { field: 'Operator', value: document.querySelector('#operator').value },
          { field: 'Second Number', value: document.querySelector('#second-num').value }
        ]);
      });
      break;
      
    case "Start Timer":
      btn.addEventListener('click', () => {
        console.time("Form Processing");
      });
      break;
      
    case "End Timer":
      btn.addEventListener('click', () => {
        console.timeEnd("Form Processing");
      });
      break;
      
    case "Console Trace":
      btn.addEventListener('click', () => {
        function first() {
          second();
        }
        function second() {
          third();
        }
        function third() {
          console.trace("Trace from button click");
        }
        first();
      });
      break;
      
    case "Trigger a Global Error":
      // Leave this as is
      break;
  }
});
