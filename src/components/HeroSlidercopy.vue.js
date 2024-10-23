import { ref, onMounted, onBeforeUnmount } from "vue";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const slider = ref([
    {
        title: "90 +",
        description: "Our Customers",
        image: "https://1.bp.blogspot.com/-3cFkgcTyjeE/YTkIf7sqxKI/AAAAAAAACdo/2Qq1szEFr_AmV0UCFHi8bM_elFRbrzgqQCNcBGAsYHQ/s0/2.jpg",
    },
    {
        title: "120 +",
        description: "Projects",
        image: "https://1.bp.blogspot.com/-__NNfCoD8Yk/YTkIfzAvfYI/AAAAAAAACdk/C4ZrROh8DIAkzxHbn9YQ5b4jtjMARQlQgCNcBGAsYHQ/s0/1.jpg",
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
let intervalId;
const getFaceStyle = (index) => {
    const transforms = [
        "rotateY(0deg) translateZ(150px)",
        "rotateY(90deg) translateZ(150px)",
        "rotateY(180deg) translateZ(150px)",
        "rotateY(-90deg) translateZ(150px)",
    ];
    return {
        transform: transforms[index],
        backfaceVisibility: "hidden",
    };
};
const rotate = (direction) => {
    if (direction === "left") {
        activeIndex.value =
            (activeIndex.value - 1 + slider.value.length) % slider.value.length;
        rotationY.value -= 90;
    }
    else if (direction === "right") {
        activeIndex.value = (activeIndex.value + 1) % slider.value.length;
        rotationY.value += 90;
    }
};
const autoRotate = () => {
    intervalId = window.setInterval(() => {
        rotate("left");
    }, 3000);
};
onMounted(() => {
    autoRotate();
});
onBeforeUnmount(() => {
    clearInterval(intervalId);
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
    __VLS_styleScopedClasses['scene'];
    __VLS_styleScopedClasses['face'];
    __VLS_styleScopedClasses['controls'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("my-md-16") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("my-md-16") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ dense: (true), align: ("center"), justify: ("center"), }));
    const __VLS_8 = __VLS_7({ dense: (true), align: ("center"), justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ cols: ("12"), md: ("8"), ...{ class: ("mb-8 mb-md-0") }, }));
    const __VLS_14 = __VLS_13({ cols: ("12"), md: ("8"), ...{ class: ("mb-8 mb-md-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-h1 text-md-left text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-weight-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-primary font-weight-bold text-decoration-underline") }, });
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ cols: ("12"), md: ("4"), ...{ class: ("d-flex justify-md-end justify-center pe-lg-0 pe-md-9") }, }));
    const __VLS_20 = __VLS_19({ cols: ("12"), md: ("4"), ...{ class: ("d-flex justify-md-end justify-center pe-lg-0 pe-md-9") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scene") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cube") }, ref: ("cube"), ...{ style: (({ transform: `rotateY(${__VLS_ctx.rotationY}deg)` })) }, });
    // @ts-ignore navigation for `const cube = ref()`
    __VLS_ctx.cube;
    for (const [slide, index] of __VLS_getVForSourceType((__VLS_ctx.slider))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("face") }, ...{ style: ((__VLS_ctx.getFaceStyle(index))) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-light w-100 h-100") }, });
        if (slide.image) {
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VCard;
            /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
            const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
            const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VImg;
            /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.VImg, ] } */
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ src: ((slide.image)), ...{ class: ("align-start") }, gradient: ("to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)"), cover: (true), }));
            const __VLS_32 = __VLS_31({ src: ((slide.image)), ...{ class: ("align-start") }, gradient: ("to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)"), cover: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-100 pa-4") }, ...{ style: ({}) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-h1 font-weight-light text-white mb-4") }, });
            (slide.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-white") }, });
            (slide.description);
            __VLS_nonNullable(__VLS_35.slots).default;
            const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            __VLS_nonNullable(__VLS_29.slots).default;
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("position-absolute h-100 pa-4") }, ...{ style: ({}) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-h1 font-weight-light mb-4") }, });
            (slide.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (slide.description);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("controls") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, variant: ("flat"), size: ("small"), icon: ((__VLS_ctx.IconArrowLeft)), }));
    const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, variant: ("flat"), size: ("small"), icon: ((__VLS_ctx.IconArrowLeft)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_42;
    const __VLS_43 = {
        onClick: (...[$event]) => {
            __VLS_ctx.rotate('right');
        }
    };
    let __VLS_39;
    let __VLS_40;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {} }, variant: ("flat"), size: ("small"), icon: ((__VLS_ctx.IconArrowRight)), }));
    const __VLS_46 = __VLS_45({ ...{ 'onClick': {} }, variant: ("flat"), size: ("small"), icon: ((__VLS_ctx.IconArrowRight)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    let __VLS_50;
    const __VLS_51 = {
        onClick: (...[$event]) => {
            __VLS_ctx.rotate('left');
        }
    };
    let __VLS_47;
    let __VLS_48;
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['my-md-16'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['mb-md-0'];
    __VLS_styleScopedClasses['text-h1'];
    __VLS_styleScopedClasses['text-md-left'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['text-decoration-underline'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-md-end'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['pe-lg-0'];
    __VLS_styleScopedClasses['pe-md-9'];
    __VLS_styleScopedClasses['scene'];
    __VLS_styleScopedClasses['cube'];
    __VLS_styleScopedClasses['face'];
    __VLS_styleScopedClasses['bg-light'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['align-start'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['pa-4'];
    __VLS_styleScopedClasses['text-h1'];
    __VLS_styleScopedClasses['font-weight-light'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['position-absolute'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['pa-4'];
    __VLS_styleScopedClasses['text-h1'];
    __VLS_styleScopedClasses['font-weight-light'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['controls'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "cube": __VLS_nativeElements['div'],
    };
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
            IconArrowRight: IconArrowRight,
            IconArrowLeft: IconArrowLeft,
            slider: slider,
            rotationY: rotationY,
            getFaceStyle: getFaceStyle,
            rotate: rotate,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
