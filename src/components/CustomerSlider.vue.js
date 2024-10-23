import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ fluid: (true), ...{ class: ("position-relative") }, }));
    const __VLS_2 = __VLS_1({ fluid: (true), ...{ class: ("position-relative") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("bg-black rounded-lg position-absolute bottom-0 right-0 left-0") }, maxWidth: ("788"), }));
    const __VLS_8 = __VLS_7({ ...{ class: ("bg-black rounded-lg position-absolute bottom-0 right-0 left-0") }, maxWidth: ("788"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VSlideGroup;
    /** @type { [typeof __VLS_components.VSlideGroup, typeof __VLS_components.VSlideGroup, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ showArrows: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), }));
    const __VLS_14 = __VLS_13({ showArrows: (true), prevIcon: ((__VLS_ctx.IconArrowLeft)), nextIcon: ((__VLS_ctx.IconArrowRight)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    for (const [n] of __VLS_getVForSourceType((20))) {
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VSlideGroupItem;
        /** @type { [typeof __VLS_components.VSlideGroupItem, typeof __VLS_components.VSlideGroupItem, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ key: ((n)), }));
        const __VLS_20 = __VLS_19({ key: ((n)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ flat: (true), ...{ class: ("px-9 py-4 ma-1 d-grid") }, color: ("white"), }));
        const __VLS_26 = __VLS_25({ flat: (true), ...{ class: ("px-9 py-4 ma-1 d-grid") }, color: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        (n);
        __VLS_nonNullable(__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['position-absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['px-9'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ma-1'];
    __VLS_styleScopedClasses['d-grid'];
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
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
