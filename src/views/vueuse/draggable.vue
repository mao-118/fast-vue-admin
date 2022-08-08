<template>
    <div class="app-container">
        <div :style="style" ref="dragRef" class="drag-box">
            <p>I Can Drag.</p>
            <p>I am at {{ x }},{{ y }}</p>
        </div>
    </div>
</template>
<script setup>
import { useDraggable } from '@vueuse/core';

const dragRef = ref();
const { x, y, style } = useDraggable(dragRef, { initialValue: { x: 260, y: 200 } });
</script>
<style scoped>
.drag-box {
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    padding: 20px;
    cursor: move;
    position: fixed;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 5px #ccc;
}
</style>
