import { ref, onMounted, onBeforeUnmount } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const slides = ref([
    {
        title: "Enhance Your Business",
        subtitle: "with Speed, Security, and UX!",
    },
    { title: "The road to business", subtitle: "success is through Deccaount" },
]);
const currentSlide = ref(0);
const slideInterval = ref(null);
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
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['is-active'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("pa-0") }, fluid: (true), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("pa-0") }, fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ flat: (true), color: ("light"), ...{ class: ("rounded-0") }, height: ("500"), }));
    const __VLS_8 = __VLS_7({ flat: (true), color: ("light"), ...{ class: ("rounded-0") }, height: ("500"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VImg;
    /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.VImg, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ height: ("500"), ...{ style: (({
                background: 'linear-gradient(to top, rgba(var(--v-theme-primary), 0.1) 20%, rgba(255, 255, 255, 1) 90%)',
            })) }, }));
    const __VLS_14 = __VLS_13({ height: ("500"), ...{ style: (({
                background: 'linear-gradient(to top, rgba(var(--v-theme-primary), 0.1) 20%, rgba(255, 255, 255, 1) 90%)',
            })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("h-100 mx-auto") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("h-100 mx-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    for (const [slide, index] of __VLS_getVForSourceType((__VLS_ctx.slides))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("slide h-100") }, key: ((index)), ...{ class: (({ 'is-active': __VLS_ctx.currentSlide === index })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("slide__header text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-h1 slide__title font-weight-bold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("title-line") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (slide.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("title-line") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (slide.subtitle);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("position-relative d-flex flex-column justify-end align-center h-100 ga-2 pb-14") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-8") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VChip;
    /** @type { [typeof __VLS_components.VChip, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ color: ("primary"), text: ("+90 Customer"), ...{ class: ("me-2") }, }));
    const __VLS_26 = __VLS_25({ color: ("primary"), text: ("+90 Customer"), ...{ class: ("me-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VChip;
    /** @type { [typeof __VLS_components.VChip, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ color: ("primary"), text: ("+120 Projects"), }));
    const __VLS_32 = __VLS_31({ color: ("primary"), text: ("+120 Projects"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['pa-0'];
    __VLS_styleScopedClasses['rounded-0'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['slide'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['slide__header'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-h1'];
    __VLS_styleScopedClasses['slide__title'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['title-line'];
    __VLS_styleScopedClasses['title-line'];
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['ga-2'];
    __VLS_styleScopedClasses['pb-14'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['me-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            slides: slides,
            currentSlide: currentSlide,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
