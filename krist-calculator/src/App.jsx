import { useState } from 'react';
import './App.css';
import './Tailwind.css';

function App() {

// ---> Debugger Logger
//  const [logger, setlogger] = useState('')

  // When App Starts Set
    // --> The String
    const [display, setDisplay] = useState('');
    // --> History
    const [history, setHistory] = useState([]);
    // --> Active Button
    const [active, setActive] = useState('none');
    // --> Comma used
    const [commaUsed, setCommaUsed] = useState(false);
    // --> Brackets opened
    const [openBrackets, setOpenBrackets] = useState(false);
    
    // --> Calculate after Equal Pressed
    const calculate = () => {
      if (display !== '') {
        setActive('calculate');
        // --> Evaluation
        let _display = display
        let _string = _display.replace(/÷/g, "/").replace(/x/g, "*");
        let answer = eval(_string);
        
        // --> Display Answer
        setDisplay(answer);
        
        // --> Add To History
        setHistory([
          {
            id: '#10'+(history.length+1),
            equation: _display + ' = ' + answer
          },
          ...history
        ]);

      } else {
        console.log('Nothing To Calculate');
      }      
    }

    // --> Add to Display
    const addToDisplay = (c) => {
      let _display = display;
      setDisplay(_display + c);
    }   

    // --> Opperator Selected
    const addOperator = (o) => {
      if (active === 'number' || active === 'calculate') {
        setActive('operator');
        addToDisplay( ' ' + o + ' ' );
      } else if (active !== 'none' && active === 'operator') {
        let _display = display.slice(0, -3);
        setDisplay(_display + ' ' + o + ' ' );
      } 
    }

    // Input Handler
    const handler = (_character) => {
      switch (_character) {
        case 'CLR': // --> Clear Screen
          setDisplay('');
          setCommaUsed(false);
          setOpenBrackets(false);
          setActive('clear');
          console.log('Clear');
          break;
        case '=':  // --> Calculate String
          calculate();
          setOpenBrackets(false);
          setCommaUsed(false);
          break;
        case '.':  // --> Add a Comma      
          // Is there something in dislay
          if (display === '') {
            setDisplay('0.');
            setCommaUsed(true);
            break;
          }
          // Is Number active
          if (active === 'number') {
            // If the comma hasen't been used
            if (!commaUsed) {
              addToDisplay(_character);
              setCommaUsed(true);
            }
            // Deselct the comma
            break;
          }          
          console.log('comma');
          break;
        case '( )':
          // See if brackets are open
          if (openBrackets) {
            // Print Closing Bracket
            addToDisplay(')');
            setOpenBrackets(false);                    
          // or If Brackets are Closed
          } else {
            // Print Opening Bracket
            if (active === 'number') {
              addToDisplay(' x (');
              setOpenBrackets(true);
            } else {
              addToDisplay('(');
              setOpenBrackets(true);
            }            
          }
          console.log('Brackets');
          break;
        case '+':
          addOperator(_character);
          setCommaUsed(false);
          console.log('Addition');
          break;
        case '-':
          addOperator(_character);
          setCommaUsed(false);
          console.log('Subtraction');
          break;
        case 'x':
          addOperator(_character)
          setCommaUsed(false);
          console.log('Multiplication');
          break;
        case '÷':
          addOperator(_character)
          setCommaUsed(false);
          console.log('Division');
          break;
        case undefined:
          break;
        default:
          if (active !== 'calculate') {
            addToDisplay(_character);
          } else {
            setDisplay(_character);
          }
          setActive('number');
          break;
      }
    }


    // Call Handler when Keyboard gets Input
    const keyboard = (e) => {
      let _character
      switch (e.code) {
        case 'Delete':
          _character = 'CLR';
          break;
        case 'Numpad1':
          _character = '1';
          break;
        case 'Numpad2':
          _character = '2';
          break;
        case 'Numpad3':
          _character = '3';
          break;
        case 'Numpad4':
          _character = '4';
          break;
        case 'Numpad5':
          _character = '5';
          break;
        case 'Numpad6':
          _character = '6';
          break;
        case 'Numpad7':
          _character = '7';
          break;
        case 'Numpad8':
          _character = '8';
          break;
        case 'Numpad9':
          _character = '9';
          break;
        case 'Numpad0':
          _character = '0';
          break;
        case 'NumpadDivide':
          _character = '÷';
          break;
        case 'NumpadMultiply':
          _character = 'x';
          break;
        case 'NumpadEnter':
          _character = '=';
          break;
        case 'NumpadAdd':
          _character = '+';
          break;
        case 'NumpadSubtract':
          _character = '-';
          break;
        case 'NumpadDecimal':
          _character = '.';
          break;    
        default:
          break;
      }
      console.log(e.code);
      handler(_character);
    }

    // Call Handler When a button is clicked
    const clicked = (e) => {
      let _character = e.target.value;
      handler(_character);
    }


  // All The Button
  const buttons = [
    {
      id: '#002',
      display: '+'
    },
    {
      id: '#003',
      display: '-'
    },
    {
      id: '#004',
      display: 'x'
    },
    {
      id: '#005',
      display: '÷'
    },
    {
      id: '#006',
      display: '9'
    },
    {
      id: '#007',
      display: '8'
    },
    {
      id: '#008',
      display: '7'
    },
    {
      id: '#009',
      display: '6'
    },
    {
      id: '#010',
      display: '5'
    },
    {
      id: '#011',
      display: '4'
    },
    {
      id: '#012',
      display: '3'
    },
    {
      id: '#013',
      display: '2'
    },
    {
      id: '#014',
      display: '1'
    },
    {
      id: '#015',
      display: '0'
    },
    {
      id: '#016',
      display: '.'
    },
    {
      id: '#017',
      display: '( )'
    }
  ]

  return (
    <div className="App">
      <header className="Wrapper">
        <h1 className='
          leading-10
          font-extralight
          text-4xl
          my-10'>Basic Calculator
        </h1>
        <input 
          readOnly
          onKeyDown={keyboard}
          value={display}
          type="text"
          className='
            border
            border-blue-900
            text-white
            font-extralight
            rounded-full
            p-2 pr-10
            text-end'/>
        <div 
          className='
            pt-10 
            flex flex-row flex-wrap'>             
          <button 
            onClick={clicked}
            onDoubleClick={()=> {
              setHistory([]);
            }}
            className='
            text-red-500
            border-red-500
              w-1/6
              text-md
              rounded-full
              p-[7px]
              m-[5px]
              border'
            value='CLR'
            key='#001'> CLR
          </button>  
          { buttons.map(b => (
            <button 
              onClick={clicked}
              className='
              text-cyan-200
              border-cyan-200
                w-1/6
                text-md
                rounded-full
                md:p-[7px] 
                m-[5px]
                border'
              value={b.display}
              key={b.key}> {b.display}
            </button>
          ))}
          <button 
            onClick={clicked}
            className='
              w-1/2
              text-green-500
              border-green-500
              text-md
              rounded-full
              p-[7px]
              m-[5px] ml-4
              border'
            value='='
            key='#018'> =
          </button>
        </div>
        <div
          className='
            m-5
            w-1/2'> {(history.length >= 1) && <h4 className='font-thin'>History</h4>} 
            {history.map( h => (
            <p 
              key={h.id}
              type="text"
              className='
              bg-neutral-800
              text-neutral-500
                font-extralight
                text-end
                pr-8 
                my-[2px]'> {h.equation}
            </p>
          ))}
        </div>
      </header>
    </div>
  );
}
export default App;
