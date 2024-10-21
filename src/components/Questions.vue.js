import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconMinus, IconPlus } from "@tabler/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tab = ref(null);
const questions = ref([
    {
        id: 1,
        name: "Preparation of Sites",
        questions: [
            {
                question: "What is the difference between seo and sem?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "What is a backlink and why is it important?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "Can i do seo optimization of my site myself?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "How Much does seo services cost?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site.",
            },
        ],
    },
    {
        id: 2,
        name: "ERP System",
        questions: [
            {
                question: "How much does an erp system cost?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "How long does it take to implement an erp system?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "What are the benefits of the rp system?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
        ],
    },
    {
        id: 3,
        name: "Email Services",
        questions: [
            {
                question: "How do email archivign and backups work?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "How to create corporate email adresses?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
            {
                question: "Why are corporate email service important?",
                answer: "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
            },
        ],
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
    const __VLS_6 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ title: ("Frequently asked questions"), position: ("center"), ...{ class: ("mb-6") }, }));
    const __VLS_7 = __VLS_6({ title: ("Frequently asked questions"), position: ("center"), ...{ class: ("mb-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VTabs;
    /** @type { [typeof __VLS_components.VTabs, typeof __VLS_components.VTabs, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("center"), }));
    const __VLS_13 = __VLS_12({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    for (const [t] of __VLS_getVForSourceType((__VLS_ctx.questions))) {
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VTab;
        /** @type { [typeof __VLS_components.VTab, typeof __VLS_components.VTab, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ value: ((t.id)), key: ((t.id)), }));
        const __VLS_19 = __VLS_18({ value: ((t.id)), key: ((t.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        (t.name);
        __VLS_nonNullable(__VLS_22.slots).default;
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    }
    __VLS_nonNullable(__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VTabsWindow;
    /** @type { [typeof __VLS_components.VTabsWindow, typeof __VLS_components.VTabsWindow, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ modelValue: ((__VLS_ctx.tab)), ...{ class: ("mt-4") }, }));
    const __VLS_25 = __VLS_24({ modelValue: ((__VLS_ctx.tab)), ...{ class: ("mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    for (const [q] of __VLS_getVForSourceType((__VLS_ctx.questions))) {
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VTabsWindowItem;
        /** @type { [typeof __VLS_components.VTabsWindowItem, typeof __VLS_components.VTabsWindowItem, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ key: ((q.id)), value: ((q.id)), }));
        const __VLS_31 = __VLS_30({ key: ((q.id)), value: ((q.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanels;
        /** @type { [typeof __VLS_components.VExpansionPanels, typeof __VLS_components.VExpansionPanels, ] } */
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ flat: (true), bgColor: ("light"), }));
        const __VLS_37 = __VLS_36({ flat: (true), bgColor: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        for (const [item] of __VLS_getVForSourceType((q.questions))) {
            const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanel;
            /** @type { [typeof __VLS_components.VExpansionPanel, typeof __VLS_components.VExpansionPanel, ] } */
            // @ts-ignore
            const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ text: ((item.answer)), key: ((item.question)), ...{ class: ("my-1") }, expandIcon: ((__VLS_ctx.IconPlus)), collapseIcon: ((__VLS_ctx.IconMinus)), }));
            const __VLS_43 = __VLS_42({ text: ((item.answer)), key: ((item.question)), ...{ class: ("my-1") }, expandIcon: ((__VLS_ctx.IconPlus)), collapseIcon: ((__VLS_ctx.IconMinus)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_46.slots);
                __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("my-2") }, });
                (item.question);
            }
            const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
        }
        __VLS_nonNullable(__VLS_40.slots).default;
        const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
        __VLS_nonNullable(__VLS_34.slots).default;
        const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
    }
    __VLS_nonNullable(__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['pb-16'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['my-2'];
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
            IconMinus: IconMinus,
            IconPlus: IconPlus,
            tab: tab,
            questions: questions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
