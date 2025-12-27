document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function copyCode() {
    const codeText = document.getElementById("scriptCode").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".btn-download");
        const originalText = btn.innerText;
        btn.innerText = "Copied to Clipboard!";
        btn.style.background = "#34a853";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "#10b981";
        }, 2000);
    });
}

console.log("DuoSub SEO-Optimized Help Loaded");
