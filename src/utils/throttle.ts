const throttle = (callback: () => void, wait: number, immediate = false) => {
  let timeout: any = null;
  let initialCall = true;

  // eslint-disable-next-line func-names
  return function () {
    const callNow = immediate && initialCall;
    function next(...args) {
      callback.apply(this, args);
      timeout = null;
    }

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
};

export default throttle;
