// 카테고리 입장 함수
function enterCategory(genre) {
    const genreName = genre.toUpperCase();
    
    // 부드러운 페이지 전환 효과 시뮬레이션
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // 1. 발라드 장르는 실제 HTML 파일로 이동
        if (genre === 'ballad') {
            window.location.href = 'ballad.html';
        } 
        // 2. 다른 장르는 기존의 알림 동작 유지 (개발 중임을 알림)
        else {
            const confirmEnter = confirm(`'${genreName}' 카테고리로 이동합니다.\n(친구들이 여기에 내용을 채우면 됩니다!)`);
            document.body.style.opacity = '1';
            
            if(confirmEnter) {
                console.log(`Navigating to ${genreName} page...`);
                // window.location.href = `${genre}.html`; // 실제 페이지가 완성되면 이 주석을 해제
            }
        }
        
    }, 500);
}

// ... 나머지 함수 (voteMusic, addRequest, startQuiz, window.addEventListener('scroll', ...))는 그대로 유지

// 투표 기능
function voteMusic() {
    alert("소중한 한 표 감사합니다! 🗳️");
}

// 신청곡 기능
function addRequest() {
    const song = prompt("신청하고 싶은 곡명과 가수를 입력해주세요:");
    if (song) {
        alert(`[${song}] 신청이 완료되었습니다! 🎧`);
    }
}

// 퀴즈 기능
function startQuiz() {
    alert("음악 퀴즈가 준비 중입니다! 조금만 기다려주세요. 🧩");
}

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(18, 18, 18, 1)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(18, 18, 18, 0.95)';
        nav.style.boxShadow = 'none';
    }
});