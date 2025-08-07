<template>
  <!-- 导航栏 -->
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-black/80 shadow-lg backdrop-blur-lg py-3' : 'bg-black/50 backdrop-blur-md py-5'"
    data-aos="fade-down"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-8">
      <div class="flex items-center space-x-3">
        <img src="/Logo.svg" alt="Logo" class="h-10 w-10 object-contain" />
        <span class="text-white text-2xl font-extrabold tracking-wide">Siyu Interactive</span>
      </div>
      <ul class="flex items-center gap-10 text-white font-medium">
        <li><a @click.prevent="scrollToSection('home')" href="#home" class="hover:text-yellow-400 transition">首页</a></li>
        <li><a @click.prevent="scrollToSection('services')" href="#services" class="hover:text-yellow-400 transition">服务</a></li>
        <li><a @click.prevent="scrollToSection('contact')" href="#contact" class="hover:text-yellow-400 transition">联系我们</a></li>
      </ul>
    </div>
  </nav>

  <!-- 首屏视频背景 -->
  <section id="home" class="h-screen relative flex flex-col justify-center items-center text-center">
    <video autoplay muted loop playsinline class="absolute w-full h-full object-cover">
      <source src="/banner.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- 标题 -->
    <h2 class="relative z-10 text-white text-4xl md:text-6xl font-bold mb-20" data-aos="fade-up">
      游戏化改变世界
    </h2>

    <!-- 向下滑动提示 -->
    <div
      @click="scrollToSection('services')"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce z-10 cursor-pointer"
    >
      <span class="text-sm mb-1">向下滑动</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>

  <!-- 服务模块 -->
  <section id="services" class="py-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="0">
      <h3 class="text-xl font-bold mb-4">交互设计</h3>
      <p>为您的产品打造流畅而惊艳的用户体验。</p>
    </div>
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-xl font-bold mb-4">视频制作</h3>
      <p>高质量的企业宣传片与动态视觉内容。</p>
    </div>
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-xl font-bold mb-4">平面设计</h3>
      <p>精美的品牌视觉与创意图形设计。</p>
    </div>
  </section>

  <!-- 案例展示 -->
  <section id="cases" class="py-16 bg-gray-50" data-aos="fade-up">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">案例展示</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <video controls class="w-full rounded shadow" data-aos="zoom-in" data-aos-delay="0">
          <source src="/case1.mp4" type="video/mp4" />
        </video>
        <video controls class="w-full rounded shadow" data-aos="zoom-in" data-aos-delay="100">
          <source src="/case2.mp4" type="video/mp4" />
        </video>
        <img src="/case3.jpg" alt="案例3" class="w-full rounded shadow" data-aos="zoom-in" data-aos-delay="200" />
      </div>
    </div>
  </section>

  <!-- 关于我们 -->
  <section id="about" class="py-16 container mx-auto text-center" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6">关于我们</h2>
    <p class="max-w-2xl mx-auto">
      我们是一家专注交互设计、视频制作与平面设计的创意公司，
      致力于用设计赋予品牌独特的生命力。
    </p>
  </section>

  <!-- 合作商 -->
  <section id="partners" class="py-16 bg-white" data-aos="fade-up">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">合作商</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <img src="/partner1.png" alt="合作商1" class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" data-aos="zoom-in" data-aos-delay="0" />
        <img src="/partner2.png" alt="合作商2" class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" data-aos="zoom-in" data-aos-delay="100" />
        <img src="/partner3.png" alt="合作商3" class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" data-aos="zoom-in" data-aos-delay="200" />
        <img src="/partner4.png" alt="合作商4" class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" data-aos="zoom-in" data-aos-delay="300" />
      </div>
    </div>
  </section>

  <!-- 联系方式 -->
  <section id="contact" class="py-16 bg-gray-900 text-white text-center" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6">联系我们</h2>
    <p>邮箱：contact@siyu.com</p>
    <p>微信：siyu2025</p>
  </section>

  <!-- 底部 -->
  <footer class="bg-black text-gray-400 py-4 text-center" data-aos="fade-up">
    © 2025 Siyu Interactive. All rights reserved.
  </footer>
</template>

<script>
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  data() {
    return { isScrolled: false };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;

      // 当滚动条到顶部时刷新 AOS 动画
      if (window.scrollY === 0) {
        AOS.refreshHard();
      }
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-bounce {
  animation: bounce 1.5s infinite;
}
</style>
