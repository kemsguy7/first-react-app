import { createRoot } from 'react-dom';
import Pet from "./Pet";


const App = () => {
    <div> 
        <h1> Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese"  />
        <Pet name="Cherry" animal="bird" breed="cockatiel"  />
        <Pet name="Donlna" animal="cat" breed="Agric"  />
    </div>
}; 

const container = document.getElementById('root');
const root = createRoot(container);
root.render((<App />));