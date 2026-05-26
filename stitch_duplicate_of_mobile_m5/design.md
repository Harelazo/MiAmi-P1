<!DOCTYPE html>
<html lang="he" dir="rtl" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>מלון מיאמי אשדוד | מלון בוטיק משפחתי ליד הים ומומחה לשבתות חתן</title>
    
    <!-- Tailwind CSS CDN with custom config -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0f2d4a',      /* Deep Mediterranean Blue */
                        secondary: '#2c4e73',    /* Soft Ocean Blue */
                        sand: '#fbf9f4',         /* Off-white Sand Background */
                        sandDark: '#e5dec9',     /* Warm Sand Accent */
                        gold: '#b48a3d',         /* Elegant Golden-Yellow Accent */
                        lightGray: '#f3f4f6',
                        darkText: '#1f2937'
                    },
                    fontFamily: {
                        sans: ['Assistant', 'sans-serif']
                    }
                }
            }
        }
    </script>
    
    <!-- Google Fonts: Assistant for Hebrew -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Modern subtle transitions and custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #fbf9f4;
        }
        ::-webkit-scrollbar-thumb {
            background: #2c4e73;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #0f2d4a;
        }
        .text-shadow-hero {
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
        }
        .clip-slant {
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        /* Page animation transitions */
        .fade-in-active {
            animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="bg-sand text-darkText font-sans min-h-screen flex flex-col antialiased">
    <!-- Sticky/Fixed Header Area -->
    <header class="sticky top-0 z-40 w-full transition-all duration-300" id="mainHeader">
        <!-- Top fast communication bar -->
        <div class="bg-primary text-white text-xs py-2 px-4 flex justify-between items-center border-b border-secondary/30">
            <div class="flex items-center space-x-4 space-x-reverse">
                <a href="tel:08-8522085" class="hover:text-gold transition flex items-center gap-1.5">
                    <i class="fa-solid fa-phone text-gold text-[10px]"></i>
                    <span class="hidden sm:inline">התקשרו עכשיו: </span><span>08-8522085</span>
                </a>
                <span class="text-white/40">|</span>
                <span class="flex items-center gap-1.5">
                    <i class="fa-solid fa-location-dot text-gold text-[10px]"></i>
                    <span class="hidden xs:inline">מיקום: </span><span>נורדאו 24, אשדוד (סמוך לחוף הים)</span>
                </span>
            </div>
            <div class="flex items-center space-x-4 space-x-reverse">
                <a href="https://wa.me/97288522085" target="_blank" class="hover:text-green-400 transition flex items-center gap-1">
                    <i class="fa-brands fa-whatsapp text-green-400"></i>
                    <span class="hidden md:inline">מענה מהיר בווטסאפ</span>
                </a>
                <span class="text-white/40 hidden md:inline">|</span>
                <span class="hidden md:inline text-white/90">כשרות: כשר למהדרין בהשגחת הרבנות אשדוד</span>
            </div>
        </div>
        <!-- Main Navigation Bar -->
        <nav class="bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <!-- Brand / Logo -->
                <a href="#" onclick="switchPage('home'); return false;" class="flex items-center gap-3 group focus:outline-none">
                    <div class="bg-primary text-white p-2 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                        <i class="fa-solid fa-umbrella-beach text-2xl text-gold"></i>
                    </div>
                    <div>
                        <span class="block text-xl font-extrabold text-primary tracking-wide leading-none">מלון מיאמי</span>
                        <span class="block text-[11px] text-secondary font-medium tracking-widest mt-0.5 uppercase">MIAMI HOTEL ASHDOD</span>
                    </div>
                </a>
                <!-- Desktop Navigation Items -->
                <div class="hidden lg:flex items-center space-x-1 xl:space-x-2 space-x-reverse">
                    <a href="#" onclick="switchPage('home'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-primary hover:text-gold transition active-nav-link" id="nav-home">דף הבית</a>
                    <a href="#" onclick="switchPage('rooms'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-rooms">חדרים ואירוח</a>
                    <a href="#" onclick="switchPage('shabbat'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-shabbat">שבתות חתן ואירועים</a>
                    <a href="#" onclick="switchPage('business'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-business">כנסים ואירועים עסקיים</a>
                    <a href="#" onclick="switchPage('gallery'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-gallery">גלריה</a>
                    <a href="#" onclick="switchPage('about'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-about">אודות המלון</a>
                    <a href="#" onclick="switchPage('contact'); return false;" class="nav-link px-3 py-2 rounded-md text-[15px] font-semibold text-secondary hover:text-gold transition" id="nav-contact">צור קשר</a>
                </div>
                <!-- Fast Booking Inquiry CTA -->
                <div class="hidden sm:flex items-center gap-3">
                    <button onclick="openInquiryModal('כללי')" class="bg-gold hover:bg-gold/90 text-white font-semibold py-2 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        <i class="fa-solid fa-calendar-check ml-1.5"></i>
                        בדיקת זמינות / הצעת מחיר
                    </button>
                </div>
                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-primary hover:bg-lightGray rounded-lg focus:outline-none" aria-label="תפריט">
                    <i class="fa-solid fa-bars text-2xl" id="menuIcon"></i>
                </button>
            </div>
        </nav>
        <!-- Mobile Dropdown Menu -->
        <div id="mobileMenu" class="hidden lg:hidden bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-xl transition-all duration-300">
            <div class="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
                <a href="#" onclick="switchPage('home'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-primary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">דף הבית</a>
                <a href="#" onclick="switchPage('rooms'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">חדרים ואירוח</a>
                <a href="#" onclick="switchPage('shabbat'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">שבתות חתן ואירועים משפחתיים</a>
                <a href="#" onclick="switchPage('business'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">כנסים ואירועים עסקיים</a>
                <a href="#" onclick="switchPage('gallery'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">גלריה</a>
                <a href="#" onclick="switchPage('about'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">אודות המלון</a>
                <a href="#" onclick="switchPage('contact'); toggleMobileMenu(); return false;" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-secondary hover:bg-lightGray border-r-4 border-transparent hover:border-gold">צור קשר</a>
                <div class="pt-4 flex flex-col gap-2">
                    <button onclick="openInquiryModal('כללי'); toggleMobileMenu();" class="w-full bg-gold text-white text-center py-3 rounded-lg font-bold shadow-md">
                        <i class="fa-solid fa-calendar-check ml-1.5"></i> בדיקת זמינות והצעה
                    </button>
                    <a href="tel:08-8522085" class="w-full bg-primary text-white text-center py-3 rounded-lg font-bold shadow-md flex justify-center items-center gap-2">
                        <i class="fa-solid fa-phone"></i> חייגו לשיחה ישירה
                    </a>
                </div>
            </div>
        </div>
    </header>
    <!-- MAIN INTERACTIVE PAGES PORTAL -->
    <main class="flex-grow">
        <div id="page-home" class="page-container fade-in-active">
            <!-- CINEMATIC HERO SECTION -->
            <section class="relative bg-primary min-h-[500px] lg:h-[620px] flex items-center justify-center overflow-hidden clip-slant">
                <!-- Background Image & Gradient overlay -->
                <div class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
                         alt="חוף הים של אשדוד מלון מיאמי" 
                         class="w-full h-full object-cover object-center opacity-70 filter brightness-[0.75]" />
                    <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                </div>
                <!-- Hero Content -->
                <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-8 lg:mt-0">
                    <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
                        <i class="fa-solid fa-star text-gold text-sm animate-pulse"></i>
                        <span class="text-xs sm:text-sm font-semibold tracking-wide">אירוח חם ליד הים • כשר למהדרין</span>
                    </div>
                    
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-shadow-hero leading-tight tracking-wide">
                        מלון באשדוד עם חוויית אירוח משפחתית ליד הים
                    </h1>
                    
                    <p class="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-stone-100 font-light leading-relaxed">
                        חדרים נעימים ומשופצים, אירוח חם, אוכל איכותי ומתחם מושלם לשבתות חתן ואירועים משפחתיים באווירה פסטורלית
                    </p>
                    <!-- CTAs Grid -->
                    <div class="mt-8 flex flex-col xs:flex-row justify-center items-center gap-3.5 max-w-md sm:max-w-none mx-auto">
                        <a href="https://wa.me/97288522085?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%90%D7%99%D7%A8%D7%95%D7%97%20%D7%91%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9E%D7%99%D7%90%D7%9E%D7%99" 
                           target="_blank" 
                           class="w-full xs:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg transition duration-200">
                            <i class="fa-brands fa-whatsapp text-xl"></i>
                            <span>שליחת ווטסאפ ישיר</span>
                        </a>
                        <button onclick="openInquiryModal('שבת חתן')" 
                                class="w-full xs:w-auto bg-gold hover:bg-gold/90 text-white font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition duration-200">
                            השאירו פרטים להצעה
                        </button>
                        <a href="tel:08-8522085" 
                           class="w-full xs:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-200">
                            חייגו: 08-8522085
                        </a>
                    </div>
                </div>
            </section>
            <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-12 sm:-mt-16 relative z-20">
                <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-stone-100">
                    <div class="text-center max-w-3xl mx-auto mb-10">
                        <span class="text-gold font-bold text-sm uppercase tracking-wider block mb-2">ברוכים הבאים</span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-primary">מלון משפחתי באווירה ים תיכונית נינוחה</h2>
                        <div class="h-1 w-20 bg-gold mx-auto mt-4 rounded-full"></div>
                        <p class="text-stone-600 mt-4 leading-relaxed">
                            במלון מיאמי אשדוד, השוכן מרחק דקת הליכה מחוף הים הזהוב, תיהנו משילוב מנצח: שירות אישי ומסור לכל אורח, חדרים חמימים, ארוחות שף עשירות בכשרות מהודרת, ומומחיות מיוחדת בהפקת שבתות חתן ואירועים משפחתיים שהופכים כל מפגש לחגיגה מרגשת.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div class="p-6 bg-sand rounded-xl border border-stone-100 flex flex-col items-center text-center">
                            <div class="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-primary text-xl">
                                <i class="fa-solid fa-umbrella-beach"></i>
                            </div>
                            <h3 class="font-bold text-primary text-lg">פסיעה מחוף הים</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">מיקום פנטסטי במרחק קצר מהחוף. אוויר ים צלול ונוף פסטורלי.</p>
                        </div>
                        <div class="p-6 bg-sand rounded-xl border border-stone-100 flex flex-col items-center text-center">
                            <div class="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-primary text-xl">
                                <i class="fa-solid fa-bed"></i>
                            </div>
                            <h3 class="font-bold text-primary text-lg">חדרים חמימים ומשופצים</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">עיצוב חם, נקי ומזמין. מתאים במיוחד לזוגות, משפחות וקבוצות.</p>
                        </div>
                        <div class="p-6 bg-sand rounded-xl border border-stone-100 flex flex-col items-center text-center">
                            <div class="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-primary text-xl">
                                <i class="fa-solid fa-utensils"></i>
                            </div>
                            <h3 class="font-bold text-primary text-lg">כשרות מהודרת</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">מגוון סעודות גורמה מפוארות בכשרות מהודרת וקפדנית לשקט הנפשי שלכם.</p>
                        </div>
                        <div class="p-6 bg-sand rounded-xl border border-stone-100 flex flex-col items-center text-center">
                            <div class="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-primary text-xl">
                                <i class="fa-solid fa-synagogue"></i>
                            </div>
                            <h3 class="font-bold text-primary text-lg">מומחיות שבת חתן</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">בית כנסת פרטי, אולם סעודות עצמאי, וליווי צמוד מא׳ ועד ת׳.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-16 bg-stone-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <span class="text-gold font-bold text-sm uppercase tracking-wider block mb-2">אירוח ונוחות</span>
                            <h2 class="text-3xl font-extrabold text-primary">החדרים והסוויטות שלנו</h2>
                            <p class="text-stone-600 mt-2 max-w-xl">
                                חדרים נעימים, מוארים ומעוצבים בגוונים חמים המעניקים תחושה ביתית מושלמת במהלך החופשה שלכם.
                            </p>
                        </div>
                        <button onclick="switchPage('rooms')" class="text-secondary font-bold hover:text-gold transition flex items-center gap-1.5 shrink-0">
                            <span>לצפייה בכל החדרים</span>
                            <i class="fa-solid fa-arrow-left text-xs"></i>
                        </button>
                    </div>
                    <!-- Room Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300">
                            <div class="relative h-60 bg-stone-200">
                                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" 
                                     alt="חדר קלאסיק זוגי מלון מיאמי אשדוד" 
                                     class="w-full h-full object-cover" />
                                <span class="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">פופולרי לזוגות</span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-primary">חדר קלאסיק זוגי</h3>
                                <p class="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">
                                    חדר נעים ומזמין המתאים במיוחד לחופשה זוגית רגועה. החדר כולל מיטה זוגית מרווחת, פינת קפה, טלוויזיה חכמה וחדר רחצה מטופח.
                                </p>
                                <div class="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                                    <span><i class="fa-solid fa-user-group ml-1"></i> זוג</span>
                                    <span><i class="fa-solid fa-expand ml-1"></i> 22 מ״ר</span>
                                    <span><i class="fa-solid fa-wifi ml-1"></i> וויפי חינם</span>
                                </div>
                                <button onclick="openInquiryModal('חדר קלאסיק זוגי')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                    פרטים והזמנה
                                </button>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300">
                            <div class="relative h-60 bg-stone-200">
                                <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" 
                                     alt="סוויטה משפחתית מלון מיאמי אשדוד" 
                                     class="w-full h-full object-cover" />
                                <span class="absolute top-4 right-4 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">מבוקש ביותר</span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-primary">סוויטה משפחתית מרווחת</h3>
                                <p class="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">
                                    הבחירה האידיאלית לאירוח של משפחה או שבת חתן. סוויטה הכוללת חדר הורים מופרד, אזור לינה לילדים, פינת ישיבה מרווחת ועיצוב מודרני מואר.
                                </p>
                                <div class="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                                    <span><i class="fa-solid fa-user-group ml-1"></i> עד 4-5 אורחים</span>
                                    <span><i class="fa-solid fa-expand ml-1"></i> 38 מ״ר</span>
                                    <span><i class="fa-solid fa-coffee ml-1"></i> פינת קפה מפנקת</span>
                                </div>
                                <button onclick="openInquiryModal('סוויטה משפחתית מרווחת')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                    פרטים והזמנה
                                </button>
                            </div>
                        </div>
                        <!-- Card 3 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300">
                            <div class="relative h-60 bg-stone-200">
                                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" 
                                     alt="סוויטת פרימיום נוף לים" 
                                     class="w-full h-full object-cover" />
                                <span class="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">פונה לים</span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-primary">סוויטת פרימיום נוף לים</h3>
                                <p class="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">
                                    חוויית אירוח עילאית עם נוף כחול ומשגע לים התיכון. חדרים מעוצבים בסטנדרט גבוה, מרפסת שמש פרטית ואקססוריז פרימיום.
                                </p>
                                <div class="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                                    <span><i class="fa-solid fa-user-group ml-1"></i> זוג + 1</span>
                                    <span><i class="fa-solid fa-water ml-1"></i> נוף פנורמי לים</span>
                                    <span><i class="fa-solid fa-bed ml-1"></i> מיטה משודרגת</span>
                                </div>
                                <button onclick="openInquiryModal('סוויטת פרימיום נוף לים')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                    פרטים והזמנה
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20 bg-primary text-white relative overflow-hidden">
                <div class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" 
                         alt="סעודת שבת חתן חגיגית" 
                         class="w-full h-full object-cover opacity-15 filter grayscale-[30%]" />
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
                </div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <!-- Text Info -->
                        <div class="lg:col-span-7 space-y-6">
                            <span class="text-gold font-bold text-sm tracking-wider uppercase block">המומחיות שלנו</span>
                            <h2 class="text-3xl sm:text-4xl font-extrabold leading-tight">שבת חתן משפחתית ברמה אחרת – הכל במקום אחד</h2>
                            <p class="text-stone-300 text-base sm:text-lg leading-relaxed">
                                אנו גאים להוביל את ענף אירוח שבתות החתן והאירועים המשפחתיים באשדוד. אנו מעניקים למשפחתכם מתחם אירוח הרמוני ושלם, המשלב חדרים משופצים, אולמות אוכל פרטיים, בית כנסת שוקק חיים, ושירות אישי חסר פשרות שמוריד מכם את כל הדאגות.
                            </p>
                            
                            <!-- Key values grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div class="flex items-start gap-3">
                                    <span class="bg-gold/20 text-gold rounded-full p-2 mt-1">
                                        <i class="fa-solid fa-check text-xs"></i>
                                    </span>
                                    <div>
                                        <h4 class="font-bold text-white">בית כנסת פרטי למשפחה</h4>
                                        <p class="text-stone-300 text-sm">תפילות באווירה מרוממת, ספר תורה זמין ונוחות מושלמת.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="bg-gold/20 text-gold rounded-full p-2 mt-1">
                                        <i class="fa-solid fa-check text-xs"></i>
                                    </span>
                                    <div>
                                        <h4 class="font-bold text-white">אולם סעודות עצמאי</h4>
                                        <p class="text-stone-300 text-sm">אולם פרטי מעוצב למשפחה שלכם ללא רעשי רקע של אורחים אחרים.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="bg-gold/20 text-gold rounded-full p-2 mt-1">
                                        <i class="fa-solid fa-check text-xs"></i>
                                    </span>
                                    <div>
                                        <h4 class="font-bold text-white">שף הבית וכשרות מהודרת</h4>
                                        <p class="text-stone-300 text-sm">תפריט עשיר, סלטים טריים, דגים ובשרים משובחים בבישול מסורתי.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="bg-gold/20 text-gold rounded-full p-2 mt-1">
                                        <i class="fa-solid fa-check text-xs"></i>
                                    </span>
                                    <div>
                                        <h4 class="font-bold text-white">ליווי והפקה מאפס</h4>
                                        <p class="text-stone-300 text-sm">מנהל אירועים צמוד שמלווה אתכם מרגע ההזמנה ועד מוצאי שבת.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6 flex flex-wrap gap-4">
                                <button onclick="switchPage('shabbat')" class="bg-gold hover:bg-gold/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
                                    לפרטים המלאים על שבת חתן
                                </button>
                                <button onclick="openInquiryModal('שבת חתן')" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-8 rounded-lg transition duration-200">
                                    בקשו הצעת מחיר
                                </button>
                            </div>
                        </div>
                        <!-- Graphic Card Preview / Testimonial -->
                        <div class="lg:col-span-5 bg-white text-darkText rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                            <div class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                                המלצת המשפחה
                            </div>
                            
                            <div class="flex items-center gap-1 text-gold text-sm mb-4">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-stone-600 italic leading-relaxed text-sm sm:text-base">
                                "חגגנו כאן שבת חתן לבן שלנו וזו הייתה ההחלטה הכי טובה שיכולנו לקחת! האוכל היה מדהים ובשפע, החדרים היו נקיים ומזמינים מאוד, והשירות של כל הצוות גרם לנו להרגיש כמו מלכים. כולם נהנו מהקרבה לים ומהאווירה המשפחתית והחמה. מומלץ בחום!"
                            </p>
                            <div class="mt-6 flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">
                                    מש
                                </div>
                                <div>
                                    <span class="block font-bold text-primary text-sm">משפחת שרביט, ירושלים</span>
                                    <span class="block text-stone-400 text-xs">חגגו שבת חתן באפריל 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="order-2 lg:order-1 relative">
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" 
                                 alt="אולם כנסים ואירועים מלון מיאמי אשדוד" 
                                 class="w-full h-[400px] object-cover rounded-2xl shadow-lg" />
                            <div class="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-2xl hidden md:block shadow-lg max-w-xs">
                                <p class="text-lg font-bold leading-tight">מתחם המדיה והכנסים</p>
                                <p class="text-xs text-stone-100 mt-2">ציוד הקרנה ומולטימדיה מתקדם, סידורי הושבה גמישים ואירוח קולינרי איכותי.</p>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2 space-y-6">
                            <span class="text-gold font-bold text-sm uppercase tracking-wider block">פגישות וכנסים</span>
                            <h2 class="text-3xl font-extrabold text-primary">כנסים, ימי עיון ואירועים עסקיים</h2>
                            <p class="text-stone-600 leading-relaxed">
                                מלון מיאמי אשדוד מציע מענה מושלם גם למגזר העסקי והארגוני. אולמות האירועים וההרצאות שלנו מותאמים לימי עיון, כנסים מקצועיים, הרמת כוסית, סדנאות ואירוח חברות מהארץ ומחו״ל באווירת ים שלווה ומעוררת השראה.
                            </p>
                            
                            <ul class="space-y-3">
                                <li class="flex items-center gap-2.5 text-stone-700">
                                    <i class="fa-solid fa-circle-check text-secondary text-sm"></i>
                                    <span>מערכות שמע, מקרנים ומסכים חדישים</span>
                                </li>
                                <li class="flex items-center gap-2.5 text-stone-700">
                                    <i class="fa-solid fa-circle-check text-secondary text-sm"></i>
                                    <span>תפריטי כיבוד, קופי-בר וארוחות צהריים/ערב מלאות</span>
                                </li>
                                <li class="flex items-center gap-2.5 text-stone-700">
                                    <i class="fa-solid fa-circle-check text-secondary text-sm"></i>
                                    <span>ליווי טכני ומפיק אירועים מנוסה</span>
                                </li>
                            </ul>
                            <div class="pt-4 flex gap-4">
                                <button onclick="switchPage('business')" class="bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                                    לפרטים ואולמות זמינים
                                </button>
                                <button onclick="openInquiryModal('כנס עסקי')" class="text-secondary font-bold hover:text-gold transition">
                                    לתיאום סיור במלון <i class="fa-solid fa-chevron-left text-xs mr-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-16 bg-stone-50 border-t border-b border-stone-200/50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span class="text-gold font-bold text-sm uppercase tracking-wider block mb-2">סיור ויזואלי</span>
                    <h2 class="text-3xl font-extrabold text-primary mb-8">הכירו את מלון מיאמי אשדוד בתמונות</h2>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="relative group overflow-hidden rounded-xl h-48 sm:h-64 bg-stone-200 cursor-pointer" onclick="switchPage('gallery')">
                            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80" alt="לובי מלון מיאמי" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white">
                                <span class="border border-white/50 px-4 py-1.5 rounded-lg text-xs font-semibold">לובי והמלון</span>
                            </div>
                        </div>
                        <div class="relative group overflow-hidden rounded-xl h-48 sm:h-64 bg-stone-200 cursor-pointer" onclick="switchPage('gallery')">
                            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80" alt="חדרים מעוצבים" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white">
                                <span class="border border-white/50 px-4 py-1.5 rounded-lg text-xs font-semibold">חדרים וסוויטות</span>
                            </div>
                        </div>
                        <div class="relative group overflow-hidden rounded-xl h-48 sm:h-64 bg-stone-200 cursor-pointer" onclick="switchPage('gallery')">
                            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" alt="ארוחות חגיגיות" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white">
                                <span class="border border-white/50 px-4 py-1.5 rounded-lg text-xs font-semibold">חוויה קולינרית</span>
                            </div>
                        </div>
                        <div class="relative group overflow-hidden rounded-xl h-48 sm:h-64 bg-stone-200 cursor-pointer" onclick="switchPage('gallery')">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="אווירת חוף הים" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white">
                                <span class="border border-white/50 px-4 py-1.5 rounded-lg text-xs font-semibold">חוף הים והאזור</span>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="switchPage('gallery')" class="mt-8 bg-stone-100 hover:bg-stone-200 text-primary font-bold py-3 px-8 rounded-lg border border-stone-300 transition inline-flex items-center gap-2">
                        <span>לצפייה בגלריה המלאה</span>
                        <i class="fa-solid fa-images"></i>
                    </button>
                </div>
            </section>
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <span class="text-gold font-bold text-sm uppercase tracking-wider block mb-2">חוות דעת של אורחים</span>
                        <h2 class="text-3xl font-extrabold text-primary">אורחים מספרים על החוויה במלון</h2>
                        <div class="h-1 w-16 bg-gold mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Review 1 -->
                        <div class="bg-sand p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div class="flex items-center gap-1 text-gold mb-3 text-sm">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <h4 class="font-bold text-primary mb-2">"שירות מושלם ושבת חתן שכולם מדברים עליה"</h4>
                                <p class="text-stone-600 text-sm leading-relaxed">
                                    עשינו פה שבת חתן משפחתית מורחבת של 80 איש. הטיפול בנו היה יוצא מגדר הרגיל. בית הכנסת היה נוח מאוד, האוכל היה בשפע, מגוון וטעים בטירוף, והחדרים היו פשוט נהדרים.
                                </p>
                            </div>
                            <div class="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                                <span class="font-bold text-stone-700">משפחת אבוחצירא</span>
                                <span>נופש משפחתי</span>
                            </div>
                        </div>
                        <!-- Review 2 -->
                        <div class="bg-sand p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div class="flex items-center gap-1 text-gold mb-3 text-sm">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <h4 class="font-bold text-primary mb-2">"מלון ביתי, חמים ובמיקום מנצח"</h4>
                                <p class="text-stone-600 text-sm leading-relaxed">
                                    הגענו לחופשת סוף שבוע קצרה באשדוד. הופתענו מהקרבה המדהימה לחוף הים. המלון נקי, מתוחזק היטב, הארוחות היו עשירות ומפנקות והצוות אדיב ומאיר פנים בכל רגע.
                                </p>
                            </div>
                            <div class="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                                <span class="font-bold text-stone-700">יובל ומיכל כהן</span>
                                <span>אירוח זוגי</span>
                            </div>
                        </div>
                        <!-- Review 3 -->
                        <div class="bg-sand p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div class="flex items-center gap-1 text-gold mb-3 text-sm">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <h4 class="font-bold text-primary mb-2">"אירוח למופת ברמת כשרות מושלמת"</h4>
                                <p class="text-stone-600 text-sm leading-relaxed">
                                    היה לנו חשוב למצוא מלון ברמת כשרות מהודרת אמיתית עבור המבוגרים במשפחה. מלון מיאמי סיפק לנו את זה בצורה מוחלטת עם אוכל נפלא, הקפדה קדושה ואווירה שבתית משגעת.
                                </p>
                            </div>
                            <div class="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                                <span class="font-bold text-stone-700">יהודה ושירה וייס</span>
                                <span>סוף שבוע קהילתי</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="page-rooms" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-12 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <h1 class="text-3xl sm:text-4xl font-extrabold">החדרים והסוויטות שלנו</h1>
                    <p class="mt-2 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base">
                        מעוצבים באהבה ובחמימות, המעניקים חלל נעים, נקי ומזמין עבור האירוח המשפחתי או הזוגי שלכם ליד הים באשדוד.
                    </p>
                </div>
            </section>
            <!-- Filter Controls -->
            <section class="py-8 px-4 max-w-7xl mx-auto">
                <div class="flex flex-wrap justify-center gap-3 border-b border-stone-200 pb-6" id="roomsFilterContainer">
                    <button onclick="filterRooms('all')" class="room-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition bg-primary text-white" data-filter="all">הכל</button>
                    <button onclick="filterRooms('couple')" class="room-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="couple">מתאים לזוגות</button>
                    <button onclick="filterRooms('family')" class="room-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="family">מתאים למשפחות</button>
                    <button onclick="filterRooms('suite')" class="room-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="suite">סוויטות נוף לים</button>
                </div>
                <!-- Rooms listings grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" id="roomsContainer">
                    <!-- Room Item 1 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="couple">
                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" alt="חדר סטנדרט זוגי" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">חדר קלאסיק זוגי</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                אידיאלי לחופשה זוגית שלווה. החדר כולל ריהוט מודרני, מיטה זוגית אורתופדית, מסך טלוויזיה שטוח, פינת קפה ותאורה נעימה.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לעד 2 מבוגרים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-maximize text-gold w-4"></i>
                                    <span>שטח החדר: 22 מ״ר</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-snowflake text-gold w-4"></i>
                                    <span>מערכת מיזוג אוויר מתקדמת</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('חדר קלאסיק זוגי')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                    <!-- Room Item 2 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="family">
                        <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" alt="סוויטה משפחתית" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">סוויטה משפחתית מרווחת</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                החלל המושלם למשפחה הדורשת מרחב ונוחות. חדר הורים נפרד, פינת ישיבה מרווחת עם ספה נפתחת לילדים וציוד קצה איכותי.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לעד 2 מבוגרים ו-3 ילדים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-maximize text-gold w-4"></i>
                                    <span>שטח החדר: 38 מ״ר</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-tv text-gold w-4"></i>
                                    <span>2 מסכי טלוויזיה חכמים</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('סוויטה משפחתית מרווחת')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                    <!-- Room Item 3 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="suite">
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="סוויטה פרימיום נוף לים" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">סוויטת פרימיום נוף לים</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                סוויטה מפוארת עם מרפסת הפונה ישירות אל הים התיכון. חלונות רחבים המציפים את החדר באור טבעי, חדר רחצה יוקרתי ומכונת קפה איכותית.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לזוג + ילד</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-umbrella-beach text-gold w-4"></i>
                                    <span>מרפסת שמש פרטית מול הים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-mug-hot text-gold w-4"></i>
                                    <span>מכונת אספרסו עם קפסולות</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('סוויטת פרימיום נוף לים')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                    <!-- Room Item 4 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="couple">
                        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="חדר דלקס זוגי" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">חדר דלקס משודרג</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                עיצוב חם עם שדרוג בריהוט ובאבזור. פינת ישיבה קטנה, חלון גדול המאפשר כניסת אוויר ים צלול וערכת אירוח מפנקת בהגעה.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לעד 2 מבוגרים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-maximize text-gold w-4"></i>
                                    <span>שטח החדר: 26 מ״ר</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-wine-glass text-gold w-4"></i>
                                    <span>מארז שוקולד ובקבוק יין בהגעה</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('חדר דלקס משודרג')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                    <!-- Room Item 5 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="family">
                        <img src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80" alt="חדר משפחתי קלאסי" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">חדר משפחה קלאסי</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                פתרון נהדר וחסכוני למשפחות מטיילות או לאורחי שבת חתן. החדר כולל מיטה זוגית ומיטת קומתיים יציבה ובטיחותית לילדים, ומרחב פונקציונלי.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לעד 2 מבוגרים ו-2 ילדים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-maximize text-gold w-4"></i>
                                    <span>שטח החדר: 30 מ״ר</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-box text-gold w-4"></i>
                                    <span>כספת אישית ומקרר קטן</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('חדר משפחה קלאסי')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                    <!-- Room Item 6 -->
                    <div class="room-card bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100 hover:shadow-xl transition duration-300" data-category="suite">
                        <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" alt="סוויטה נשיאותית" class="w-full h-56 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-extrabold text-primary">הסוויטה הנשיאותית</h3>
                            <p class="text-stone-500 text-sm mt-2 leading-relaxed">
                                פאר ונוחות מקסימלית על קו המים. סלון אירוח פנורמי מרהיב, מטבחון מאובזר, ג׳קוזי מפנק הפונה אל מול הים, ואירוח ברמת VIP.
                            </p>
                            <div class="mt-4 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-user-group text-gold w-4"></i>
                                    <span>מתאים לזוג או זוג + 2</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-hot-tub-person text-gold w-4"></i>
                                    <span>אמבט ג'קוזי מרווח מול הים</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-stone-600">
                                    <i class="fa-solid fa-bell text-gold w-4"></i>
                                    <span>שירותי חדרים וארוחות VIP</span>
                                </div>
                            </div>
                            <button onclick="openInquiryModal('הסוויטה הנשיאותית')" class="w-full mt-6 bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition text-sm">
                                פרטים והצעת מחיר
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="page-shabbat" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-14 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <span class="text-gold font-bold text-sm uppercase tracking-wider block mb-2">אירוח משפחתי מושלם</span>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">שבתות חתן ואירועים משפחתיים</h1>
                    <p class="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        השבת שלכם, השקט שלכם והחוויה שתישאר בלב לתמיד. הפקה חלקה, אוכל גורמה כשר למהדרין, ואווירה שבתית מרוממת מול הים באשדוד.
                    </p>
                </div>
            </section>
            <!-- Detailed description & core advantages -->
            <section class="py-16 px-4 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-primary">איך נראית שבת חתן חלומית אצלנו?</h2>
                        <p class="text-stone-600 leading-relaxed">
                            אנו מבינים את המשמעות העמוקה של אירוע משפחתי משמעותי כמו שבת חתן, שבת בר מצווה או מפגש משפחתי מורחב. המטרה שלנו היא לאפשר לכם להגיע כאורחים אמיתיים – ללא דאגות, ללא לוגיסטיקה מתישה וללא מתח. צוות המלון המנוסה דואג לכל שלב ושלב בקפידה יתרה.
                        </p>
                        <!-- Timeline steps -->
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                                <div>
                                    <h4 class="font-bold text-primary">קבלת פנים חגיגית (יום שישי)</h4>
                                    <p class="text-stone-500 text-sm">עם ההגעה למלון תיהנו מקבלת פנים עשירה עם שתייה קלה וחמה, מאפים מתוקים וסלטים קלים ליד הלובי, המרגיעה אתכם לקראת כניסת השבת.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                                <div>
                                    <h4 class="font-bold text-primary">תפילת ערבית וסעודת ליל שבת</h4>
                                    <p class="text-stone-500 text-sm">תפילת שבת חגיגית בבית הכנסת הפרטי שהועמד לרשותכם. לאחר מכן, תעברו לאולם הסעודות הפרטי שלכם לחוויה קולינרית עשירה עם מנות שף ביתיות ויוצאות דופן.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                                <div>
                                    <h4 class="font-bold text-primary">שבת בבוקר – קידושא רבא וסעודת יום</h4>
                                    <p class="text-stone-500 text-sm">לאחר עליית החתן לתורה וזריקת הסוכריות המסורתית בבית הכנסת, תיהנו מקידוש מפנק ועשיר עם קוגל, הרינג ומשקאות, שיעביר אתכם היישר לסעודת יום השבת השנייה.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Interactive Shabbat Budget/Guest Calculator -->
                    <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-100">
                        <h3 class="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-calculator text-gold"></i>
                            מחשבון הערכה מהיר לשבת חתן
                        </h3>
                        <p class="text-xs text-stone-500 mb-6">תכננו את אירוע השבת שלכם וקבלו אומדן ראשוני מיידי.</p>
                        
                        <div class="space-y-4">
                            <!-- Slider 1: Guests -->
                            <div>
                                <label class="block text-sm font-semibold text-stone-700 mb-1 flex justify-between">
                                    <span>כמות אורחים משוערת:</span>
                                    <span class="text-gold font-bold" id="calc-guests-val">60 איש</span>
                                </label>
                                <input type="range" min="30" max="150" value="60" step="5" class="w-full accent-gold cursor-pointer" id="calc-guests" oninput="updateCalculator()">
                            </div>
                            <!-- Slider 2: Rooms -->
                            <div>
                                <label class="block text-sm font-semibold text-stone-700 mb-1 flex justify-between">
                                    <span>מספר חדרים נדרש:</span>
                                    <span class="text-gold font-bold" id="calc-rooms-val">20 חדרים</span>
                                </label>
                                <input type="range" min="10" max="50" value="20" step="1" class="w-full accent-gold cursor-pointer" id="calc-rooms" oninput="updateCalculator()">
                            </div>
                            <!-- Choice: Food Tier -->
                            <div>
                                <label class="block text-sm font-semibold text-stone-700 mb-1.5">תפריט קולינרי ואירוח:</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <button onclick="setMenuTier('standard')" id="menu-tier-standard" class="menu-tier-btn py-2 px-3 rounded-lg border text-xs font-bold text-center transition border-gold bg-gold/10 text-primary">קלאסיק פרימיום</button>
                                    <button onclick="setMenuTier('premium')" id="menu-tier-premium" class="menu-tier-btn py-2 px-3 rounded-lg border text-xs font-bold text-center transition border-stone-200 text-stone-600">VIP רויאל גורמה</button>
                                </div>
                            </div>
                            <!-- Custom package includes feedback -->
                            <div class="bg-sand p-4 rounded-xl text-xs space-y-1.5 text-stone-600 border border-stone-200/50">
                                <p class="font-bold text-primary mb-1">החבילה שלך תכלול אוטומטית:</p>
                                <p><i class="fa-solid fa-check text-green-600 ml-1"></i> בית כנסת פרטי למשפחה</p>
                                <p><i class="fa-solid fa-check text-green-600 ml-1"></i> אולם אוכל עצמאי ובלעדי לכם</p>
                                <p><i class="fa-solid fa-check text-green-600 ml-1"></i> קבלת פנים ביום שישי + קידושא רבא בשבת</p>
                            </div>
                            <!-- Estimation Display -->
                            <div class="pt-4 border-t border-stone-100 flex justify-between items-center">
                                <div>
                                    <span class="block text-xs text-stone-500">הערכת מחיר משוערת לחבילה:</span>
                                    <span class="text-2xl font-extrabold text-primary" id="calc-total-est">₪34,000</span>
                                </div>
                                <button onclick="openInquiryWithParams()" class="bg-gold hover:bg-gold/90 text-white font-bold py-2.5 px-4 rounded-lg text-xs shadow transition">
                                    שמירת הצעה ונציג יחזור אלייך
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-14 bg-stone-100 border-t border-stone-200/50">
                <div class="max-w-4xl mx-auto px-4">
                    <h3 class="text-2xl font-extrabold text-primary text-center mb-8">שאלות נפוצות על שבתות חתן</h3>
                    
                    <div class="space-y-4">
                        <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                            <button onclick="toggleAccordion(1)" class="w-full text-right p-5 font-bold text-primary flex justify-between items-center hover:bg-stone-50/50 transition">
                                <span>מהי רמת הכשרות במלון מיאמי אשדוד?</span>
                                <i class="fa-solid fa-chevron-down text-stone-400 text-xs transition-transform duration-300" id="acc-icon-1"></i>
                            </button>
                            <div class="hidden p-5 pt-0 border-t border-stone-100 text-stone-600 text-sm leading-relaxed" id="acc-content-1">
                                המלון פועל בכשרות מהודרת וקפדנית ביותר תחת השגחת הרבנות אשדוד, עם ליווי שוטף של משגיח כשרות מוסמך במקום. אנו מציעים מוצרים בכשרויות מובחרות ומקפידים על כל כללי הבישול והשבת כדת וכדין.
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                            <button onclick="toggleAccordion(2)" class="w-full text-right p-5 font-bold text-primary flex justify-between items-center hover:bg-stone-50/50 transition">
                                <span>האם אולם האוכל ובית הכנסת אכן פרטיים רק עבור המשפחה שלנו?</span>
                                <i class="fa-solid fa-chevron-down text-stone-400 text-xs transition-transform duration-300" id="acc-icon-2"></i>
                            </button>
                            <div class="hidden p-5 pt-0 border-t border-stone-100 text-stone-600 text-sm leading-relaxed" id="acc-content-2">
                                בהחלט! בהזמנת שבת חתן משפחתית (החל ממינימום אורחים המוגדר מראש), אנו מעמידים לרשותכם אולם סעודות פרטי לחלוטין ומתחם בית כנסת נפרד למשפחה כדי לשמור על האווירה המלכדת, הפרטיות והאינטימיות שלכם.
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                            <button onclick="toggleAccordion(3)" class="w-full text-right p-5 font-bold text-primary flex justify-between items-center hover:bg-stone-50/50 transition">
                                <span>מה קורה עם חניה לאורחים המגיעים ביום שישי?</span>
                                <i class="fa-solid fa-chevron-down text-stone-400 text-xs transition-transform duration-300" id="acc-icon-3"></i>
                            </button>
                            <div class="hidden p-5 pt-0 border-t border-stone-100 text-stone-600 text-sm leading-relaxed" id="acc-content-3">
                                סמוך למלון ובסביבתו הקרובה ישנם מגרשי חניה ציבוריים מרווחים (רבים מהם ללא עלות), המאפשרים הגעה נוחה וגישה מהירה מאוד למלון לכלל האורחים המגיעים ברכב פרטי לפני כניסת השבת.
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                            <button onclick="toggleAccordion(4)" class="w-full text-right p-5 font-bold text-primary flex justify-between items-center hover:bg-stone-50/50 transition">
                                <span>האם ניתן לערוך במלון גם אירועים ללא לינה?</span>
                                <i class="fa-solid fa-chevron-down text-stone-400 text-xs transition-transform duration-300" id="acc-icon-4"></i>
                            </button>
                            <div class="hidden p-5 pt-0 border-t border-stone-100 text-stone-600 text-sm leading-relaxed" id="acc-content-4">
                                כן, בהחלט. במהלך ימי החול (ראשון עד חמישי) אנו מארחים באולמות שלנו מגוון אירועים משפחתיים: בריתות, בר/בת מצווה, ימי הולדת עגולים וכן כנסים עסקיים ומפגשי חברות ללא כל צורך בהזמנת לינה במלון.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="page-business" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-12 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <h1 class="text-3xl sm:text-4xl font-extrabold">כנסים ואירועים עסקיים</h1>
                    <p class="mt-2 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base">
                        מתחמי הרצאות מעוצבים, ימי עיון, אירועי חברה והרמת כוסית באווירה ים תיכונית משכרת עם כל הכלים להצלחה.
                    </p>
                </div>
            </section>
            <!-- Detailed description -->
            <section class="py-16 px-4 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <!-- Left Images -->
                    <div class="lg:col-span-6 grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" alt="אולם מליאה" class="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md" />
                        <img src="https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=600&q=80" alt="שולחנות ערוכים" class="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md mt-6" />
                    </div>
                    <!-- Right Info & Specifications -->
                    <div class="lg:col-span-6 space-y-6">
                        <span class="text-gold font-bold text-sm tracking-wider uppercase block">חללי האירועים שלנו</span>
                        <h2 class="text-3xl font-extrabold text-primary">מקצועיות פוגשת אווירה מנצחת</h2>
                        <p class="text-stone-600 leading-relaxed">
                            מלון מיאמי אשדוד מספק מגוון פתרונות לכנסים ואירועים בגדלים שונים. השילוב שבין מיקום נוח ופסטורלי באשדוד סמוך לחוף לבין שירות אירוח קולינרי איכותי, מעניק ערך מוסף לכל כנס מקצועי, הרצאה, השקת מוצר או אירוע חברה קהילתי.
                        </p>
                        <div class="space-y-4 pt-2">
                            <div class="border-b border-stone-200 pb-3 flex justify-between items-center">
                                <span class="font-bold text-primary">אולם הים התיכון (מליאה מרכזית)</span>
                                <span class="text-xs bg-gold/15 text-gold font-bold px-3 py-1 rounded-full">עד 150 משתתפים</span>
                            </div>
                            <div class="border-b border-stone-200 pb-3 flex justify-between items-center">
                                <span class="font-bold text-primary">אולם פנורמה (הרצאות וסדנאות)</span>
                                <span class="text-xs bg-gold/15 text-gold font-bold px-3 py-1 rounded-full">עד 80 משתתפים</span>
                            </div>
                            <div class="border-b border-stone-200 pb-3 flex justify-between items-center">
                                <span class="font-bold text-primary">חדר ישיבות פרימיום VIP</span>
                                <span class="text-xs bg-gold/15 text-gold font-bold px-3 py-1 rounded-full">עד 20 משתתפים</span>
                            </div>
                        </div>
                        <div class="pt-4">
                            <button onclick="openInquiryModal('כנס עסקי / הרצאה')" class="bg-gold hover:bg-gold/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
                                בקשו הצעה מותאמת אישית
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="page-gallery" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-12 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <h1 class="text-3xl sm:text-4xl font-extrabold">גלריית תמונות</h1>
                    <p class="mt-2 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base">
                        מבט חטוף אל תוך החללים, החדרים, אולמות האוכל, ופינות החמד המגוונות של מלון מיאמי אשדוד.
                    </p>
                </div>
            </section>
            <!-- Gallery Grid with Filter -->
            <section class="py-12 px-4 max-w-7xl mx-auto">
                <div class="flex flex-wrap justify-center gap-3 border-b border-stone-200 pb-6 mb-8" id="galleryFilterContainer">
                    <button onclick="filterGallery('all')" class="gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition bg-primary text-white" data-filter="all">הכל</button>
                    <button onclick="filterGallery('hotel')" class="gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="hotel">המלון והלובי</button>
                    <button onclick="filterGallery('rooms')" class="gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="rooms">חדרים וסוויטות</button>
                    <button onclick="filterGallery('shabbat')" class="gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="shabbat">שבתות חתן ואוכל</button>
                    <button onclick="filterGallery('beach')" class="gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200" data-filter="beach">הים והסביבה</button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="galleryGrid">
                    <!-- Gallery Item 1 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="hotel">
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="לובי המלון" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 2 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="rooms">
                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" alt="חדר משודרג" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 3 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="shabbat">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="שולחנות שבת" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 4 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="beach">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="חוף ים אשדוד" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 5 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="rooms">
                        <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" alt="סוויטה זוגית" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 6 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="shabbat">
                        <img src="https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=800&q=80" alt="ארוחות ערב מיוחדות" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 7 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="hotel">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" alt="לובי ישיבה" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Gallery Item 8 -->
                    <div class="gallery-item overflow-hidden rounded-2xl shadow-sm border border-stone-200 cursor-pointer group h-64 bg-stone-100" data-category="rooms">
                        <img src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80" alt="סוויטה משפחתית" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </section>
        </div>
        <div id="page-about" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-12 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <h1 class="text-3xl sm:text-4xl font-extrabold">אודות מלון מיאמי אשדוד</h1>
                    <p class="mt-2 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base">
                        הסיפור שלנו הוא סיפור של אירוח חם, משפחתיות אמיתית, אהבה לים ואוכל משובח באחת הערים היפות בארץ.
                    </p>
                </div>
            </section>
            <!-- Content details -->
            <section class="py-16 px-4 max-w-5xl mx-auto space-y-12">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-7 space-y-4">
                        <h2 class="text-2xl sm:text-3xl font-bold text-primary">בית חם לאורחים ומשפחות</h2>
                        <p class="text-stone-600 leading-relaxed text-sm sm:text-base">
                            מלון מיאמי אשדוד נוסד מתוך חזון ברור: להקים מלון מודרני, נעים וביתי המעניק חוויה בלתי נשכחת למי שמחפש נופש מרגיע ליד הים. המלון פונה הן לתיירים מהארץ ומחו״ל, לזוגות המחפשים שקט, למשפחות מטיילות, והן לקהל רחב הבוחר בנו בקפידה לאורך השנים לחגוג את האירועים המרגשים ביותר בחייהם.
                        </p>
                        <p class="text-stone-600 leading-relaxed text-sm sm:text-base">
                            הקרבה המושלמת לחוף הים של אשדוד מאפשרת לאורחינו ליהנות מבריזת ים נהדרת ומטיולים קסומים בשקיעה, תוך שהם נהנים מחדרים מעוצבים ונקיים, ארוחות שף כשרות למהדרין בהכנה ביתית ואישית, ואווירה ייחודית של שבתות קודש מרוממות.
                        </p>
                    </div>
                    <div class="md:col-span-5">
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80" alt="מבט למלון מיאמי" class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                    </div>
                </div>
                <!-- Values Grid inside About -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="text-gold text-3xl mb-3"><i class="fa-solid fa-heart"></i></div>
                        <h4 class="font-bold text-primary mb-2">שירות מהלב</h4>
                        <p class="text-stone-500 text-xs sm:text-sm">היחס האישי אצלנו הוא אבן יסוד. מהעובד בלובי ועד מנהלי המלון, כולם מחויבים לחיוך ושירות מקצועי.</p>
                    </div>
                    <div class="text-center">
                        <div class="text-gold text-3xl mb-3"><i class="fa-solid fa-star"></i></div>
                        <h4 class="font-bold text-primary mb-2">איכות וניקיון</h4>
                        <p class="text-stone-500 text-xs sm:text-sm">אנו משקיעים משאבים רבים בתחזוקה מתמדת, בניקיון מוקפד של החדרים והחללים המשותפים ללא פשרות.</p>
                    </div>
                    <div class="text-center">
                        <div class="text-gold text-3xl mb-3"><i class="fa-solid fa-certificate"></i></div>
                        <h4 class="font-bold text-primary mb-2">מסורת וכשרות</h4>
                        <p class="text-stone-500 text-xs sm:text-sm">כמלון מוביל לשבתות חתן, אנו גאים להעניק רמת כשרות מהודרת וקפדנית שתאפשר לכולכם לחגוג בלב שקט.</p>
                    </div>
                </div>
            </section>
        </div>
        <div id="page-contact" class="page-container hidden fade-in-active">
            <!-- Header banner -->
            <section class="bg-primary text-white py-12 px-4 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                <div class="relative z-10 max-w-4xl mx-auto">
                    <h1 class="text-3xl sm:text-4xl font-extrabold">צור קשר</h1>
                    <p class="mt-2 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base">
                        נשמח לענות על כל שאלה, לתת מענה מפורט ולהציע לכם את חבילת האירוח המושלמת עבורכם.
                    </p>
                </div>
            </section>
            <!-- Contact detail & form -->
            <section class="py-16 px-4 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <!-- Form (Left / Main) -->
                    <div class="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-stone-100">
                        <h3 class="text-2xl font-bold text-primary mb-2">שילחו לנו הודעה</h3>
                        <p class="text-stone-500 text-sm mb-8">נציג מקצועי מצוות המלון יחזור אליכם בהקדם האפשרי עם כל הפרטים והצעה מותאמת.</p>
                        <form id="contactForm" onsubmit="handleFormSubmit(event)" class="space-y-5">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-sm font-semibold text-stone-700 mb-1.5" for="contact_name">שם מלא *</label>
                                    <input type="text" id="contact_name" required class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold transition">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-stone-700 mb-1.5" for="contact_phone">מספר טלפון *</label>
                                    <input type="tel" id="contact_phone" required class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold transition">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-sm font-semibold text-stone-700 mb-1.5" for="contact_type">סוג האירוח המבוקש</label>
                                    <select id="contact_type" class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold transition">
                                        <option value="שבת חתן">שבת חתן</option>
                                        <option value="אירוח זוגי / משפחתי">אירוח זוגי / משפחתי</option>
                                        <option value="כנס או אירוע עסקי">כנס או אירוע עסקי</option>
                                        <option value="ברית או אירוע חול">ברית או אירוע משפחתי</option>
                                        <option value="אחר">אחר</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-stone-700 mb-1.5" for="contact_guests">כמות אורחים משוערת</label>
                                    <input type="number" id="contact_guests" min="1" placeholder="למשל: 50" class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold transition">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-stone-700 mb-1.5" for="contact_msg">הודעה / בקשות מיוחדות</label>
                                <textarea id="contact_msg" rows="4" placeholder="נשמח לשמוע על התאריכים המבוקשים וסגנון האירוח שאתם מדמיינים..." class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold transition"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-6 rounded-xl shadow transition duration-200">
                                שליחת הודעה ונחזור אליכם
                            </button>
                        </form>
                    </div>
                    <!-- Contact Info & Map mockup (Right) -->
                    <div class="lg:col-span-5 space-y-8">
                        <div class="bg-primary text-white p-8 rounded-2xl shadow-lg space-y-6">
                            <h3 class="text-xl font-bold text-gold">פרטי התקשרות מהירים</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <i class="fa-solid fa-phone text-gold mt-1.5"></i>
                                    <div>
                                        <span class="block text-xs text-stone-300">טלפון במשרד הקבלה:</span>
                                        <a href="tel:08-8522085" class="block text-lg font-bold hover:text-gold transition">08-8522085</a>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fa-brands fa-whatsapp text-emerald-400 mt-1.5"></i>
                                    <div>
                                        <span class="block text-xs text-stone-300">מענה בווטסאפ:</span>
                                        <a href="https://wa.me/97288522085" target="_blank" class="block text-lg font-bold hover:text-emerald-400 transition">לחצו למענה מהיר</a>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fa-solid fa-envelope text-gold mt-1.5"></i>
                                    <div>
                                        <span class="block text-xs text-stone-300">דואר אלקטרוני:</span>
                                        <span class="block text-base font-semibold">miamihotel.ashdod@gmail.com</span>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fa-solid fa-location-dot text-gold mt-1.5"></i>
                                    <div>
                                        <span class="block text-xs text-stone-300">כתובתנו:</span>
                                        <span class="block text-base">נורדאו 24, אשדוד, ישראל</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Simulated Map Container -->
                        <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-200 h-64 relative">
                            <!-- Background placeholder styled map -->
                            <div class="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center p-6 text-center">
                                <i class="fa-solid fa-map-location-dot text-primary text-4xl mb-3"></i>
                                <span class="font-extrabold text-primary block text-base">מפת מיקום המלון באשדוד</span>
                                <span class="text-stone-500 text-xs mt-1 block">רחוב נורדאו 24 • מרחק דקת הליכה לחוף הים, צמוד לגנים ולטיילת היפה</span>
                                <a href="https://waze.com/ul?q=מלון+מיאמי+אשדוד" target="_blank" class="mt-4 bg-primary hover:bg-secondary text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 shadow">
                                    <i class="fa-brands fa-waze text-sky-400"></i>
                                    <span>ניווט עם Waze</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- LEAD FORM SECTION (Always visible below content on Home page) -->
        <section class="bg-stone-100 py-16 px-4 border-t border-stone-200" id="globalInquirySection">
            <div class="max-w-4xl mx-auto text-center space-y-4 mb-8">
                <span class="text-gold font-bold text-sm uppercase tracking-wider block">פשוט וישיר</span>
                <h2 class="text-3xl font-extrabold text-primary">בואו נתכנן את האירוח המושלם עבורכם</h2>
                <p class="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
                    השאירו לנו פרטים קצרים, ונציג אירוח ייעודי מטעמנו יחזור אליכם עם חיוך, פרטים מדויקים והצעה משתלמת במיוחד.
                </p>
            </div>
            <!-- Fast Lead Capture Card -->
            <div class="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-stone-200/50">
                <form id="globalLeadForm" onsubmit="handleFormSubmit(event)" class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="lead_name">שם מלא *</label>
                        <input type="text" id="lead_name" required class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold" placeholder="ישראל ישראלי">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="lead_phone">מספר טלפון *</label>
                        <input type="tel" id="lead_phone" required class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold" placeholder="050-0000000">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="lead_type">סוג האירוח / אירוע</label>
                        <select id="lead_type" class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option value="שבת חתן">שבת חתן (המומחיות שלנו)</option>
                            <option value="אירוח זוגי">נופש זוגי / סוף שבוע</option>
                            <option value="נופש משפחתי">נופש משפחתי מורחב</option>
                            <option value="כנס עסקי">כנס / אירוע עסקי</option>
                            <option value="אחר">שאלה או בירור אחר</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="lead_count">כמות אורחים משוערת</label>
                        <input type="number" id="lead_count" class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold" placeholder="למשל: 60">
                    </div>
                    <div class="sm:col-span-2">
                        <button type="submit" class="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg shadow transition duration-200">
                            קבלת הצעה מהירה בחינם
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>
    <!-- FOOTER SECTION -->
    <footer class="bg-primary text-stone-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-secondary/50">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            
            <!-- Column 1: Brand -->
            <div class="md:col-span-4 space-y-4">
                <div class="flex items-center gap-3">
                    <div class="bg-white/10 text-white p-2 rounded-lg">
                        <i class="fa-solid fa-umbrella-beach text-xl text-gold"></i>
                    </div>
                    <div>
                        <span class="block text-lg font-bold text-white tracking-wide leading-none">מלון מיאמי</span>
                        <span class="block text-[10px] text-stone-400 font-medium tracking-widest uppercase mt-0.5">MIAMI HOTEL ASHDOD</span>
                    </div>
                </div>
                <p class="text-xs text-stone-400 leading-relaxed">
                    מלון בוטיק משפחתי מוביל באשדוד המציע חווית נופש שלווה על קו המים, אירוח נעים לזוגות ומשפחות ומומחיות ייחודית ומוערכת בהפקת שבתות חתן ואירועים חגיגיים.
                </p>
                <div class="flex space-x-3 space-x-reverse text-stone-400 text-lg">
                    <a href="#" class="hover:text-gold transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="hover:text-gold transition"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/97288522085" target="_blank" class="hover:text-emerald-400 transition"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <!-- Column 2: Navigation -->
            <div class="md:col-span-2 space-y-3">
                <h4 class="font-bold text-white text-sm uppercase tracking-wide border-r-2 border-gold pr-2">קישורים מהירים</h4>
                <ul class="space-y-2 text-xs">
                    <li><a href="#" onclick="switchPage('home'); return false;" class="hover:text-gold transition">דף הבית</a></li>
                    <li><a href="#" onclick="switchPage('rooms'); return false;" class="hover:text-gold transition">חדרים ואירוח</a></li>
                    <li><a href="#" onclick="switchPage('shabbat'); return false;" class="hover:text-gold transition">שבתות חתן</a></li>
                    <li><a href="#" onclick="switchPage('business'); return false;" class="hover:text-gold transition">כנסים ועסקים</a></li>
                    <li><a href="#" onclick="switchPage('gallery'); return false;" class="hover:text-gold transition">גלריית תמונות</a></li>
                </ul>
            </div>
            <!-- Column 3: Contact & Info -->
            <div class="md:col-span-3 space-y-3">
                <h4 class="font-bold text-white text-sm uppercase tracking-wide border-r-2 border-gold pr-2">שירות ואירוח</h4>
                <ul class="space-y-2 text-xs text-stone-400">
                    <li><i class="fa-solid fa-phone text-gold ml-1.5 w-4"></i> טלפון: 08-8522085</li>
                    <li><i class="fa-solid fa-location-dot text-gold ml-1.5 w-4"></i> נורדאו 24, אשדוד (סמוך לים)</li>
                    <li><i class="fa-solid fa-envelope text-gold ml-1.5 w-4"></i> miamihotel.ashdod@gmail.com</li>
                    <li><i class="fa-solid fa-certificate text-gold ml-1.5 w-4"></i> כשרות למהדרין רבנות אשדוד</li>
                </ul>
            </div>
            <!-- Column 4: Quick Action -->
            <div class="md:col-span-3 space-y-4">
                <h4 class="font-bold text-white text-sm uppercase tracking-wide border-r-2 border-gold pr-2">רוצים הצעה מהירה?</h4>
                <p class="text-xs text-stone-400 leading-relaxed">המומחים שלנו לשבתות חתן ואירועים זמינים לסייע ולתפור לכם הצעה מדויקת.</p>
                <button onclick="openInquiryModal('שבת חתן')" class="w-full bg-gold hover:bg-gold/90 text-white font-bold py-2.5 px-4 rounded-lg text-xs shadow transition">
                    לחצו להצעת מחיר מהירה
                </button>
            </div>
        </div>
        <div class="border-t border-secondary/40 pt-8 text-center text-xs text-stone-500">
            <p>© 2026 מלון מיאמי אשדוד. כל הזכויות שמורות. עיצוב ופיתוח אב-טיפוס מודרני מותאם אישית.</p>
        </div>
    </footer>
    <!-- STICKY MOBILE CALL BAR (Visible only on mobile) -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-stone-200 shadow-2xl p-2.5 flex justify-around gap-2.5">
        <a href="tel:08-8522085" class="flex-1 bg-primary text-white text-center py-3 rounded-xl font-bold text-xs flex justify-center items-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>חיוג טלפוני</span>
        </a>
        <a href="https://wa.me/97288522085?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%90%D7%99%D7%A8%D7%95%D7%97%20%D7%91%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9E%D7%99%D7%90%D7%9E%D7%99" 
           target="_blank" 
           class="flex-1 bg-green-600 text-white text-center py-3 rounded-xl font-bold text-xs flex justify-center items-center gap-2">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>ווטסאפ מהיר</span>
        </a>
        <button onclick="openInquiryModal('מהיר')" class="flex-1 bg-gold text-white text-center py-3 rounded-xl font-bold text-xs">
            הצעת מחיר
        </button>
    </div>
    <!-- SUCCESS MODAL (Custom styled alert bypass) -->
    <div id="successModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
        <div class="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-stone-100 text-center space-y-4 relative animate-in fade-in zoom-in duration-300">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary">פנייתכם התקבלה בהצלחה!</h3>
            <p class="text-stone-600 text-sm leading-relaxed">
                תודה שפניתם למלון מיאמי אשדוד. פרטיכם הועברו בהצלחה למחלקת האירוח והשירות שלנו. נציג מיומן יחזור אליכם בהקדם האפשרי עם כל התשובות והצעה מעולה.
            </p>
            <button onclick="closeSuccessModal()" class="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                סגור ופתח דף הבית
            </button>
        </div>
    </div>
    <!-- GENERAL INQUIRY / BOOKING MODAL -->
    <div id="inquiryModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-100 relative max-h-[90vh] overflow-y-auto">
            <button onclick="closeInquiryModal()" class="absolute top-4 left-4 text-stone-400 hover:text-stone-600 transition" aria-label="סגור">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <h3 class="text-xl sm:text-2xl font-bold text-primary mb-1">בקשת הצעה למלון מיאמי אשדוד</h3>
            <p class="text-stone-500 text-xs mb-6" id="modalSubTitle">אנא מלאו את הפרטים והמומחים שלנו יחזרו אליכם עם הצעה מנצחת.</p>
            <form id="modalForm" onsubmit="handleFormSubmit(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1" for="modal_name">שם מלא *</label>
                    <input type="text" id="modal_name" required class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1" for="modal_phone">טלפון ליצירת קשר *</label>
                    <input type="tel" id="modal_phone" required class="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="modal_type">סוג האירוע</label>
                        <select id="modal_type" class="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option value="שבת חתן">שבת חתן</option>
                            <option value="נופש זוגי">נופש זוגי</option>
                            <option value="נופש משפחתי">נופש משפחתי</option>
                            <option value="כנס עסקי">כנס / הרצאה</option>
                            <option value="ברית או אירוע חול">אירוע אחר</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 mb-1" for="modal_guests">מספר אורחים משוער</label>
                        <input type="number" id="modal_guests" class="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1" for="modal_msg">הודעה ובקשות נוספות (תאריכים, סגנון...)</label>
                    <textarea id="modal_msg" rows="3" class="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-gold"></textarea>
                </div>
                <button type="submit" class="w-full bg-gold hover:bg-gold/90 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow mt-4">
                    שליחת בקשה לקבלת הצעה
                </button>
            </form>
        </div>
    </div>
    <!-- FLOATING WHATSAPP BUTTON (For Desktop & Tablet) -->
    <a href="https://wa.me/97288522085?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%90%D7%99%D7%A8%D7%95%D7%97%20%D7%91%D7%9E%D7%9C%D7%95%D7%9F%20%D7%9E%D7%99%D7%90%D7%9E%D7%99" 
       target="_blank" 
       class="hidden sm:flex fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl items-center justify-center transition-transform hover:scale-110"
       title="מענה מהיר בווטסאפ">
        <i class="fa-brands fa-whatsapp text-3xl"></i>
    </a>
    <script>
        // State variables for dynamic computations
        let selectedMenuTier = 'standard';
        // Page Router function
        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-container');
            pages.forEach(p => p.classList.add('hidden'));
            // Show target page
            const targetPage = document.getElementById(`page-${pageId}`);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.scrollIntoView({ behavior: 'smooth' });
            }
            // Manage navigation active states
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('text-gold', 'active-nav-link');
                link.classList.add('text-secondary');
            });
            const targetLink = document.getElementById(`nav-${pageId}`);
            if (targetLink) {
                targetLink.classList.remove('text-secondary');
                targetLink.classList.add('text-gold', 'active-nav-link');
            }
            // Hide the global booking form below unless we are on 'home' or 'contact' pages to keep layout clean
            const globalForm = document.getElementById('globalInquirySection');
            if (pageId === 'contact') {
                globalForm.classList.add('hidden');
            } else {
                globalForm.classList.remove('hidden');
            }
        }
        // Toggle mobile drawer
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('menuIcon');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                menu.classList.add('hidden');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
        // Rooms dynamic filtering logic
        function filterRooms(category) {
            const cards = document.querySelectorAll('.room-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
            // Update button styles
            const buttons = document.querySelectorAll('.room-filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-white', 'text-stone-600');
            });
            const activeBtn = document.querySelector(`.room-filter-btn[data-filter="${category}"]`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-white', 'text-stone-600');
                activeBtn.classList.add('bg-primary', 'text-white');
            }
        }
        // Gallery filter logic
        function filterGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            // Update button styles
            const buttons = document.querySelectorAll('.gallery-filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-white', 'text-stone-600');
            });
            const activeBtn = document.querySelector(`.gallery-filter-btn[data-filter="${category}"]`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-white', 'text-stone-600');
                activeBtn.classList.add('bg-primary', 'text-white');
            }
        }
        // Interactive Shabbat budget calculator calculations
        function setMenuTier(tier) {
            selectedMenuTier = tier;
            const buttons = document.querySelectorAll('.menu-tier-btn');
            buttons.forEach(btn => {
                btn.classList.remove('border-gold', 'bg-gold/10', 'text-primary');
                btn.classList.add('border-stone-200', 'text-stone-600');
            });
            const activeBtn = document.getElementById(`menu-tier-${tier}`);
            if (activeBtn) {
                activeBtn.classList.remove('border-stone-200', 'text-stone-600');
                activeBtn.classList.add('border-gold', 'bg-gold/10', 'text-primary');
            }
            updateCalculator();
        }
        function updateCalculator() {
            const guests = parseInt(document.getElementById('calc-guests').value);
            const rooms = parseInt(document.getElementById('calc-rooms').value);
            
            // Render labels
            document.getElementById('calc-guests-val').innerText = `${guests} איש`;
            document.getElementById('calc-rooms-val').innerText = `${rooms} חדרים`;
            // Compute prices (Realistic hospitality event baseline estimates)
            const pricePerGuest = selectedMenuTier === 'premium' ? 380 : 280;
            const pricePerRoom = 800; // standard Shabbat room price index
            
            const total = (guests * pricePerGuest) + (rooms * pricePerRoom);
            
            // Format currency in ILS
            document.getElementById('calc-total-est').innerText = `₪${total.toLocaleString()}`;
        }
        // Accordion functionality for FAQ
        function toggleAccordion(id) {
            const content = document.getElementById(`acc-content-${id}`);
            const icon = document.getElementById(`acc-icon-${id}`);
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }
        // General Booking Inquiry Modals
        function openInquiryModal(defaultEventText = 'כללי') {
            const modal = document.getElementById('inquiryModal');
            modal.classList.remove('hidden');
            
            const selectType = document.getElementById('modal_type');
            if (defaultEventText.includes('שבת')) {
                selectType.value = 'שבת חתן';
            } else if (defaultEventText.includes('כנס')) {
                selectType.value = 'כנס עסקי';
            } else if (defaultEventText.includes('חדר') || defaultEventText.includes('סוויטה')) {
                selectType.value = 'אירוח זוגי';
                document.getElementById('modal_msg').value = `מעוניין בפרטים והזמנת: ${defaultEventText}`;
            }
        }
        function closeInquiryModal() {
            const modal = document.getElementById('inquiryModal');
            modal.classList.add('hidden');
        }
        function openInquiryWithParams() {
            const guests = document.getElementById('calc-guests').value;
            const rooms = document.getElementById('calc-rooms').value;
            const totalVal = document.getElementById('calc-total-est').innerText;
            
            openInquiryModal('שבת חתן');
            
            document.getElementById('modal_guests').value = guests;
            document.getElementById('modal_msg').value = `מעוניין בהצעת מחיר לשבת חתן מתוכננת עם כ-${guests} אורחים ו-${rooms} חדרים. הערכה במחשבון: ${totalVal}.`;
        }
        // Custom submit form handling
        function handleFormSubmit(event) {
            event.preventDefault();
            // Close active modal if open
            closeInquiryModal();
            // Show custom Success state modal (prevents intrusive alert popup)
            document.getElementById('successModal').classList.remove('hidden');
            
            // Reset forms
            if(document.getElementById('contactForm')) document.getElementById('contactForm').reset();
            if(document.getElementById('globalLeadForm')) document.getElementById('globalLeadForm').reset();
            if(document.getElementById('modalForm')) document.getElementById('modalForm').reset();
        }
        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
            switchPage('home');
        }
        // Smooth header shrinking on scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('mainHeader');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
        // Initialize state on window load
        window.onload = function() {
            updateCalculator();
        }
    </script>
</body>
</html>