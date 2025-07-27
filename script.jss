// Fungsi untuk share ke media sosial
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Lihat landing page keren ini!");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const summary = encodeURIComponent("Landing page dengan fitur share ke media sosial");
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Lihat landing page keren ini: ");
    window.open(`https://wa.me/?text=${text}${url}`, '_blank');
}

// Animasi untuk CTA button
document.getElementById('cta-button').addEventListener('mouseover', function() {
    this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
});

document.getElementById('cta-button').addEventListener('mouseout', function() {
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
});

// Efek scroll halus untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi saat scroll
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    features.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
});

// Google Analytics (contoh)
// Ganti UA-XXXXX-Y dengan ID tracking Anda
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXX-Y');
*/