<template>
  <div class="wrapper">
    <div id="app-content">
      <h1>
        Days-to-Bits Demo
      </h1>
      <p>
        This demo shows the package working and validates that the conversions are correct. Please note this demo is NOT mobile friendly. <a target="_blank" href="https://github.com/bvdalling/days-to-bits">Github Repository</a>
      </p>
      <hr>
      <div class="output">
        <div class="label">
          Unpacked
        </div>
        <div class="value">
          {{ Bit.unpackDays(packed, Types.short) }}
        </div>
      </div>
      <div class="output">
        <div class="label">
          Packed
        </div>
        <div class="value">
          {{ Bit.packDays(selectedDays) }}
        </div>
      </div>
      <div class="form">
        <div class="input">
          <label for="decimal">Decimal Value</label>
          <div>
            <input type="number" v-model="packed" @focus="selectedDays = []" @keyup="selectedDays = Bit.unpackDays(packed)" name="decimal" id="decimal"/>
          </div>
        </div>
        <div class="input">
          <label for="decimal">Selectable Days</label>
          <div>
            <select v-model="selectedDays" @change="packed = Bit.packDays(selectedDays)" name="" id="" multiple>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bit, { FULL, SHORT, NUMBERS } from 'daystobits'

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      packed: null,
      selectedDays: [],
      Bit: Bit,
      Types: {
        short: SHORT,
        full: FULL,
        numbers: NUMBERS
      }
    }
  },
  computed: {
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: rgba(0,0,0,0.05);
  padding: 0;
  margin: 0;
}

.wrapper {
  max-width: 1920px;
  height: 100vh;

  margin: 0 auto;

  border-left: 2px solid rgb(214, 214, 214);
  border-right: 2px solid rgb(214, 214, 214);

  display: flex;

  justify-content: center;
  align-items: center;
}

#app-content {
  width: 33.33%;

  padding: 2rem;

  background-color: white;

  box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.05);

  border-radius: 5px;
}

.output {
  display: flex;

  flex-direction: column;

  margin: 1rem 0;
}

.output .label {
  width: 100%;
  padding-bottom: .25rem;
}

.output .value {
  background-color: rgba(0,0,0,0.15);
  padding: .25rem;
  border-radius: 5px;
}

.form {
  width: 100%;

  display: flex;
}

.form .input {
  width: 50%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.form .input label {
  width: 100%;
  padding-bottom: .25rem;
}

.form .input:first-of-type div input {
  width: 100%;
  padding: .25rem;
}

.form .input:first-of-type {
  width: 100%;
  padding-right: 1rem;
}

.form .input:last-of-type {
  width: 100%;
  padding-left: 1rem;
}

select {
  height: 150px;
  width: 100%;
}
</style>
