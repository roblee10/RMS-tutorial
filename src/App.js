import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

// App.js는 웹사이트 화면에 대한 출력

const customers =[
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961232',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
  'id' : 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이민준',
  'birthday': '990302',
  'gender' : '남자',
  'job' : '전업주부'
  },
  {
    'id' : 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '이순신',
    'birthday': '971211',
    'gender' : '남자',
    'job' : '직장인'
    }
]



function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name ={c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
            />
          )
        })
      }
    </div>
  );
}
export default App;
