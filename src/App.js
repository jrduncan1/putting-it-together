import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

var peopleArray = [
  {'firstName':'Jake', 'lastName':'Duncan', 'age':27, 'hairColor':'bald'},
  {'firstName':'Ricky', 'lastName':'Bobby', 'age':40, 'hairColor':'blonde'}
]

function App() {
  return (
    <div className="App">
      {peopleArray.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      }
    </div>
  );
}

export default App;
