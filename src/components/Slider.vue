<template>
  <VContainer class="my-md-16">
    <VRow dense align="center" justify="center">
      <VCol cols="12" md="8" class="mb-8 mb-md-0">
        <h1 class="text-h1 text-md-left text-center">
          <span class="font-weight-medium">
            The road to business success is through
          </span>
          <span class="text-primary font-weight-bold text-decoration-underline">
            Deccaount
          </span>
        </h1>
      </VCol>
      <VCol
        cols="12"
        md="4"
        class="d-flex justify-md-end justify-center pe-lg-0 pe-md-9"
      >
        <div class="scene">
          <div
            class="cube"
            ref="cube"
            :style="{ transform: `rotateY(${rotationY}deg)` }"
          >
            <div
              v-for="(slide, index) in slider"
              :key="index"
              class="face"
              :style="getFaceStyle(index)"
            >
              <div class="bg-light w-100 h-100">
                <VCard v-if="slide.image">
                  <VImg
                    :src="slide.image"
                    class="align-start"
                    gradient="to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)"
                    cover
                  >
                    <div class="h-100 pa-4" style="top: 0; left: 0">
                      <h2 class="text-h1 font-weight-light text-white mb-4">
                        {{ slide.title }}
                      </h2>
                      <p class="text-white">{{ slide.description }}</p>
                    </div>
                  </VImg>
                </VCard>
                <div
                  v-else
                  class="position-absolute h-100 pa-4"
                  style="top: 0; left: 0"
                >
                  <h2 class="text-h1 font-weight-light mb-4">
                    {{ slide.title }}
                  </h2>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="controls">
            <VBtn
              variant="flat"
              size="small"
              @click="rotate('right')"
              :icon="IconArrowLeft"
            />
            <VBtn
              variant="flat"
              size="small"
              @click="rotate('left')"
              :icon="IconArrowRight"
            />
          </div>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-vue";

const slider = ref([
  {
    title: "90 +",
    description: "Our Customers",
    image:
      "https://1.bp.blogspot.com/-3cFkgcTyjeE/YTkIf7sqxKI/AAAAAAAACdo/2Qq1szEFr_AmV0UCFHi8bM_elFRbrzgqQCNcBGAsYHQ/s0/2.jpg",
  },
  {
    title: "120 +",
    description: "Projects",
    image:
      "https://1.bp.blogspot.com/-__NNfCoD8Yk/YTkIfzAvfYI/AAAAAAAACdk/C4ZrROh8DIAkzxHbn9YQ5b4jtjMARQlQgCNcBGAsYHQ/s0/1.jpg",
  },
  {
    title: "90 +",
    description: "Our Customers",
    image: "",
  },
  {
    title: "120 +",
    description: "Projects",
    image: "",
  },
]);

const rotationY = ref(0);
const activeIndex = ref(0);
let intervalId: NodeJS.Timeout;

const getFaceStyle = (index: number) => {
  const transforms = [
    "rotateY(0deg) translateZ(150px)", // Ön
    "rotateY(90deg) translateZ(150px)", // Sağ
    "rotateY(180deg) translateZ(150px)", // Arka
    "rotateY(-90deg) translateZ(150px)", // Sol
  ];

  return {
    transform: transforms[index],
    backfaceVisibility: "hidden",
  };
};

const rotate = (direction: "left" | "right") => {
  if (direction === "left") {
    activeIndex.value =
      (activeIndex.value - 1 + slider.value.length) % slider.value.length;
    rotationY.value -= 90;
  } else if (direction === "right") {
    activeIndex.value = (activeIndex.value + 1) % slider.value.length;
    rotationY.value += 90;
  }
};

const autoRotate = () => {
  intervalId = setInterval(() => {
    rotate("left");
  }, 3000);
};

onMounted(() => {
  autoRotate();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
h1 {
  line-height: 4.5rem;
}

.scene {
  width: 300px;
  height: 300px;
  perspective: 1000px;
  transform: scale(0.8);
  box-shadow:
    rgba(50, 50, 93, 1) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  border-radius: 20px;
}

.face {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  backface-visibility: hidden;
  overflow: hidden;
}

.controls {
  margin-top: -40px;
  margin-left: 0px;
  display: flex;
  gap: 6px;
}
@media (max-width: 600px) {
  h1 {
    font-size: 2.5rem !important;
    line-height: 3.5rem;
  }
  .scene,
  .face {
    height: 200px;
  }

  .controls {
    margin-top: -50px;
  }
}
</style>
