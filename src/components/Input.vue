<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <input class="border border-dark-gray placeholder:text-dark-gray rounded-[10px] pl-[15px] pr-[6px] py-[10px]"
        :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)"
        ref="input" />
</template>