// はりま産学交流会 - JavaScript

// ============================================
// モバイルメニュートグル
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // アニメーション用のクラス切り替え
            const spans = menuToggle.querySelectorAll('span');
            if (isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // メニューリンクをクリックしたらメニューを閉じる
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ============================================
// スムーズスクロール
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // ハッシュのみの場合はスクロールしない
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            // ヘッダーの高さを考慮
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ヘッダーのスクロール効果
// ============================================
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // スクロールが50px以上の場合に影を追加
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0, 61, 124, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// カードのフェードインアニメーション（シンプル版）
// ============================================
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.card, .event-item, .achievement-item, .event-highlight, .menu-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ページ読み込み後に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fadeInOnScroll);
} else {
    fadeInOnScroll();
}
