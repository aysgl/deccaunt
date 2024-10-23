import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconSend, } from "@tabler/icons-vue";
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Navigation menu items
const menu = ref([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("py-4") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ cols: ("12"), md: ("4"), ...{ class: ("text-md-left text-center") }, }));
    const __VLS_14 = __VLS_13({ cols: ("12"), md: ("4"), ...{ class: ("text-md-left text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/deccaountlogo.svg"), width: ("250"), });
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ cols: ("12"), md: ("8"), ...{ class: ("d-flex justify-md-end") }, }));
    const __VLS_20 = __VLS_19({ cols: ("12"), md: ("8"), ...{ class: ("d-flex justify-md-end") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VFlex;
    /** @type { [typeof __VLS_components.VFlex, typeof __VLS_components.VFlex, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("d-flex justify-center flex-wrap ga-1") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("d-flex justify-center flex-wrap ga-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VChip;
        /** @type { [typeof __VLS_components.VChip, typeof __VLS_components.VChip, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ color: ("primary"), key: ((item.name)), }));
        const __VLS_32 = __VLS_31({ color: ("primary"), key: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        (item.name);
        __VLS_nonNullable(__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ cols: ("12"), md: ("4"), ...{ class: ("text-md-left text-center") }, }));
    const __VLS_38 = __VLS_37({ cols: ("12"), md: ("4"), ...{ class: ("text-md-left text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_nonNullable(__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ cols: ("12"), md: ("4"), ...{ class: ("d-flex flex-column text-md-left text-center") }, }));
    const __VLS_44 = __VLS_43({ cols: ("12"), md: ("4"), ...{ class: ("d-flex flex-column text-md-left text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ prependIcon: ((__VLS_ctx.IconSend)), text: ("Write to Us"), ...{ class: ("rounded-xl") }, }));
    const __VLS_50 = __VLS_49({ prependIcon: ((__VLS_ctx.IconSend)), text: ("Write to Us"), ...{ class: ("rounded-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_nonNullable(__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ cols: ("12"), md: ("4"), ...{ class: ("d-flex flex-column justify-start align-md-end align-center") }, }));
    const __VLS_56 = __VLS_55({ cols: ("12"), md: ("4"), ...{ class: ("d-flex flex-column justify-start align-md-end align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-md-start justify-center ga-1") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ size: ("small"), icon: ((__VLS_ctx.IconBrandInstagram)), variant: ("elevated"), }));
    const __VLS_62 = __VLS_61({ size: ("small"), icon: ((__VLS_ctx.IconBrandInstagram)), variant: ("elevated"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ size: ("small"), icon: ((__VLS_ctx.IconBrandFacebook)), variant: ("elevated"), }));
    const __VLS_68 = __VLS_67({ size: ("small"), icon: ((__VLS_ctx.IconBrandFacebook)), variant: ("elevated"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ size: ("small"), icon: ((__VLS_ctx.IconBrandLinkedin)), variant: ("elevated"), }));
    const __VLS_74 = __VLS_73({ size: ("small"), icon: ((__VLS_ctx.IconBrandLinkedin)), variant: ("elevated"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_nonNullable(__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ cols: ("12"), ...{ class: ("text-md-left text-center") }, }));
    const __VLS_80 = __VLS_79({ cols: ("12"), ...{ class: ("text-md-left text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    __VLS_nonNullable(__VLS_83.slots).default;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['text-md-left'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-md-end'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['ga-1'];
    __VLS_styleScopedClasses['text-md-left'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['text-md-left'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['justify-start'];
    __VLS_styleScopedClasses['align-md-end'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-md-start'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['ga-1'];
    __VLS_styleScopedClasses['text-md-left'];
    __VLS_styleScopedClasses['text-center'];
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
            IconBrandFacebook: IconBrandFacebook,
            IconBrandInstagram: IconBrandInstagram,
            IconBrandLinkedin: IconBrandLinkedin,
            IconSend: IconSend,
            menu: menu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
