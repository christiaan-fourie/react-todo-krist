import { useState } from 'react';
import './App.css';
import './Tailwind.css';

function App() {

  const [value, setValue] = useState('')
  const [oldString, setOldString] = useState('')
  const [outputTrue, setOutputTrue] = useState(false)

  const [operatorSelected, setOperatorSelected] = useState(false)

  // Function To Clear Type Area
  const clear = (e) => {
    setValue('')
  }
  

  const calculate = () => {
    
    // Store Original the string value
    let _val = value

    // Set the old String Value To Original Value
    setOldString(_val)
    console.log(oldString);
    

    // Replace ÷ with / in the live string
    let _live = _val;
    _live = _live.replace(/÷/g, "/");
    _live = _live.replace(/x/g, "*");
    
    // Evaluate and Set Value to Answer
    let answer = eval(_live).toFixed(2)
    
    setValue(answer)

    console.log(answer);
    console.log(oldString);
    let output = oldString + ' = ' + answer
    console.log(output);

    setOldString(output)
  }

  const operatorClick = (e) => {
    if (value !== '') {
      if (!operatorSelected) {
        console.log(operatorSelected);
        let _value = value
  
        // Take Clicked Value
        let _valInput = e.target.value
  
        setValue(_value + _valInput)
        setOperatorSelected(true)
      } else {
        console.log(operatorSelected);
        let _value = value
  
        // Take Clicked Value
        let _valInput = e.target.value
  
        setValue(_value.slice(0, -3) + _valInput)
      }  
    } else {
      console.log('No Value Yet');
    }     
  }

  const numberClick = (e) => {
    setOperatorSelected(false)
    // Get the value in Input Area.
    let _value = value

    // Take Clicked Value
    let _valInput = e.target.value
    console.log(_valInput);

    // Add them together First Input Area the Clicked Value at the end
    const Add = _value + _valInput

    // set the Value To that
    setValue(Add)
  } 

  const operators = [
    {
      id: '#001',
      value: ' + ',
      text: 'plus'      
    },
    {
      id: '#002',
      value: ' - ',
      text: 'minus'
    },
    {
      id: '#003',
      value: ' x ',
      text: 'multiply'
    },
    {
      id: '#004',
      value: ' ÷ ',
      text: 'divide'      
    },
    {
      id: '#005',
      value: ' % ',
      text: 'persentage'      
    },
    {
      id: '#006',
      value: ' (  ) ',
      text: 'persentage'
    }
  ]

  const numbers = [
    {
      id: 1,
      value: 1,
      text: 'one'
    },
    {
      id: 2,
      value: 2,
      text: 'three'
    },
    {
      id: 3,
      value: 3,
      text: 'three'
    },
    {
      id: 4,
      value: 4,
      text: 'four'
    },
    {
      id: 5,
      value: 5,
      text: 'five'
    },
    {
      id: 6,
      value: 6,
      text: 'six'
    },
    {
      id: 7,
      value: 7,
      text: 'seven'
    },
    {
      id: 8,
      value: 8,
      text: 'eight'
    },
    {
      id: 9,
      value: 9,
      text: 'nine'
    },
    {
      id: 0,
      value: 0,
      text: 'zero'
    },
    {
      id: 10,
      value: '.',
      text: 'comma'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1
          className='text-[40px]'
        > 
          Basic Calculator 
        </h1>

        <input 
          readOnly
          className='
            mt-10
            rounded-full
            text-black 
            w-[73vw] 
            text-end 
            pr-[58px]
            text-[35px]
            font-extralight'
          type='text' 
          value={value}>  
        </input>
        <input 
          readOnly
          className='            
            mb-10 mt-2
            bg-[#ffffff62]
            rounded-full
            text-gray-600
            w-[73vw] 
            text-end 
            pr-[28px]
            text-[25px]
            font-extralight'
          type='text' 
          value={oldString}>  
        </input>

        <div className='flex flex-row'>
          <div className='basis-1/2'>
            {numbers.map((num) => (
              <button
                key={num.id}
                onClick={numberClick}
                className='
                  text-blue-500 
                  border-blue-500    
                  rounded-full
                  w-16 h-16
                  border
                  m-1'
                value={num.value}> 
                {num.value} 
              </button>
            ))}
            <button
                onClick={clear}
                onDoubleClick={()=> { setOldString('') }}
                className='
                  text-red-500
                  border-red-500
                  rounded-full
                  w-16 h-16
                  border
                  m-1'
                value='CLR'> 
                CLR
              </button>
          </div>
          <div className='basis-1/3'>
            {operators.map((num) => (
                <button
                  key={num.id}
                  onClick={operatorClick}
                  className='
                  text-blue-500 
                  border-blue-500                   
                    rounded-full
                    w-16 h-16
                    border
                    m-1'
                  value={num.value}> 
                  {num.value} 
                </button>
              ))}
              <button
                  onClick={calculate}
                  className='
                    rounded-full
                  text-green-500
                  border-green-500
                    w-32 h-16
                    border
                    m-1'
                  value='='> 
                  =
                </button>
          </div>
        </div>       

        {/* <a
          className="App-link "
          href="https://iam-krist.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who am I
        </a> */}
      </header>
    </div>
  );
}

export default App;
