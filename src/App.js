import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import Headers from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton.js";
import {useState} from 'react';
import { EXAMPLES } from "./data.js";

function App() {

  const [selectedOption, setSelectedOption] = useState()


  const handleClick = (selectedButton)=>{
    console.log(selectedButton + " button was clicked");
    setSelectedOption(selectedButton);
  }


  return (
    <div>
      <Headers reactImage = {reactImage}/>
      <main>
        
        <section id = "core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts
              title = {CORE_CONCEPTS[1].title}
              description = {CORE_CONCEPTS[1].description}
              image = {CORE_CONCEPTS[1].image}

            />
            <CoreConcepts
              title = {CORE_CONCEPTS[2].title}
              description = {CORE_CONCEPTS[2].description}
              image = {CORE_CONCEPTS[2].image}

            />
            <CoreConcepts
              title = {CORE_CONCEPTS[3].title}
              description = {CORE_CONCEPTS[3].description}
              image = {CORE_CONCEPTS[3].image}

            />
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton onSelect={()=> handleClick("components")}>Components</TabButton>
            <TabButton onSelect={()=> handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={()=> handleClick("props")}>Props</TabButton>
            <TabButton onSelect={()=> handleClick("state")}>State</TabButton>
          </menu>
          {!selectedOption && <p>Please select a topic</p>}
          {selectedOption && <div id= "tab-content">
            <h3>{EXAMPLES[selectedOption].title}</h3>
            <p>{EXAMPLES[selectedOption].description}</p>
            <pre>
              <code>{EXAMPLES[selectedOption].code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
