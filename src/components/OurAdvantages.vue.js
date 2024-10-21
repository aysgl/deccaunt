import { IconPhone, IconMapDollar, IconSettings, IconShieldHalfFilled, } from "@tabler/icons-vue";
import SectionTitle from "./common/SectionTitle.vue";
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const advanteges = ref([
    {
        title: "Honest communication",
        description: "Our platform ensures that our messages are honest and transparent.",
        icons: IconPhone,
    },
    {
        title: "Transparent prices",
        description: "Our platform ensures that our messages are honest and transparent.",
        icons: IconMapDollar,
    },
    {
        title: "Guaranteed delivery time",
        description: "Our platform ensures that our messages are honest and transparent.",
        icons: IconShieldHalfFilled,
    },
    {
        title: "Professional experience",
        description: "Our platform ensures that our messages are honest and transparent.",
        icons: IconSettings,
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("pb-16") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("pb-16") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ title: ("Our Advantages"), ...{ class: ("mb-8") }, }));
    const __VLS_7 = __VLS_6({ title: ("Our Advantages"), ...{ class: ("mb-8") }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    for (const [a] of __VLS_getVForSourceType((__VLS_ctx.advanteges))) {
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ cols: ("12"), md: ("3"), key: ((a.title)), }));
        const __VLS_19 = __VLS_18({ cols: ("12"), md: ("3"), key: ((a.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ color: ("light"), ...{ class: ("h-100 rounded-lg") }, flat: (true), }));
        const __VLS_25 = __VLS_24({ color: ("light"), ...{ class: ("h-100 rounded-lg") }, flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.VCardText, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
        const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-end mb-4") }, });
        const __VLS_35 = ((a.icons));
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ color: ("rgb(var(--v-theme-primary))"), size: ((60)), }));
        const __VLS_37 = __VLS_36({ color: ("rgb(var(--v-theme-primary))"), size: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (a.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (a.description);
        __VLS_nonNullable(__VLS_34.slots).default;
        const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
        __VLS_nonNullable(__VLS_28.slots).default;
        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
        __VLS_nonNullable(__VLS_22.slots).default;
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    }
    __VLS_nonNullable(__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['pb-16'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['mb-4'];
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
            advanteges: advanteges,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
