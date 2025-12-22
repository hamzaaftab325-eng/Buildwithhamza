# 🎨 5 Modern Navbar Design Options

## Design 1: Minimal Glassmorphism
**Style:** Clean, modern, floating navbar with blur effect
```html
<nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center justify-between">
      <div class="text-xl font-bold">Hamza</div>
      <div class="hidden md:flex gap-8">
        <a href="#home" class="hover:text-blue-500 transition">Home</a>
        <a href="#about" class="hover:text-blue-500 transition">About</a>
        <a href="#work" class="hover:text-blue-500 transition">Work</a>
        <a href="#contact" class="hover:text-blue-500 transition">Contact</a>
      </div>
      <button class="md:hidden">☰</button>
    </div>
  </div>
</nav>
```

---

## Design 2: Split Layout (Logo Left, Menu Right)
**Style:** Professional, spacious, with CTA button
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div class="text-2xl font-bold">
      <span class="text-white">Hamza</span>
      <span class="text-blue-500">.</span>
    </div>
    <div class="hidden md:flex items-center gap-8">
      <a href="#home" class="text-white/80 hover:text-white transition">Home</a>
      <a href="#about" class="text-white/80 hover:text-white transition">About</a>
      <a href="#work" class="text-white/80 hover:text-white transition">Work</a>
      <a href="#contact" class="text-white/80 hover:text-white transition">Contact</a>
      <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Let's Talk
      </button>
    </div>
    <button class="md:hidden text-white">☰</button>
  </div>
</nav>
```

---

## Design 3: Centered Logo with Side Menus
**Style:** Balanced, elegant, Apple-inspired
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="hidden md:flex gap-6">
        <a href="#home" class="text-gray-700 hover:text-black transition">Home</a>
        <a href="#about" class="text-gray-700 hover:text-black transition">About</a>
      </div>
      <div class="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
        HAMZA
      </div>
      <div class="hidden md:flex gap-6">
        <a href="#work" class="text-gray-700 hover:text-black transition">Work</a>
        <a href="#contact" class="text-gray-700 hover:text-black transition">Contact</a>
      </div>
      <button class="md:hidden">☰</button>
    </div>
  </div>
</nav>
```

---

## Design 4: Sidebar Style (Vertical Left)
**Style:** Creative, unique, portfolio-focused
```html
<nav class="fixed left-0 top-0 h-screen w-20 bg-black border-r border-white/10 flex flex-col items-center py-8 z-50">
  <div class="text-2xl font-bold text-white mb-12 rotate-0">H</div>
  <div class="flex flex-col gap-8 flex-1">
    <a href="#home" class="text-white/60 hover:text-white transition text-sm rotate-0">Home</a>
    <a href="#about" class="text-white/60 hover:text-white transition text-sm rotate-0">About</a>
    <a href="#work" class="text-white/60 hover:text-white transition text-sm rotate-0">Work</a>
    <a href="#contact" class="text-white/60 hover:text-white transition text-sm rotate-0">Contact</a>
  </div>
  <div class="flex flex-col gap-4">
    <a href="#" class="text-white/60 hover:text-white transition">→</a>
    <a href="#" class="text-white/60 hover:text-white transition">→</a>
  </div>
</nav>
```

---

## Design 5: Minimal Top Bar with Underline Indicator
**Style:** Clean, modern, Vercel/Linear inspired
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
    <div class="flex items-center gap-12">
      <div class="text-xl font-semibold">hamza.codes</div>
      <div class="hidden md:flex gap-8">
        <a href="#home" class="text-sm text-gray-600 hover:text-black transition relative group">
          Home
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </a>
        <a href="#about" class="text-sm text-gray-600 hover:text-black transition relative group">
          About
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </a>
        <a href="#work" class="text-sm text-gray-600 hover:text-black transition relative group">
          Work
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </a>
        <a href="#contact" class="text-sm text-gray-600 hover:text-black transition relative group">
          Contact
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </a>
      </div>
    </div>
    <button class="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
      Resume
    </button>
    <button class="md:hidden">☰</button>
  </div>
</nav>
```

---

## 📊 Comparison Table

| Design | Style | Best For | Complexity |
|--------|-------|----------|------------|
| **1. Glassmorphism** | Modern, floating | Creative portfolios | Medium |
| **2. Split Layout** | Professional, bold | Business/Agency | Easy |
| **3. Centered Logo** | Elegant, balanced | Minimal portfolios | Easy |
| **4. Sidebar** | Unique, creative | Art/Design portfolios | Medium |
| **5. Minimal Top Bar** | Clean, tech-focused | Developer portfolios | Easy |

---

## 🎨 Features Included:

✅ Responsive (mobile hamburger menu)  
✅ Hover effects  
✅ Smooth transitions  
✅ Modern styling  
✅ Tailwind CSS classes  
✅ Fixed positioning  
✅ Backdrop blur effects  

---

## 💡 Recommendations:

- **Design 1** - Best for creative/modern look
- **Design 2** - Best for professional/business
- **Design 5** - Best for developer portfolio (Recommended for you!)

**Which design do you prefer? (1-5)**
