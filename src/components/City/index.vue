<template>
    <div class="city-wrap">
        <div class="city" id="city">
            <div id="hot" class="hot-wrap">
                <div class="hot-t">热门城市</div>
                <div class="hot-r" v-for="(obj, i) in hotDistrict" :key="i">
                    <div class="hot-item" v-for="(item, j) in obj" :key="j">
                        <div class="hot-txt" @click="chooseCityEvent(item)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            
            <div class="zimu-wrap" v-for="(obj, i) in shouzimuList" :key="i">
                <div class="zimu-t" :id="obj">{{obj}}</div>
                <div class="zimu-d" v-for="(item, j) in shouzimuMaps[obj]" :key="j">
                    <span @click="chooseCityEvent(item)">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="zimu-nav">
            <div data-id="hot" @click="goTop">#</div>
            <div v-for="(item,i) in shouzimuList" @click="go(item)" :key="i">{{item}}</div>
        </div>
    </div>
</template>

<style lang="less">
    @import './index.less';
</style>

<script>
    import {shouzimuList, shouzimuMaps, hotDistrict} from './district'
    import { mapState } from 'vuex'
    import store from '../../store'

    export default {
        name: 'index',
        data() {
            return {
                hotDistrict:hotDistrict,
                shouzimuList:shouzimuList,
                shouzimuMaps:shouzimuMaps
            }
        },
        computed: {
        ...mapState([
                    'cityConfig'
                ]),
        },
        methods: {
            chooseCityEvent(item) {
                store.commit('update',['cityConfig',{cityName: item.name, cityCode: item.code}]);
                console.log(this);
                this.$parent.changeCityShow();
            },
            goTop() {
                document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
                setTimeout(function () {
                    document.getElementById('city').scrollTop = 0;
                    document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
                }, 50);
            },
            go(e) {
                var target = document.getElementById(e);
                document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
                setTimeout(function () {
                    document.getElementById('city').scrollTop = target.offsetParent.offsetTop;
                    document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
                }, 50);
            }
        }
    }
</script>


