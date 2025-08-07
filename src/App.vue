<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 1. 视频播放懒加载功能
const videos = ref([
  {
    src: import.meta.env.BASE_URL + "case1.mp4",
    poster: import.meta.env.BASE_URL + "cover1.jpg",
    playing: false
  },
  {
    src: import.meta.env.BASE_URL + "case2.mp4",
    poster: import.meta.env.BASE_URL + "cover2.jpg",
    playing: false
  },
  {
    src: import.meta.env.BASE_URL + "case3.mp4",
    poster: import.meta.env.BASE_URL + "cover3.jpg",
    playing: false
  }
])

function playVideo(index) {
  videos.value[index].playing = true
}

// 2. 导航栏滚动状态
const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
  if (window.scrollY === 0) {
    AOS.refreshHard()
  }
}

// 3. 平滑滚动 + 联系我们动画
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }

  if (id === 'contact') {
    const title = document.querySelector('#contact h2')
    if (title) {
      title.classList.remove('zoom-pulse')
      void title.offsetWidth
      title.classList.add('zoom-pulse')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <!-- 导航栏 -->
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-black/80 shadow-lg backdrop-blur-lg py-3' : 'bg-black/50 backdrop-blur-md py-5'"
    data-aos="fade-down"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
      <div class="flex items-center space-x-2">
        <img src="/Logo.png" alt="Logo" class="h-11 w-30 object-contain" />
      </div>

      <ul class="hidden md:flex items-center gap-8 text-white font-medium text-sm md:text-base">
        <li><a @click.prevent="scrollToSection('home')" href="#home" class="hover:text-yellow-400 transition">首页</a></li>
        <li><a @click.prevent="scrollToSection('services')" href="#services" class="hover:text-yellow-400 transition">服务</a></li>
        <li><a @click.prevent="scrollToSection('contact')" href="#contact" class="hover:text-yellow-400 transition">联系我们</a></li>
      </ul>

      <button @click="menuOpen = !menuOpen" class="md:hidden text-white focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="menuOpen" class="md:hidden bg-black/90 px-4 pb-4 text-white text-center space-y-2">
      <a @click.prevent="scrollToSection('home'); menuOpen = false" href="#home" class="block">首页</a>
      <a @click.prevent="scrollToSection('services'); menuOpen = false" href="#services" class="block">服务</a>
      <a @click.prevent="scrollToSection('contact'); menuOpen = false" href="#contact" class="block">联系我们</a>
    </div>
  </nav>

  <!-- 首屏视频背景 -->
  <section id="home" class="h-screen relative flex flex-col justify-center items-center text-center">
    <video autoplay muted loop playsinline class="absolute w-full h-full object-cover">
      <source src="/banner.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <h2 class="relative z-10 text-white text-4xl md:text-6xl font-bold mb-20" data-aos="fade-up">
      改造世界？游戏化。
    </h2>

    <div
      @click="scrollToSection('services')"
      class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
    >
      <div class="flex flex-col items-center justify-center w-24 text-white animate-bounce">
        <span class="text-sm mb-1 text-center">向下滑动</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>

  <!-- 服务模块 -->
  <section id="services" class="py-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="0">
      <h3 class="text-xl font-bold mb-4">交互设计</h3>
      <p>为品牌传播打造流畅而惊艳的交互方案，数字与实体合二为一。</p>
    </div>
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-xl font-bold mb-4">严肃游戏</h3>
      <p>高质量的教学游戏化设计，兴趣让结果更出彩。</p>
    </div>
    <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-xl font-bold mb-4">企业宣传</h3>
      <p>创意品牌设计，交互是世界通用语言。</p>
    </div>
  </section>

<!-- 案例展示模块 -->
<section id="cases" class="py-16 bg-gray-50" data-aos="fade-up">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">案例展示</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative w-full rounded shadow overflow-hidden cursor-pointer group"
        @click="playVideo(index)"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      >
        <!-- 封面图状态 -->
        <template v-if="!video.playing">
          <img
            :src="video.poster"
            :alt="'封面' + (index + 1)"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl">
            ▶
          </div>
        </template>

        <!-- 视频播放状态 -->
        <video
          v-else
          controls
          autoplay
          class="w-full h-full object-cover"
        >
          <source :src="video.src" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>

  <!-- 关于我们 -->
  <section id="about" class="py-16 container mx-auto text-center" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6">关于我们</h2>
    <p class="max-w-2xl mx-auto">
      我们是一家专注视觉艺术与游戏化设计的创意公司，我们团队由专业的设计师，工程师和强大的人工智能体构成，
      致力于用设计赋予您的想法独特生命力。
    </p>
  </section>

  <!-- 合作商 -->
  <section id="partners" class="py-16 bg-white" data-aos="fade-up">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">合作商</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <img src="/partner1.png" alt="合作商1" class="h-12 object-contain partner-logo transition duration-300" data-aos="zoom-in" data-aos-delay="0" />
        <img src="/partner2.png" alt="合作商2" class="h-12 object-contain partner-logo transition duration-300" data-aos="zoom-in" data-aos-delay="100" />
      </div>
    </div>
  </section>

  <!-- 联系方式 -->
  <section id="contact" class="py-16 bg-gray-900 text-white text-center" data-aos="fade-up">
    <h2 ref="contactTitle" class="text-3xl font-bold mb-6">联系我们</h2>
    <p>邮箱：1272791811@qq.com</p>
    <p>微信：NeoCai17</p>
  </section>
</template>


<style>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-bounce {
  animation: bounce 1.5s infinite;
}
.partner-logo {
  filter: none !important;
}
@keyframes zoom-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.zoom-pulse {
  animation: zoom-pulse 0.6s ease-in-out;
}
</style>
