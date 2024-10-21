import { defineProps } from "vue";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    title: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default: "left",
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: "left",
        },
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-h2 font-weight-bold") }, ...{ class: (('text-' + __VLS_ctx.position)) }, });
    (__VLS_ctx.title);
    __VLS_styleScopedClasses['text-h2'];
    __VLS_styleScopedClasses['font-weight-bold'];
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
        return {};
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: "left",
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: "left",
        },
    },
});
;
