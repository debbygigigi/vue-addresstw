<template>
  <div class="vue-address">
    <select :name="name" v-model="countyValue">
      <option value="" disabled>請選擇</option>
      <option v-for="county in counties" :key="county" :value="county">{{ county }}</option>
    </select>
    <select :name="name" v-model="cityValue">
      <option value="" disabled>請選擇</option>
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select>
  </div>
</template>

<script>
import { counties, zipcodes } from '../utils'

export default {
  props: {
    name: {
      type: String,
      default: 'county'
    },
    defaultFirst: {
      type: Boolean,
      default: false
    },
    city: {
      type: String,
      default: ''
    },
    county: {
      type: String,
      default: ''
    }
  },
  watch: {
    countyValue (val, oldVal) {
      if (this.defaultFirst) {
        this.cityValue = this.cities[0]
      }
      this.handleChange()
    },
    cityValue (val, oldVal) {
      this.handleChange()
    }
  },
  data () {
    return {
      counties,
      countyValue: '',
      cityValue: ''
    }
  },
  computed: {
    cities () {
      if (!this.countyValue) {
        return []
      }
      return zipcodes
        .filter(zipcode => zipcode.county === this.countyValue)
        .map(zipcode => zipcode.city)
    },
    zipcodeValue () {
      return zipcodes
        .filter(zipcode => zipcode.county === this.countyValue)
        .find(zipcode => zipcode.city === this.cityValue)
        .zipcode
    }
  },

  created () {
    this.countyValue = this.county
    this.cityValue = this.city

    if (this.defaultFirst && !this.county) {
      this.countyValue = counties[0]
    }
  },

  methods: {
    handleChange () {
      this.$emit('change', {
        county: this.countyValue,
        city: this.cityValue,
        zipcode: this.zipcodeValue
      })
    }
  }
}
</script>
