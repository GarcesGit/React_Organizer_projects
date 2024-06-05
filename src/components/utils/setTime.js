import React from "react";

const setTime = () => {
    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    }

    let date = new Date();

    return (
        addZero(date.getDate()) +
        "." +
        addZero(date.getMonth() + 1) +
        "." +
        addZero(date.getFullYear()) +
        " " +
        addZero(date.getHours()) +
        ":" +
        addZero(date.getMinutes()) +
        ":" +
        addZero(date.getSeconds())
    );
};

export default setTime;
