function openCategory(genre) {
    // 1. 오버레이(새 화면)를 가져옴
    const overlay = document.getElementById('category-overlay');
    
    // 2. 모든 카테고리 내용을 일단 숨김
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => content.classList.remove('show'));
    
    // 3. 선택한 장르만 보여줌
    const selected = document.getElementById(genre);
    if(selected) {
        selected.classList.add('show');
        
        // 장르별 테마 색상 적용 (배경색을 은은하게 변경)
        const colors = {
            'kpop': '#2a0e26',
            'rnb': '#1a1025',
            'hiphop': '#111',
            'ballad': '#f0f4f8', // 발라드는 밝은 배경
            'trot': '#3a0000',
            'classic': '#1a222e',
            'jazz': '#0f1520',
            'pop': '#201a30'
        };
        
        // 발라드/Pop일 경우 글자색 검정으로 변경 (가독성)
        if(genre === 'ballad' || genre === 'pop') {
            overlay.style.color = '#333';
            document.querySelector('.close-btn').style.borderColor = '#333';
            document.querySelector('.close-btn').style.color = '#333';
        } else {
            overlay.style.color = 'white';
            document.querySelector('.close-btn').style.borderColor = 'white';
            document.querySelector('.close-btn').style.color = 'white';
        }

        overlay.style.backgroundColor = colors[genre];
    }

    // 4. 화면을 아래에서 위로 부드럽게 올림
    overlay.classList.add('active');
}

function goHome() {
    // 오버레이를 다시 아래로 내림
    const overlay = document.getElementById('category-overlay');
    overlay.classList.remove('active');
}