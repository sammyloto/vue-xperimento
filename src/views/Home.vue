<template>
    <div class="body">
        <div class="left-col">
            <side-menu></side-menu>
        </div>
        <div class="right-col">
            <h3>conditional rendering example</h3>
            <div class="nav">
                <div @click="toggleDivOne()">div1</div>
                <div @click="toggleDivTwo()">div2</div>
                <div @click="toggleDivThree()">div3</div>
            </div>

            <div
                id="div1"
                v-if="divone">
                div One
            </div>
            <div
                id="div2"
                v-if="divtwo">
                div Two
            </div>
            <div
                id="div3"
                v-if="divthree">
                div Three
            </div>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/navigation/SideMenu.vue';
// import SideMenu from '../components/navigation/SideMenu.vue';

export default {
    name: 'Integrations',
    components: {
        'side-menu': SideMenu,
    },

    data() {
        return {
            divone: true,
            divtwo: false,
            divthree: false,
        };
    },
    methods: {
        async toggleDivOne() {
            this.divone = true;
            this.divtwo = false;
            this.divthree = false;
        },

        async toggleDivTwo() {
            this.divone = false;
            this.divtwo = true;
            this.divthree = false;
        },

        async toggleDivThree() {
            this.divone = false;
            this.divtwo = false;
            this.divthree = true;
        },
    },
};
</script>

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
.nav {
    display: flex;
    border: 1px solid goldenrod;
    width: 50%;
    justify-content: space-around;
}

.nav :nth-child(1) {
    border: 1px solid goldenrod;
}
</style>
