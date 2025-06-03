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
errorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const firstNum = document.querySelector('#first-num').value;
    const secondNum = document.querySelector('#second-num').value;
    const operator = document.querySelector('#operator').value;
    const output = document.querySelector('output').textContent;

    switch(btn.textContent) {
      case "Console Log":
        console.log('Form values:', { firstNum, operator, secondNum });
        break;
        
      case "Console Error":
        console.error('Error with values:', firstNum, operator, secondNum);
        break;
        
      case "Console Count":
        console.count('Count');
        break;
        
      case "Console Warn":
        console.warn('Warning about values:', firstNum, operator, secondNum);
        break;
        
      case "Console Assert":
        console.assert(output !== '', 'Output is empty!');
        break;
        
      case "Console Clear":
        console.clear();
        break;
        
      case "Console Dir":
        console.dir(document.querySelector('form'));
        break;
        
      case "Console dirxml":
        console.dirxml(document.querySelector('fieldset'));
        break;
        
      case "Console Group Start":
        console.group('Form Data Group');
        console.log('First Number:', firstNum);
        console.log('Operator:', operator);
        console.log('Second Number:', secondNum);
        break;
        
      case "Console Group End":
        console.groupEnd();
        break;
        
      case "Console Table":
        console.table([
          { Field: 'First Number', Value: firstNum },
          { Field: 'Operator', Value: operator },
          { Field: 'Second Number', Value: secondNum },
          { Field: 'Result', Value: output }
        ]);
        break;
        
      case "Start Timer":
        console.time('Calculation Timer');
        break;
        
      case "End Timer":
        console.timeEnd('Calculation Timer');
        break;
        
      case "Console Trace":
        function traceFunction1() {
          traceFunction2();
        }
        function traceFunction2() {
          console.trace('Trace from button click');
        }
        traceFunction1();
        break;
        
      case "Trigger a Global Error":
        // Left empty as per instructions
        break;
    }
  });
});
