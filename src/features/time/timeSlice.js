import { createSlice } from '@reduxjs/toolkit'

function incrementTime(state) {
    // setInterval((state){
    let time = state.value
    parseInt(time.secondes);
    time.secondes++;
    time.secondes.toString();
    if (time.secondes < 10) {
        time.secondes = "0" + time.secondes;
    }
    if (time.secondes > 59) {
        time.secondes = "00"
        parseInt(time.minutes);
        time.minutes++;
        time.minutes.toString();
        if (time.minutes < 10) {
            time.minutes = "0" + time.minutes;
        }
        if (time.minutes > 59) {
            time.minutes = "00";
            time.heures++;
        }
    }
    state.value = time;
    let timeTxt = document.getElementsByClassName("timeTxt")[0];
    if (time.heures > 0){
        timeTxt.style.cssText += "font-size:15px";
    } else {
        timeTxt.style.cssText += "font-size:18px";
    }
}

function timeBonus(state, action) {
    let time = state.value;
    let min = parseInt(time.minutes);
    if (Math.sign(action.payload) === -1 && min < Math.abs(action.payload)) {
        min = 0;
        time.secondes = "00"
    } else {
        min += action.payload;
    }
    let minString = min.toString();
    console.log(min);
    if (min < 10) {
        time.minutes = "0" + minString;
    } else {
        time.minutes = minString;
    }
    if (min > 59) {
        time.minutes = "00";
        time.heures++;
    }
    state.value= time;
    let timeBlock = document.getElementsByClassName("timeBlock")[0];
    let timeTxt = document.getElementsByClassName("timeTxt")[0];
    let timeTxtBonus = document.getElementsByClassName("timeTxtBonus")[0];
    timeBlock.style.cssText = "background:black"
    timeTxt.style.cssText += "opacity:0"
    console.log(timeTxt.textContent);
    if (action.payload > 0){
        timeTxtBonus.textContent = "+"+action.payload+" : 00";
        timeTxtBonus.style.cssText = "font-weight:700;color:#3DCB5B";
    } else {
        timeTxtBonus.textContent = action.payload+" : 00";
        timeTxtBonus.style.cssText = "font-weight:700;color:#C41515";
    }
    setTimeout(() => {
        timeBlock.style.cssText = "";
        timeTxt.style.cssText += "opacity:1"
        timeTxtBonus.textContent = "";
    },2000)
}

export const timeSlice = createSlice({
    name: 'time',
    initialState: {
        value: {
            minutes: "00",
            secondes: "00",
            heures: "0"
        },
    },
    reducers: {
        start: (state) => {
            incrementTime(state);
        },
        bonus: (state, value) => {
            timeBonus(state, value);
        }
    },
})

export const { start,bonus } = timeSlice.actions

export default timeSlice.reducer;