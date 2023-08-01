import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import { withStyles } from '@mui/material/styles';

// const styles = theme=>({
//   root:{
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table:{
//     minWidth: 1080
//   }
// })

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
        // const { classes } = this.props;
          return(
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map(c=> {return(< Customer key={c.id}id={c.id}image={c.image}name ={c.name}birthday = {c.birthday}gender = {c.gender}job = {c.job}/>)})}
                </TableBody>
              </Table>
            </Paper>
          )
}
export default (App);
