import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const reviews = ref([
    {
        name: "John Doe",
        comment: "I was really satisfied with the service, everything was great!",
        rating: 5,
    },
    {
        name: "Jane Smith",
        comment: "Good value for money, met my expectations.",
        rating: 4,
    },
    {
        name: "Sarah Johnson",
        comment: "I faced some issues, but customer service resolved them.",
        rating: 3,
    },
    {
        name: "Michael Brown",
        comment: "Excellent quality service, highly recommend it.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        comment: "There was a slight delay, but overall I'm happy.",
        rating: 4,
    },
]);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VCarousel;
    /** @type { [typeof __VLS_components.VCarousel, typeof __VLS_components.vCarousel, typeof __VLS_components.VCarousel, typeof __VLS_components.vCarousel, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("rounded-lg") }, height: ("300"), showArrows: ("hover"), cycle: (true), hideDelimiterBackground: (true), hideDelimiters: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("rounded-lg") }, height: ("300"), showArrows: ("hover"), cycle: (true), hideDelimiterBackground: (true), hideDelimiters: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [review, i] of __VLS_getVForSourceType((__VLS_ctx.reviews))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VCarouselItem;
        /** @type { [typeof __VLS_components.VCarouselItem, typeof __VLS_components.vCarouselItem, typeof __VLS_components.VCarouselItem, typeof __VLS_components.vCarouselItem, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((i)), }));
        const __VLS_8 = __VLS_7({ key: ((i)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VSheet;
        /** @type { [typeof __VLS_components.VSheet, typeof __VLS_components.vSheet, typeof __VLS_components.VSheet, typeof __VLS_components.vSheet, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ height: ("100%"), color: ("primary"), }));
        const __VLS_14 = __VLS_13({ height: ("100%"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex fill-height justify-center align-center flex-column") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VAvatar;
        /** @type { [typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ color: ("light"), size: ("large"), variant: ("tonal"), ...{ class: ("mb-3") }, }));
        const __VLS_20 = __VLS_19({ color: ("light"), size: ("large"), variant: ("tonal"), ...{ class: ("mb-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (review.name.slice(0, 1));
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h4 mb-4") }, });
        (review.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h3") }, });
        (review.comment);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
        (review.rating);
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['fill-height'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-h4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-h3'];
    __VLS_styleScopedClasses['mt-4'];
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
            IconArrowLeft: IconArrowLeft,
            IconArrowRight: IconArrowRight,
            reviews: reviews,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
