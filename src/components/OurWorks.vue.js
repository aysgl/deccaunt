import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconArrowUpRight } from "@tabler/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const works = ref([
    {
        title: "Phoenix Polymer",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["Ecommerce"],
    },
    {
        title: "Shamkir Agro Logistics",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["Corporate", "Business"],
    },
    {
        title: "Reginal Group",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["Corporate"],
    },
    {
        title: "SamWood",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["Corporate", "Business"],
    },
    {
        title: "Victory",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["E-commerce"],
    },
    {
        title: "iRobot",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["E-commerce"],
    },
    {
        title: "Social Partner",
        description: "E-commerce website built with Phoenix Polymer framework",
        image: "https://placehold.co/600x400/012ead/e1e6f5",
        tags: ["Corporate"],
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ title: ("Our Latest Work"), ...{ class: ("mb-6") }, }));
    const __VLS_7 = __VLS_6({ title: ("Our Latest Work"), ...{ class: ("mb-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    for (const [w] of __VLS_getVForSourceType((__VLS_ctx.works))) {
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ cols: ("6"), md: ("6"), lg: ("3"), key: ((w.title)), }));
        const __VLS_19 = __VLS_18({ cols: ("6"), md: ("6"), lg: ("3"), key: ((w.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-h4") }, });
        (w.title);
        const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VImg;
        /** @type { [typeof __VLS_components.VImg, ] } */
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ ...{ class: ("rounded-lg my-2") }, src: ((w.image)), }));
        const __VLS_25 = __VLS_24({ ...{ class: ("rounded-lg my-2") }, src: ((w.image)), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-wrap ga-1") }, });
        for (const [t] of __VLS_getVForSourceType((w.tags))) {
            const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VChip;
            /** @type { [typeof __VLS_components.VChip, ] } */
            // @ts-ignore
            const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ key: ((t)), ...{ class: ("mb-1") }, size: ("small"), color: (""), text: ((t)), }));
            const __VLS_31 = __VLS_30({ key: ((t)), ...{ class: ("mb-1") }, size: ("small"), color: (""), text: ((t)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        }
        __VLS_nonNullable(__VLS_22.slots).default;
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    }
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ cols: ("6"), lg: ("3"), md: ("6"), }));
    const __VLS_37 = __VLS_36({ cols: ("6"), lg: ("3"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-h4 text-white") }, });
    const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VResponsive;
    /** @type { [typeof __VLS_components.VResponsive, typeof __VLS_components.VResponsive, ] } */
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ aspectRatio: ((6 / 4)), ...{ class: ("my-2") }, }));
    const __VLS_43 = __VLS_42({ aspectRatio: ((6 / 4)), ...{ class: ("my-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ size: ("lg"), variant: ("tonal"), color: ("primary"), ...{ class: ("w-100 h-100 rounded-lg") }, }));
    const __VLS_49 = __VLS_48({ size: ("lg"), variant: ("tonal"), color: ("primary"), ...{ class: ("w-100 h-100 rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    const __VLS_53 = ((__VLS_ctx.IconArrowUpRight));
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ size: ("30"), }));
    const __VLS_55 = __VLS_54({ size: ("30"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    __VLS_nonNullable(__VLS_52.slots).default;
    const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
    __VLS_nonNullable(__VLS_46.slots).default;
    const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
    __VLS_nonNullable(__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
    __VLS_nonNullable(__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-h4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['my-2'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['ga-1'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-h4'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['my-2'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['rounded-lg'];
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
            SectionTitle: SectionTitle,
            IconArrowUpRight: IconArrowUpRight,
            works: works,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
