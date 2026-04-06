//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function wrapper(...args) {
    const hash = md5(args);
    const cachedItem = cache.find((item) => item.hash === hash);

    if (cachedItem) {
      return `Из кеша: ${cachedItem.value}`;
    }

    const result = func.apply(this, args);

    cache.push({
      hash,
      value: result,
    });

    if (cache.length > 5) {
      cache.shift();
    }

    return `Вычисляем: ${result}`;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (isFirstCall) {
      isFirstCall = false;
      wrapper.count += 1;
      func.apply(this, args);
      return;
    }

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      wrapper.count += 1;
      func.apply(this, args);
      timeoutId = null;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
