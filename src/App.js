import './App.css';
import Message from './message';

const student = {
    name: 'John',
    age: '18',
    sex: 'male',
};
const teacher = {
    name: 'mike',
    age: '35',
    sex: 'female',
};
const school = {
    name: ' Wuhan school',
    address: 'Wuhan',
}

function App() {
    return (
        <div>
            <Message student={student} teacher={teacher} school={school}/>
        </div>

    );
}

export default App;
