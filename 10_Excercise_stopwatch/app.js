function Stopwatch() {
  let duration = 0.0;
  let started = false;
  let startTimeStamp = 0;
  let stopTimeStamp = 0;

  let calculateDuration = () => {
    duration = (stopTimeStamp - startTimeStamp) / 1000;
  };

  this.start = () => {
    if (!started) {
      started = true;
      startTimeStamp = new Date().getTime();
    } else {
      throw new Error("Stopwatch is running");
    }
  };
  this.stop = () => {
    if (started) {
      stopTimeStamp = new Date().getTime();
      calculateDuration();
      started = false;
    } else {
      throw new Error("Stopwatch not started yet");
    }
  };
  this.reset = () => {
    started = false;
    startTimeStamp = 0;
    stopTimeStamp = 0;
    duration = 0.0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const stopwatch = new Stopwatch();
