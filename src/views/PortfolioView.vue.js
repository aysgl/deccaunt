import { ref } from "vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tab = ref(null);
const projects = ref([
    {
        id: 1,
        name: "All Jobs",
        works: [
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
        ],
    },
    {
        id: 2,
        name: "Finished",
        works: [
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
        ],
    },
    {
        id: 3,
        name: "Continue",
        works: [
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
    const __VLS_6 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({ title: ("Works by Deccaount"), ...{ class: ("mb-6") }, }));
    const __VLS_7 = __VLS_6({ title: ("Works by Deccaount"), ...{ class: ("mb-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VTabs;
    /** @type { [typeof __VLS_components.VTabs, typeof __VLS_components.VTabs, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("start"), }));
    const __VLS_13 = __VLS_12({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    for (const [t] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
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
    for (const [q] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.VTabsWindowItem;
        /** @type { [typeof __VLS_components.VTabsWindowItem, typeof __VLS_components.VTabsWindowItem, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ key: ((q.id)), value: ((q.id)), }));
        const __VLS_31 = __VLS_30({ key: ((q.id)), value: ((q.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.VRow, ] } */
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ flat: (true), bgColor: ("light"), }));
        const __VLS_37 = __VLS_36({ flat: (true), bgColor: ("light"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        for (const [w] of __VLS_getVForSourceType((q.works))) {
            const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.VCol, ] } */
            // @ts-ignore
            const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ cols: ("6"), md: ("6"), lg: ("3"), key: ((w.title)), }));
            const __VLS_43 = __VLS_42({ cols: ("6"), md: ("6"), lg: ("3"), key: ((w.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
            const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VCard;
            /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.VCard, ] } */
            // @ts-ignore
            const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ flat: (true), color: ("light"), ...{ class: ("rounded-lg") }, }));
            const __VLS_49 = __VLS_48({ flat: (true), color: ("light"), ...{ class: ("rounded-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
            const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.VImg;
            /** @type { [typeof __VLS_components.VImg, ] } */
            // @ts-ignore
            const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ src: ((w.image)), }));
            const __VLS_55 = __VLS_54({ src: ((w.image)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
            const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
            /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.VCardTitle, ] } */
            // @ts-ignore
            const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ class: ("pb-2") }, }));
            const __VLS_61 = __VLS_60({ ...{ class: ("pb-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
            (w.title);
            __VLS_nonNullable(__VLS_64.slots).default;
            const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
            const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
            /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.VCardText, ] } */
            // @ts-ignore
            const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
            const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-wrap ga-1") }, });
            for (const [t] of __VLS_getVForSourceType((w.tags))) {
                const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VChip;
                /** @type { [typeof __VLS_components.VChip, ] } */
                // @ts-ignore
                const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ key: ((t)), ...{ class: ("mb-1") }, size: ("small"), color: ("primary"), text: ((t)), }));
                const __VLS_73 = __VLS_72({ key: ((t)), ...{ class: ("mb-1") }, size: ("small"), color: ("primary"), text: ((t)), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
            }
            __VLS_nonNullable(__VLS_70.slots).default;
            const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            __VLS_nonNullable(__VLS_52.slots).default;
            const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
            __VLS_nonNullable(__VLS_46.slots).default;
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
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['pb-2'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['ga-1'];
    __VLS_styleScopedClasses['mb-1'];
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
            tab: tab,
            projects: projects,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
