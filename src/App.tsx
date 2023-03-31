import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


import {Configuration, OpenAIApi} from "openai";



// const configuration = new Configuration({
//   organization: "org-sPVqSVAGkQgsp05zXCBg3vSQ",
//   apiKey: "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",
// });






function App() {

    const [result, setResult] = useState('')
    const [text, setText] = useState('')

    const request = async () => {

        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: "5 шуток на тему программирования",
                temperature: 0.6,
                max_tokens: 4000,
            },
            {
                timeout: 10000,
                headers: {
                    "Example-Header": "example",
                },
            });


        // const completion = await openai.createCompletion({
        //         model: "text-davinci-003",
        //         prompt: "Tell me about yourself",
        //     },
        //     {
        //         timeout: 10000,
        //         headers: {
        //             "Example-Header": "example",
        //         },
        //     }).then((res: any)=> {
        //     console.log(res.data)})

        function lol() {
            console.log(completion)
            setResult((prev) => prev + completion.data.choices[0].text )

            console.log(completion.data.choices[0].text)
        };
        await lol()
        // const response = await openai.listEngines()
        // console.log(response)
    }

    function goWorkChat(event: React.ChangeEvent<HTMLInputElement>) {
        setText((e) => (event.target.value))
        // if (event.target. === 'Enter') {
        //
        // }
        // request()
    }




    const handleClick = () => {
        request()
    }

  return (
    <div className="App">
      <header className="App-header">
          <input type="text" onChange={goWorkChat}/>
        {/*</p>*/}
          <h3>{text}</h3>
        <a
            onClick={handleClick}
          className="App-link"
          rel="noopener noreferrer"
        >
          Chat
        </a>
          <div>{result}</div>
      </header>
    </div>
  );
}

export default App;
