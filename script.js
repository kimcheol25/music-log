// 스크롤 시 네비게이션바 디자인 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.9)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.7)';
    }
});

// 카테고리 입장 함수
function enterCategory(genre) {
    // 실제로는 각 html 파일로 이동 (예: kpop.html)
    // 친구들이 파일을 만들면 자동으로 연결됩니다.
    location.href = genre + '.html';
}

/* 활동 기능 */
function voteMusic() {
    alert("소중한 한 표 감사합니다! 🏆");
}

function startQuiz() {
    const quizzes = [
        { q: "방탄소년단의 팬클럽 이름은?", a: "아미" },
        { q: "노래 '강남스타일'을 부른 가수는?", a: "싸이" },
        { q: "비틀즈의 멤버 수는?", a: "4" }
    ];
    const randomIdx = Math.floor(Math.random() * quizzes.length);
    const question = quizzes[randomIdx];
    const userAnswer = prompt(`[음악 퀴즈]\n\nQ. ${question.q}`);
    
    if (userAnswer && userAnswer.replace(/\s/g, "") === question.a) {
        alert("🎉 정답입니다!");
    } else if (userAnswer) {
        alert(`❌ 땡! 정답은 '${question.a}' 입니다.`);
    }
}

// 신청곡 게시판 (저장 기능 포함)
const requestList = document.getElementById('request-list');
document.addEventListener('DOMContentLoaded', loadRequests);

function addRequest() {
    const artist = prompt("가수 이름을 입력하세요:");
    if (!artist) return;
    const song = prompt("노래 제목을 입력하세요:");
    if (!song) return;

    addToList(artist, song);
    saveRequest(artist, song);
}

function addToList(artist, song) {
    const li = document.createElement('li');
    li.innerHTML = `<span style="color:#00ff88; font-weight:bold;">${artist}</span> - ${song}`;
    requestList.prepend(li);
}

function saveRequest(artist, song) {
    let requests = JSON.parse(localStorage.getItem('musicRequests')) || [];
    requests.push({ artist, song });
    localStorage.setItem('musicRequests', JSON.stringify(requests));
}

function loadRequests() {
    let requests = JSON.parse(localStorage.getItem('musicRequests')) || [];
    if (requests.length === 0) {
        addToList("NewJeans", "ETA"); // 예시 데이터
    } else {
        requests.forEach(req => addToList(req.artist, req.song));
    }
}