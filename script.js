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