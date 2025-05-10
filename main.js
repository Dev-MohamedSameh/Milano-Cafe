// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode' || !savedTheme) {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  // Theme toggle click handler
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      localStorage.setItem('theme', 'light-mode');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  });

  // Language Toggle Functionality
  const langToggle = document.getElementById('lang-toggle');
  const html = document.documentElement;

  // Arabic translations
  const translations = {
    'restaurant-name': 'مقهى مترو',
    'slogan': 'حيث كل نكهة تروي قصة',
    'Drinks': 'المشروبات',
    'Meals': 'الوجبات',
    'Desserts': 'الحلويات',
    'Extras': 'الإضافات',
    'Contact Us': 'اتصل بنا',
    'Refreshing beverages to complement your meal': 'مشروبات منعشة لتكمل وجبتك',
    'Delicious dishes prepared with fresh ingredients': 'أطباق لذيذة محضرة بمكونات طازجة',
    'Sweet treats to end your meal on a high note': 'حلويات لذيذة لإنهاء وجبتك بنغمة عالية',
    'Perfect additions to complement your meal': 'إضافات مثالية لتكملة وجبتك',
    'We\'d love to hear from you': 'نود أن نسمع منك',
    'Hot Latte': 'لاتيه ساخن',
    'Iced Coffee': 'قهوة مثلجة',
    'Mocha': 'موكا',
    'Grilled Chicken Sandwich': 'ساندويتش دجاج مشوي',
    'Beef Burger': 'برجر لحم',
    'Pasta Primavera': 'باستا بريمافيرا',
    'Chocolate Cake': 'كيك شوكولاتة',
    'Pancakes': 'بان كيك',
    'Fruit Tart': 'تارت فواكه',
    'French Fries': 'بطاطس مقلية',
    'Garden Salad': 'سلطة خضار',
    'Garlic Bread': 'خبز بالثوم',
    'Phone': 'الهاتف',
    'Address': 'العنوان',
    'Hours': 'ساعات العمل',
    'Send Message': 'إرسال رسالة',
    'Your Name': 'الاسم',
    'Your Email': 'البريد الإلكتروني',
    'Your Message': 'رسالتك',
    'Explore Menu': 'استكشف القائمة',
    'Popular': 'شائع',
    'Home': 'الرئيسية'
  };

  // Check for saved language preference
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    updateTextContent('ar');
  }

  // Language toggle click handler
  langToggle.addEventListener('click', function() {
    if (html.getAttribute('dir') === 'ltr' || !html.getAttribute('dir')) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      localStorage.setItem('language', 'ar');
      updateTextContent('ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      localStorage.setItem('language', 'en');
      updateTextContent('en');
    }
  });

  // Function to update text content based on language
  function updateTextContent(lang) {
    if (lang === 'ar') {
      // Update restaurant name and slogan
      document.getElementById('restaurant-name').textContent = translations['restaurant-name'];
      document.getElementById('slogan').textContent = translations['slogan'];

      // Update section titles and subtitles
      document.querySelectorAll('.section-header h2').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      document.querySelectorAll('.section-subtitle').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      // Update menu items
      document.querySelectorAll('.menu-item-title').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      // Update navigation links
      document.querySelectorAll('.nav-link').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      // Update buttons and other elements
      document.querySelectorAll('.btn').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      // Update contact section
      document.querySelectorAll('.contact-item h4').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });

      // Update form placeholders
      document.querySelectorAll('input, textarea').forEach(el => {
        const placeholder = el.getAttribute('placeholder');
        if (placeholder && translations[placeholder]) {
          el.setAttribute('placeholder', translations[placeholder]);
        }
      });

      // Update badges
      document.querySelectorAll('.menu-item-badge').forEach(el => {
        const text = el.textContent.trim();
        if (translations[text]) {
          el.textContent = translations[text];
        }
      });
    } else {
      // Reset to English
      document.getElementById('restaurant-name').textContent = 'Metro Café';
      document.getElementById('slogan').textContent = 'Where Every Flavor Tells a Story';

      // Reset all other elements by using their original English text
      document.querySelectorAll('.section-header h2').forEach(el => {
        const arText = el.textContent.trim();
        for (const [enText, arTranslation] of Object.entries(translations)) {
          if (arTranslation === arText) {
            el.textContent = enText;
            break;
          }
        }
      });

      // Similar approach for other elements
      const elementsToReset = [
        '.section-subtitle', '.menu-item-title', '.nav-link',
        '.btn', '.contact-item h4', '.menu-item-badge'
      ];

      elementsToReset.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          const arText = el.textContent.trim();
          for (const [enText, arTranslation] of Object.entries(translations)) {
            if (arTranslation === arText) {
              el.textContent = enText;
              break;
            }
          }
        });
      });

      // Reset form placeholders
      document.querySelectorAll('input, textarea').forEach(el => {
        const placeholder = el.getAttribute('placeholder');
        for (const [enText, arTranslation] of Object.entries(translations)) {
          if (arTranslation === placeholder) {
            el.setAttribute('placeholder', enText);
            break;
          }
        }
      });
    }
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          document.querySelector('.navbar-toggler').click();
        }
      }
    });
  });
});
