 <template>
  <v-content>
    <div class='outergrid'>
      <div class="innergrid">
        <div class="buttons">
          <div v-for="(rate, i) in rates" :key="i">
            <!-- <div class='buttonContainer'> -->
              <v-btn  @click="addrate(rate)" block outline flat color="buttoncolor" class="button display-1 font-weight-bold" >{{rate}}</v-btn>
              <!-- <div class="button display-1 font-weight-bold">{{rate}}</div> -->
            <!-- </div> -->
          </div>
        </div>
        <div class="top">
          <div id="combinedcalc">{{combinedRate}}%</div>
          <div id="rates">
            <div class="rateDisplay" v-for="(rates, index) in myrates" :key="index">
              <v-chip class='mychips' small @input="popper(index)" close>{{rates}}</v-chip>
            </div>
          </div>
        </div>
        <div  class="right">
          <v-btn @click="clear" id="clearbutton" class='headline' flat block color="success">CLEAR</v-btn>
          <!-- <div id="clear">CLEAR</div> -->
        </div>
      </div>
    </div>

  </v-content>
</template>

<script>
export default {
  name: 'calc',
  props: {},
  data() {
    return {
      rates: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      myrates: [],
      mycalc: Number,
      buttoncolor: '#2a353b',
    };
  },
  methods: {
    popper(i) {
      const r = this.myrates;
      r.splice(i, 1);
    },
    addrate(r) {
      const arr = this.myrates;
      arr.push(r);
      console.log(arr.toString());
    },
    clear() {
      this.myrates = [];
    },
  },
  computed: {
    combinedRate() {
      const r = this.myrates;
      const co = r.reduce((a, c) => a - (a * (c / 100)), 100);
      const mr = 100 - co;
      const rounded = Math.round(mr)
      return rounded;
    },
  },
};
</script>

<style scoped>
body::-webkit-scrollbar { 
    display: none; 
}
#clearbutton {
  height: 33.3%;
  padding: 0px;
  margin: 0px;
   border: 1px solid  #2a353b;
 border-radius: 0px;
}
html {
  overflow: hidden;
}

#clear {
  position: relative;
  transform: rotate(90deg);
  top: 50%;
  font-size: 30px;
  font-weight: bold;
}

#ratemar {
  margin-left: 10px;
  font-size: 25px;
}
.rateDisplay {
  display: inline-block;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
}
.outergrid {
  display: grid;
  grid-template-columns: 0vh 400px 0vh;
  grid-template-rows: 0vh 650px 0vh;
  justify-content: center;
}
.innergrid {
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 2fr 5fr;
  justify-content: center;
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.buttonBorder {
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c7b89;

  position: relative;
  border: none;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.buttonContainer {
  font-size: 35px;
  font-weight: bold;
  color: white;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  background-color: #5c7b89
}
.button {
  text-align: center;
  height: 100%;
  background-color:  #5c7b89;
  margin: 0px;
 border: 1px solid  #2a353b;
 border-radius: 0px;

}
.top {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
  background-color: #2a353b;
  padding-right: 20px;
  padding-left: 20px;
  font-family: roboto;
}
#combinedcalc {
width: 100%;
text-align: right;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  color: white;
  align-self: center;
  justify-self: end;
  font-size: 40px;
  background-color: #5c7b89;
border-radius: 25px;
padding-right: 10px;
box-sizing: border-box;
padding-top: 5px;
padding-bottom: 5px;

}
#rates {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  color: white;
  align-self: center;
  justify-self: end;
  font-size: 40px;
}
.right {
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  background-color: #acbdc4;
}

button#gridbtn {
  width: 100%;
  margin: 0px;
}
</style>
