<template>
    <div class="body">
        <div class="left-col">1</div>
        <div class="right-col">2</div>
    </div>
</template>

<style lang="css" scoped>
.body {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1em;
    }

.left-col {
    flex: 1;
    border: 1px solid goldenrod;
    }

.right-col {
    flex: 4;
    border: 1px solid goldenrod;
    }
</style>
