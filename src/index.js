import { ThreeWindow } from './ThreeWindow';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div style={{ width: '400px', height: '300px' }}>
            <ThreeWindow />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);