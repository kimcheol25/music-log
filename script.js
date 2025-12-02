// 스크롤 시 네비게이션 배경 진하게 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// 카테고리 입장 함수
function enterCategory(genre) {
    // 장르별 한글 이름 매핑
    const genreNames = {
        'kpop': 'K-POP',
        'rnb': 'R&B',
        'hiphop': '힙합',
        'ballad': '발라드',
        'trot': '트로트',
        'classic': '클래식',
        'jazz': '재즈',
        'pop': 'POP'
    };

    const name = genreNames[genre] || genre;
    
    // 알림창 띄우기
    const userConfirm = confirm(`'${name}' 페이지로 입장하시겠습니까?\n(팀원들이 브랜치 작업을 수행할 공간입니다.)`);

    if(userConfirm) {
        // 실제로는 여기서 location.href = 'kpop.html'; 등으로 이동
        alert(`${name} 섹션으로 이동 중입니다...`);
    }
}
/* --- 기능 활성화 --- */

// 1. 투표 기능 (간단 알림)
function voteMusic() {
    alert("소중한 한 표 감사합니다! 🏆\n(현재 1위: NewJeans - Hype Boy)");
}

// 2. 음악 퀴즈 기능
function startQuiz() {
    // 퀴즈 데이터 (문제와 정답)
    const quizzes = [
        { q: "방탄소년단의 팬클럽 이름은?", a: "아미" },
        { q: "노래 '강남스타일'을 부른 가수는?", a: "싸이" },
        { q: "3단 고음으로 유명한 아이유의 노래는?", a: "좋은날" },
        { q: "걸그룹 '뉴진스'의 데뷔곡이 아닌 것은? (1.Attention 2.Hype Boy 3.Dynamite)", a: "3" }
    ];

    // 랜덤으로 한 문제 뽑기
    const randomIdx = Math.floor(Math.random() * quizzes.length);
    const question = quizzes[randomIdx];

    // 사용자 입력 받기
    const userAnswer = prompt(`[음악 퀴즈]\n\nQ. ${question.q}`);

    // 정답 확인
    if (userAnswer === null) return; // 취소 누르면 종료
    
    // 띄어쓰기 없애고 비교 (정답률 높이기 위해)
    if (userAnswer.replace(/\s/g, "") === question.a.replace(/\s/g, "")) {
        alert("🎉 정답입니다! 음악 지식이 대단하시네요!");
    } else {
        alert(`❌ 땡! 정답은 '${question.a}' 입니다.`);
    }
}

// 3. 신청곡 게시판 기능 (LocalStorage 사용 - 새로고침해도 유지됨)
const requestList = document.getElementById('request-list');

// 저장된 목록 불러오기 (페이지 로딩 시 실행)
document.addEventListener('DOMContentLoaded', loadRequests);

function addRequest() {
    const artist = prompt("가수 이름을 입력하세요:");
    if (!artist) return; // 취소하면 종료

    const song = prompt("노래 제목을 입력하세요:");
    if (!song) return;

    // 화면에 추가
    addToList(artist, song);

    // 브라우저 저장소에 저장
    saveRequest(artist, song);
}

function addToList(artist, song) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="artist">${artist}</span> - ${song}`;
    requestList.prepend(li); // 최신글이 위로 오게
}

function saveRequest(artist, song) {
    let requests = JSON.parse(localStorage.getItem('musicRequests')) || [];
    requests.push({ artist, song });
    localStorage.setItem('musicRequests', JSON.stringify(requests));
}

function loadRequests() {
    let requests = JSON.parse(localStorage.getItem('musicRequests')) || [];
    // 예시 데이터가 없으면 기본 데이터 하나 추가
    if (requests.length === 0) {
        addToList("NewJeans", "ETA");
        return;
    }
    // 저장된 목록 화면에 뿌리기
    requests.forEach(req => addToList(req.artist, req.song));
}