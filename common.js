// ============================================
//   スクロールボタン（全ページ共通）
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ボタンをDOMに注入
    const container = document.createElement('div');
    container.id = 'scroll-btns';
    container.innerHTML =
        '<button id="scroll-top-btn" aria-label="ページ上部へ" title="上へ">' +
            '<i class="fas fa-chevron-up"></i>' +
        '</button>' +
        '<button id="scroll-bottom-btn" aria-label="ページ下部へ" title="下へ">' +
            '<i class="fas fa-chevron-down"></i>' +
        '</button>';
    document.body.appendChild(container);

    const topBtn    = document.getElementById('scroll-top-btn');
    const bottomBtn = document.getElementById('scroll-bottom-btn');

    // スクロール位置に応じて表示・非表示を切り替え
    function updateButtons() {
        const scrollY    = window.scrollY;
        const maxScroll  = document.documentElement.scrollHeight - window.innerHeight;

        // 200px 以上スクロールしたら「上へ」を表示
        topBtn.classList.toggle('is-visible', scrollY > 200);
        // ページ下端 150px 以内になったら「下へ」を非表示
        bottomBtn.classList.toggle('is-visible', scrollY < maxScroll - 150);
    }

    window.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons(); // 初期状態

    // 「上へ」クリック → 最上部へスムーズスクロール
    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 「下へ」クリック → 最下部へスムーズスクロール
    bottomBtn.addEventListener('click', function () {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });
});
