<template>
    <div class="city-wrap" v-if="isShow">
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
                <div class="zimu-t" id="{{obj}}">{{obj}}</div>
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

import './index.less';
import {shouzimuList, shouzimuMaps, hotDistrict} from './district'



function City(props) {
    let {isShow, callback} = props;

    function chooseCityEvent(item) {
        callback(item);
    }

    function goTop() {
        document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
        setTimeout(function () {
            document.getElementById('city').scrollTop = 0;
            document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
        }, 50);
    }

    function go(e) {
        var target = document.getElementById(e);
        document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
        setTimeout(function () {
            document.getElementById('city').scrollTop = target.offsetParent.offsetTop;
            document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
        }, 50);
    }
  
    return (
        
    );
}


export default City;