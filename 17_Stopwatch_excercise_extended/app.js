/**
 * Previous example in chapter 10 has modified with prototypes and closures
 */

function Stopwatch() {
  let duration = 0.0;
  let started = false;
  let startTimeStamp = 0;
  let stopTimeStamp = 0;

  let calculateDuration = () => {
    duration = (stopTimeStamp - startTimeStamp) / 1000;
  };

  let getParams = function () {
    function getByParamNameString(param) {
      switch (param) {
        case "started":
          return started;
          break;
        case "startTimeStamp":
          return startTimeStamp;
          break;
        case "stopTimeStamp":
          return stopTimeStamp;
          break;
        case "calculateDuration":
          calculateDuration();
          return true;
          break;
      }
    }
    return getByParamNameString;
  };

  let setParams = function () {
    function setByParamNameString(param, value) {
      switch (param) {
        case "started":
          started = value;
          break;
        case "startTimeStamp":
          startTimeStamp = value;
          break;
        case "stopTimeStamp":
          stopTimeStamp = value;
          break;
        case "duration":
          duration = value;
          break;
      }
    }
    return setByParamNameString;
  };

  this.getValue = function (valueString) {
    const value = getParams();
    return value(valueString);
  };

  this.setValue = function (valueString, value) {
    const param = setParams();
    param(valueString, value);
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// ***************** Start ******************
Stopwatch.prototype.start = function () {
  let started = this.getValue("started");
  if (!started) {
    this.setValue("started", true);
    this.setValue("startTimeStamp", new Date().getTime());
    console.log("Stopwatch Started");
  } else {
    throw new Error("Stopwatch is running");
  }
};

// ***************** Stop ******************
Stopwatch.prototype.stop = function () {
  let started = this.getValue("started");
  if (started) {
    this.setValue("stopTimeStamp", new Date().getTime());

    let calculateDuration = this.getValue("calculateDuration");
    if (calculateDuration) {
      this.setValue("started", false);
      console.log("Stopwatch Stoped");
    } else {
      throw new Error("Failed to calculate duration");
    }
  } else {
    throw new Error("Stopwatch not started yet");
  }
};

// ***************** Reset ******************
Stopwatch.prototype.reset = function () {
  this.setValue("started", false);
  this.setValue("startTimeStamp", 0);
  this.setValue("stopTimeStamp", 0);
  this.setValue("duration", 0.0);
  console.log("Stopwatch Reset");
};

const stopwatch = new Stopwatch();
