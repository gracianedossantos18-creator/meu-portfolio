AOS.init({ duration: 1000 });

        
        function toggleTheme() {
            const body = document.body;
            const btn = document.getElementById('themeBtn');
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                btn.innerText = '🌙';
            } else {
                body.setAttribute('data-theme', 'dark');
                btn.innerText = '☀️';
            }
        }

        
        let currentLang = 'pt';
        function toggleLanguage() {
            const ptElements = document.querySelectorAll('.lang-pt');
            const enElements = document.querySelectorAll('.lang-en');
            const btn = document.getElementById('langBtn');

            if (currentLang === 'pt') {
                ptElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));
                btn.innerText = 'PT';
                currentLang = 'en';
            } else {
                ptElements.forEach(el => el.classList.remove('hidden'));
                enElements.forEach(el => el.classList.add('hidden'));
                btn.innerText = 'EN';
                currentLang = 'pt';
            }
        }