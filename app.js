const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));


app.get('/', (req, res) => {
  const profile = {
    name: '이가은',
    age: 21,
    school: '인하공업전문대학교',
    department: '정보통신공학과',
    location: '인천',
    food: '햄버거',
    hobbies: ['피아노 치기', '게임하기']
  };

  const schedule = [
    { day: '월요일', time: '1교시', subject: '사물인터넷실습' },
    { day: '월요일', time: '6교시', subject: '웹개발실습' },
    { day: '수요일', time: '2교시', subject: '클라우드 컴퓨팅 실습' },
    { day: '목요일', time: '4교시', subject: 'PCB설계실습' },
    { day: '금요일', time: '5교시', subject: 'RF공학실습' },
    { day: '금요일', time: '9교시', subject: '네트워크 보안' }
  ];

  res.render('index', { profile, schedule });
});

app.listen(PORT, () => {
  console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});