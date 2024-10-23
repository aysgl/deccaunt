import SectionTitle from "@/components/common/SectionTitle.vue";
import CustomerReview from "@/components/CustomerReview.vue";
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ ...{ class: ("mb-6") }, title: ("Let us tell you a little about ourselves"), }));
    const __VLS_7 = __VLS_6({ ...{ class: ("mb-6") }, title: ("Let us tell you a little about ourselves"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ cols: ("6"), }));
    const __VLS_19 = __VLS_18({ cols: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ color: ("primary"), flat: (true), ...{ class: ("rounded-lg") }, }));
    const __VLS_25 = __VLS_24({ color: ("primary"), flat: (true), ...{ class: ("rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VImg;
    /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.VImg, ] } */
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{ class: ("align-end h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"), src: ("https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg"), }));
    const __VLS_31 = __VLS_30({ ...{ class: ("align-end h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"), src: ("https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.VCardTitle, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ class: ("text-h3 font-weight-bold") }, }));
    const __VLS_37 = __VLS_36({ ...{ class: ("text-h3 font-weight-bold") }, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_nonNullable(__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
    const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.VCardText, ] } */
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({}));
    const __VLS_43 = __VLS_42({}, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_nonNullable(__VLS_46.slots).default;
    const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
    __VLS_nonNullable(__VLS_34.slots).default;
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
    __VLS_nonNullable(__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    __VLS_nonNullable(__VLS_22.slots).default;
    const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ cols: ("6"), }));
    const __VLS_49 = __VLS_48({ cols: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ color: ("primary"), flat: (true), ...{ class: ("rounded-lg") }, }));
    const __VLS_55 = __VLS_54({ color: ("primary"), flat: (true), ...{ class: ("rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.VImg;
    /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.VImg, ] } */
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ class: ("align-end h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"), src: ("https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), }));
    const __VLS_61 = __VLS_60({ ...{ class: ("align-end h-100") }, gradient: ("to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"), src: ("https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.VCardTitle, ] } */
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{ class: ("text-h3 font-weight-bold") }, }));
    const __VLS_67 = __VLS_66({ ...{ class: ("text-h3 font-weight-bold") }, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    __VLS_nonNullable(__VLS_70.slots).default;
    const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
    const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.VCardText, ] } */
    // @ts-ignore
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({}));
    const __VLS_73 = __VLS_72({}, ...__VLS_functionalComponentArgsRest(__VLS_72));
    __VLS_nonNullable(__VLS_76.slots).default;
    const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
    __VLS_nonNullable(__VLS_64.slots).default;
    const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
    __VLS_nonNullable(__VLS_58.slots).default;
    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
    __VLS_nonNullable(__VLS_52.slots).default;
    const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
    __VLS_nonNullable(__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ ...{ class: ("mb-6 mt-16") }, title: ("References"), position: ("center"), }));
    const __VLS_78 = __VLS_77({ ...{ class: ("mb-6 mt-16") }, title: ("References"), position: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({}));
    const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
    for (const [item] of __VLS_getVForSourceType((18))) {
        const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
        // @ts-ignore
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ cols: ("2"), key: ((item)), }));
        const __VLS_90 = __VLS_89({ cols: ("2"), key: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
        const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
        // @ts-ignore
        const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ color: ("light"), flat: (true), ...{ class: ("pa-10 rounded-lg") }, }));
        const __VLS_96 = __VLS_95({ color: ("light"), flat: (true), ...{ class: ("pa-10 rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_95));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (item);
        __VLS_nonNullable(__VLS_99.slots).default;
        const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
        __VLS_nonNullable(__VLS_93.slots).default;
        const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    }
    __VLS_nonNullable(__VLS_87.slots).default;
    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
    // @ts-ignore
    [SectionTitle,];
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ ...{ class: ("mb-6 mt-16") }, title: ("Reviews of our customers"), position: ("center"), }));
    const __VLS_101 = __VLS_100({ ...{ class: ("mb-6 mt-16") }, title: ("Reviews of our customers"), position: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
    // @ts-ignore
    [CustomerReview,];
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(CustomerReview, new CustomerReview({}));
    const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['align-end'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['text-h3'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['align-end'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['text-h3'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['mt-16'];
    __VLS_styleScopedClasses['pa-10'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['mt-16'];
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
            CustomerReview: CustomerReview,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
