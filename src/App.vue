<template>
  <div id="app">
    <h3>基本</h3>
    <Address @change="handleChange"/>
    <p>{{ address }}</p>

    <h3>default-first</h3>
    <Address @change="handleChange" default-first/>

    <h3>use props :county='新竹市' :city='東區'</h3>
    <Address :county="address3.county" :city="address3.city"  @change="handleChange"/>
  </div>
</template>

<script>
import Address from './components/Address.vue'

export default {
  name: 'app',
  data () {
    return {
      address: {
        county: '臺北市',
        city: '中正區'
      },
      address2: '',
      address3: {
        county: '新竹市',
        city: '東區'
      }
    }
  },
  components: {
    Address
  },
  methods: {
    handleChange (data) {
      console.log('data', data)
      this.address = data
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
