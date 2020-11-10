/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

Vue.directive('numeric-only', {
  bind(el, _binding, _vnode) {
    // this two prevent from copy & paste non-number text, including "e".
    // need to have both together to take effect.
    el.type = 'number';
    // eslint-disable-next-line no-return-assign
    el.addEventListener('input', () => el.validity.valid || (el.value = ''));

    // this prevents from typing non-number text, including "e".
    el.addEventListener('keypress', (e) => {
      const charCode = (e.which) ? e.which : e.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        e.preventDefault();
        return false;
      }

      return true;
    });
  },
});
