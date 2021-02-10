<template>
  <div class="home">
    <div @click="NIm">{{message}}</div>
    <div v-for="(item,index) in arr" :key="index" @click="go({index:index})">{{item}}</div>
    <input  v-model="mo"  @input="chmo"/>
  </div>
</template>

<script lang="ts">
import store from  "../store/index"
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  data(){
    return {

    }
  },
  beforeCreate() {
    console.log("777")
  },
  created() {
    console.log("7777")
  },
  beforeMount() {
    console.log(this.arr)
  },
  mounted() {
    console.log(this.arr)
    console.log(store)
  }
})
export default class Home extends Vue {
  public message="123";
  public  mo="hello";
  public arr=[1,2,3];
  public  go=({...index})=>{
    this.arr.splice(index.index,1)
  }
  public chmo=()=>{
    console.log(this.mo)
  }
  public NIm=()=>{
    store.commit("che")
    console.log(store.state)
  }
}
</script>
