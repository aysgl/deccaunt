<template>
  <VContainer class="pa-0" fluid>
    <VCard flat color="light" class="rounded-0" height="500">
      <VImg
        height="500"
        :style="{
          background:
            'linear-gradient(to top, rgba(var(--v-theme-primary), 0.1) 20%, rgba(255, 255, 255, 1) 90%)',
        }"
      >
        <VContainer class="h-100 mx-auto">
          <div
            class="slide h-100"
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ 'is-active': currentSlide === index }"
          >
            <div class="slide__header text-center">
              <h1 class="text-h1 slide__title font-weight-bold">
                <span class="title-line">
                  <span>{{ slide.title }}</span>
                </span>
                <span class="title-line">
                  <span>{{ slide.subtitle }}</span>
                </span>
              </h1>
            </div>
          </div>
          <div
            class="position-relative d-flex flex-column justify-end align-center h-100 ga-2 pb-14"
            style="z-index: 20"
          >
            <div class="text-center mb-8">
              <VChip color="primary" text="+90 Customer" class="me-2" />
              <VChip color="primary" text="+120 Projects" />
            </div>
            <!-- <div>
            <VBtn
              color="white"
              @click="prev"
              :icon="IconArrowLeft"
              size="small"
            />
            <VBtn
              color="white"
              @click="next"
              :icon="IconArrowRight"
              size="small"
            />
          </div> -->
          </div>
        </VContainer>
      </VImg>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = ref([
  {
    title: "Enhance Your Business",
    subtitle: "with Speed, Security, and UX!",
  },
  { title: "The road to business", subtitle: "success is through Deccaount" },
]);

const currentSlide = ref(0);
const slideInterval = ref<number | null>(null);

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prev = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const startSlideShow = () => {
  slideInterval.value = setInterval(() => {
    next();
  }, 6000);
};

const stopSlideShow = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
    slideInterval.value = null;
  }
};

onMounted(() => {
  startSlideShow();
});

onBeforeUnmount(() => {
  stopSlideShow();
});
</script>

<style scoped lang="scss">
// colors
$color-trans-bg: #ededed;
// easings
$ease-cb: cubic-bezier(0.4, 0, 0.2, 1);
$ease-cb-2: cubic-bezier(0.19, 1, 0.22, 1);
$ease-cb-3: cubic-bezier(0.77, 0, 0.175, 1);
$ease-cb-4: cubic-bezier(0.99, 1, 0.92, 1);

// mqs
$mq-med: 54em;
$mq-large: 65em;
$mq-xlarge: 91em;

@mixin nth-trans-delay($delay_items: 7, $delay_time: 0.2s) {
  @for $i from 1 through $delay_items {
    &:nth-child(#{$i}) {
      transition-delay: $delay_time * $i;
    }
  }
}
.text-h1 {
  @media screen and (max-width: 992px) {
    font-size: 2.75rem !important;
    line-height: 3rem !important;
  }
}
.slide {
  z-index: -1;
  padding: 1rem;
  transition: z-index 1s ease;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  @media screen and (max-width: 600px) {
    top: -40px;
  }

  &.is-active {
    z-index: 19;
    transition: z-index 1s ease;
  }

  &__header {
    z-index: 9;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }

  &__title {
    overflow-y: hidden;

    .title-line {
      display: block;
      overflow-y: hidden;

      span {
        display: inline-block;
        transform: translate3d(0, 140%, 0);
        opacity: 0;
        background: linear-gradient(-90deg, rgb(var(--v-theme-primary)), #000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition:
          transform 0.4s ease,
          opacity 0.8s ease;
        @include nth-trans-delay(2, 0.15s);
      }

      .is-active & span {
        transform: translate3d(0, 0%, 0);
        opacity: 1;
        transition:
          transform 0.6s $ease-cb-3,
          opacity 0.1s ease;
      }
      .is-active &:nth-of-type(2n) span {
        transition-delay: 0.2s;
      }
    }
  }
}
</style>
