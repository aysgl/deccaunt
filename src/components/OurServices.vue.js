import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const services = ref([
    {
        title: "Preparation of sites",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
        tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
        image: "https://images.pexels.com/photos/4981807/pexels-photo-4981807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Development of ERP systems",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
        tags: ["ERP", "CRM", "HRM", "POS"],
        image: "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Development of mobile applications",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
        tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
        image: "https://images.pexels.com/photos/5717781/pexels-photo-5717781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Corporate Email preparation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
        tags: ["Landing Page", "ERP", "E-Commerce", "Business"],
        image: "https://images.pexels.com/photos/5467594/pexels-photo-5467594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("py-16") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("py-16") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("d-flex align-center") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("d-flex align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ cols: ("8"), ...{ class: ("mx-auto mb-6") }, }));
    const __VLS_14 = __VLS_13({ cols: ("8"), ...{ class: ("mx-auto mb-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ title: ("Our services"), position: ("center"), ...{ class: ("mb-4") }, }));
    const __VLS_19 = __VLS_18({ title: ("Our services"), position: ("center"), ...{ class: ("mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-h4 font-weight-light text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-center") }, });
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ size: ("large"), ...{ class: ("rounded-xl mt-4") }, text: ("More Details"), }));
    const __VLS_25 = __VLS_24({ size: ("large"), ...{ class: ("rounded-xl mt-4") }, text: ("More Details"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ cols: ("12"), }));
    const __VLS_31 = __VLS_30({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    for (const [s] of __VLS_getVForSourceType((__VLS_ctx.services))) {
        const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ cols: ("12"), md: ("6"), lg: ("3"), key: ((s.title)), }));
        const __VLS_43 = __VLS_42({ cols: ("12"), md: ("6"), lg: ("3"), key: ((s.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ color: ("primary"), height: ("100%"), ...{ class: ("rounded-lg text-center") }, }));
        const __VLS_49 = __VLS_48({ color: ("primary"), height: ("100%"), ...{ class: ("rounded-lg text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.VImg;
        /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.VImg, ] } */
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ src: ((s.image)), ...{ class: ("align-center h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"), cover: (true), }));
        const __VLS_55 = __VLS_54({ src: ((s.image)), ...{ class: ("align-center h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"), cover: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
        /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.VCardTitle, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ line: ("2"), ...{ class: ("font-weight-bold") }, }));
        const __VLS_61 = __VLS_60({ line: ("2"), ...{ class: ("font-weight-bold") }, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        (s.title);
        __VLS_nonNullable(__VLS_64.slots).default;
        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.VCardText, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
        const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
        (s.description.slice(0, 100));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-wrap justify-center ga-2 mt-4") }, });
        for (const [t] of __VLS_getVForSourceType((s.tags))) {
            const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VChip;
            /** @type { [typeof __VLS_components.VChip, typeof __VLS_components.VChip, ] } */
            // @ts-ignore
            const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ size: ("small"), key: ((t)), }));
            const __VLS_73 = __VLS_72({ size: ("small"), key: ((t)), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
            (t);
            __VLS_nonNullable(__VLS_76.slots).default;
            const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
        }
        __VLS_nonNullable(__VLS_70.slots).default;
        const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
        __VLS_nonNullable(__VLS_58.slots).default;
        const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
        __VLS_nonNullable(__VLS_52.slots).default;
        const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
        __VLS_nonNullable(__VLS_46.slots).default;
        const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
    }
    __VLS_nonNullable(__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
    __VLS_nonNullable(__VLS_34.slots).default;
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-h4'];
    __VLS_styleScopedClasses['font-weight-light'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['ga-2'];
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
            SectionTitle: SectionTitle,
            services: services,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
