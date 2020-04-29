<template>
  <div class="App">
    <City v-if="isCityShow"></City>
    <div>
      <span class="label">城市<i>*</i></span>
      <div class="input-w">
          <input type="text" name="cityName" @click="changeCityShow" :value="cityConfig.cityName" placeholder="请选择地区" readOnly="true"/>
          <input type="hidden" name="cityCode" :value="cityConfig.cityCode"/>
      </div>
    </div>

    <div class="item" v-for="(obj, i) in pics" :key="i">
      <div class="pic-box">
        <input type="file" class="file" @change="fileChange($event, i)" accept="image/*"/>
      </div>
      <span>{{obj.name}}</span>
    </div>
    <span @click="skip('/city')">跳转</span>
    <button type="button" @click="submit" class="submit">提交</button>
  </div>
</template>

<style lang="less">
    @import './index.less';
</style>

<script>
  import { mapState } from 'vuex'
  // import store from '../../store'
  import City from '../City/index';
  import * as Api from '../../api/api';

  export default {
    name: 'index',
    data() {
      return {
        isCityShow: false,
        pics: [{
          name: '请上传照片',
          url: '',
          status: 0
        }],
      }
    },
    computed: {
      ...mapState([
                'cityConfig'
            ]),
    },
    mounted() {
      
    },
    methods: {
      changeCityShow() {
        this.isCityShow = !this.isCityShow;
      },
      fileChange(e, index){
        var fileObj = e.target.files[0];
        console.log(fileObj, index);
      },

      submit(){
        Api.request({
          url: '/api/web/bd/jiaxiao-admin/submit.htm',
        }, function (data){
          console.log(data);
        }, function(){

        })
      },
      //跳转页面
      skip(href) {
        this.$router.replace({path: href});
        // this.$router.replace({path: href});
      }
    },
    components: {
        City,
    }
  }
</script>
