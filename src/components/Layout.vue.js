import { RouterView, useRoute } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { ref, computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const breadcrumbs = ref(["Foo", "Bar", "Fizz"]);
const showBreadcrumbs = computed(() => route.path !== "/");
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VApp;
    /** @type { [typeof __VLS_components.VApp, typeof __VLS_components.VApp, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [Navbar,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    if (__VLS_ctx.showBreadcrumbs) {
        const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
        /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.VContainer, ] } */
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{ class: ("px-0") }, }));
        const __VLS_13 = __VLS_12({ ...{ class: ("px-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VBreadcrumbs;
        /** @type { [typeof __VLS_components.VBreadcrumbs, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ items: ((__VLS_ctx.breadcrumbs)), }));
        const __VLS_19 = __VLS_18({ items: ((__VLS_ctx.breadcrumbs)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_nonNullable(__VLS_16.slots).default;
        const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    }
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VMain;
    /** @type { [typeof __VLS_components.VMain, typeof __VLS_components.VMain, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ app: (true), }));
    const __VLS_25 = __VLS_24({ app: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_nonNullable(__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['px-0'];
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
            RouterView: RouterView,
            Navbar: Navbar,
            Footer: Footer,
            breadcrumbs: breadcrumbs,
            showBreadcrumbs: showBreadcrumbs,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
