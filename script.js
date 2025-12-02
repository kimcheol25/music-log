// 페이지 전환 함수
function showPage(pageId) {
    // 1. 모든 섹션 숨기기
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. 선택한 섹션만 보여주기
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 3. 네비게이션 버튼 색상 변경
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 버튼 맵핑 (home:0, kpop:1, trot:2, jazz:3)
    const buttonMap = { 'home': 0, 'kpop': 1, 'trot': 2, 'jazz': 3 };
    if (buttonMap[pageId] !== undefined) {
        navItems[buttonMap[pageId]].classList.add('active');
    }

    // 4. 스크롤 맨 위로
    window.scrollTo(0, 0);
}

// 재생 버튼 클릭 이벤트 (가짜 기능)
document.addEventListener('DOMContentLoaded', () => {
    const playBtns = document.querySelectorAll('.player-ui');
    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('🎵 음악이 재생됩니다! (실제 구현 필요)');
        });
    });
});