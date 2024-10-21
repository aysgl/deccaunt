import { computed, ref } from "vue";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { useDisplay } from "vuetify";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const totalItems = 20;
const carouselItems = ref(Array.from({ length: totalItems }, (_, index) => index + 1));
const { width } = useDisplay();
const groupedItems = computed(() => {
    const groups = [];
    const itemsPerSlide = getCols();
    for (let i = 0; i < carouselItems.value.length; i += itemsPerSlide) {
        groups.push(carouselItems.value.slice(i, i + itemsPerSlide));
    }
    return groups;
});
const getCols = () => {
    if (width.value >= 1280) {
        return 10;
    }
    else if (width.value >= 960) {
        return 7;
    }
    else if (width.value >= 600) {
        return 5;
    }
    else if (width.value >= 300) {
        return 3;
    }
    else {
        return 1;
    }
};
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("carouselContainer"), }));
    const __VLS_2 = __VLS_1({ ref: ("carouselContainer"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const carouselContainer = ref()`
    __VLS_ctx.carouselContainer;
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VFlex;
    /** @type { [typeof __VLS_components.VFlex, typeof __VLS_components.VFlex, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCarousel;
    /** @type { [typeof __VLS_components.VCarousel, typeof __VLS_components.VCarousel, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ hideDelimiters: (true), cycle: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), height: ("140px"), showArrows: ("hover"), ...{ class: ("d-flex justify-center") }, }));
    const __VLS_15 = __VLS_14({ hideDelimiters: (true), cycle: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), height: ("140px"), showArrows: ("hover"), ...{ class: ("d-flex justify-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    for (const [group, index] of __VLS_getVForSourceType((__VLS_ctx.groupedItems))) {
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCarouselItem;
        /** @type { [typeof __VLS_components.VCarouselItem, typeof __VLS_components.VCarouselItem, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ key: ((index)), ...{ class: ("my-2") }, }));
        const __VLS_21 = __VLS_20({ key: ((index)), ...{ class: ("my-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VLayout;
        /** @type { [typeof __VLS_components.VLayout, typeof __VLS_components.VLayout, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ row: (true), }));
        const __VLS_27 = __VLS_26({ row: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        for (const [item] of __VLS_getVForSourceType((group))) {
            const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VFlex;
            /** @type { [typeof __VLS_components.VFlex, typeof __VLS_components.VFlex, ] } */
            // @ts-ignore
            const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ key: ((item)), }));
            const __VLS_33 = __VLS_32({ key: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCard;
            /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
            // @ts-ignore
            const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ color: ("light"), flat: (true), ...{ class: ("pa-8 ma-2 rounded-lg") }, }));
            const __VLS_39 = __VLS_38({ color: ("light"), flat: (true), ...{ class: ("pa-8 ma-2 rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (item);
            __VLS_nonNullable(__VLS_42.slots).default;
            const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
            __VLS_nonNullable(__VLS_36.slots).default;
            const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
        }
        __VLS_nonNullable(__VLS_30.slots).default;
        const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        __VLS_nonNullable(__VLS_24.slots).default;
        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
    }
    __VLS_nonNullable(__VLS_18.slots).default;
    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    __VLS_nonNullable(__VLS_12.slots).default;
    const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['my-2'];
    __VLS_styleScopedClasses['pa-8'];
    __VLS_styleScopedClasses['ma-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "carouselContainer": __VLS_6,
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
            IconArrowLeft: IconArrowLeft,
            IconArrowRight: IconArrowRight,
            groupedItems: groupedItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
