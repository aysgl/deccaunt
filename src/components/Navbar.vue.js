import { ref } from "vue";
import { useDisplay } from "vuetify";
import { IconMenu2, IconHome2, IconBriefcase, IconSettings, IconPhone, IconCategory, } from "@tabler/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Navigation menu items
const menu = ref([
    { name: "Home", path: "/", icon: IconHome2 },
    { name: "About", path: "/about", icon: IconBriefcase },
    { name: "Portfolio", path: "/portfolio", icon: IconCategory },
    { name: "Services", path: "/services", icon: IconSettings },
    { name: "Contact", path: "/contact", icon: IconPhone },
]);
// Vuetify display object to handle screen size
const { smAndDown } = useDisplay();
const isSmallScreen = smAndDown;
// Drawer state
const drawer = ref(false);
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VNavigationDrawer;
    /** @type { [typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.VNavigationDrawer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.drawer)), temporary: (true), app: (true), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.drawer)), temporary: (true), app: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.VListItem, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("mt-4") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/deccaountlogo.svg"), width: ("180"), });
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.VList, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ nav: (true), }));
    const __VLS_14 = __VLS_13({ nav: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    for (const [m] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.VListItem, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, key: ((m.name)), ...{ class: ("d-flex justify-space-center") }, }));
        const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, key: ((m.name)), ...{ class: ("d-flex justify-space-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push(m.path);
            }
        };
        let __VLS_21;
        let __VLS_22;
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
        /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.VListItemTitle, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
        /** @type { [typeof __VLS_components.VIcon, ] } */
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ icon: ((m.icon)), color: ("primary"), }));
        const __VLS_34 = __VLS_33({ icon: ((m.icon)), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        (m.name);
        __VLS_nonNullable(__VLS_31.slots).default;
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
    const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
    if (__VLS_ctx.isSmallScreen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("d-flex align-center ga-2") }, });
        const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, ] } */
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.IconMenu2)), variant: ("flat"), color: ("light"), ...{ class: ("rounded-xl") }, }));
        const __VLS_46 = __VLS_45({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.IconMenu2)), variant: ("flat"), color: ("light"), ...{ class: ("rounded-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        let __VLS_50;
        const __VLS_51 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.isSmallScreen)))
                    return;
                __VLS_ctx.drawer = !__VLS_ctx.drawer;
            }
        };
        let __VLS_47;
        let __VLS_48;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/deccaountlogo.svg"), width: ("220"), });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("d-flex justify-space-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/deccaountlogo.svg"), width: ("250"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex ga-2") }, });
        for (const [m] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
            const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
            // @ts-ignore
            const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ to: ((m.path)), key: ((m.name)), ...{ class: ("ms-auto") }, }));
            const __VLS_54 = __VLS_53({ to: ((m.path)), key: ((m.name)), ...{ class: ("ms-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
            const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
            /** @type { [typeof __VLS_components.VBtn, ] } */
            // @ts-ignore
            const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ color: ("light"), ...{ class: ("rounded-xl") }, variant: ("flat"), text: ((m.name)), }));
            const __VLS_60 = __VLS_59({ color: ("light"), ...{ class: ("rounded-xl") }, variant: ("flat"), text: ((m.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
            __VLS_nonNullable(__VLS_57.slots).default;
            const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
        }
        const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, ] } */
        // @ts-ignore
        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ color: ("primary"), ...{ class: ("rounded-xl") }, text: ("get a quote"), prependIcon: ((__VLS_ctx.IconPhone)), elevation: ("5"), }));
        const __VLS_66 = __VLS_65({ color: ("primary"), ...{ class: ("rounded-xl") }, text: ("get a quote"), prependIcon: ((__VLS_ctx.IconPhone)), elevation: ("5"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    }
    __VLS_nonNullable(__VLS_43.slots).default;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-space-center'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['ga-2'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-space-between'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['ga-2'];
    __VLS_styleScopedClasses['ms-auto'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['rounded-xl'];
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
            IconMenu2: IconMenu2,
            IconPhone: IconPhone,
            menu: menu,
            isSmallScreen: isSmallScreen,
            drawer: drawer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
