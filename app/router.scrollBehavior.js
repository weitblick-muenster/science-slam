// eslint-disable-next-line func-names
export default async function (to, _from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  const findEl = async (hash, x = undefined) => {
    if (document.querySelector(hash)) {
      return document.querySelector(hash);
    }

    return new Promise((resolve, _reject) => {
      if (x > 50) {
        resolve();
      } else {
        setTimeout(() => {
          const xValue = x ? x + 1 : 1;
          resolve(findEl(hash, xValue));
        }, 100);
      }
    });
  };

  if (to.hash) {
    const el = await findEl(to.hash);
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
    return window.scrollTo(0, el.offsetTop);
  }

  return { x: 0, y: 0 };
}
