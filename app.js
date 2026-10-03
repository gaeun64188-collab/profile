const express = require('express');
const app = express();
const PORT = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// 메인 페이지 라우터
app.get('/', (req, res) => {
  // 프로필에 들어갈 데이터를 전달합니다.
  const profileData = {
    name: '이가은',
    department: '정보통신공학과',
    introduction: 'Node.js 기반 개인 프로필 웹사이트입니다.',
    skills: ['JavaScript', 'Node.js', 'Express', 'EJS', 'React', 'HTML/CSS']
  };
  
  res.render('index', profileData);
});

app.listen(PORT, () => {
  console.log(`서버가 Running 중입니다: http://localhost:${PORT}`);
});