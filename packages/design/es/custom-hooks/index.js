import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';
export function useDeepEffect(fn, deps) {
  var isFirst = useRef(true);
  var prevDeps = useRef(deps);
  useEffect(
    function () {
      var isFirstEffect = isFirst.current;
      var isSame = prevDeps.current.every(function (obj, index) {
        return isEqual(obj, deps[index]);
      });
      isFirst.current = false;
      prevDeps.current = deps;
      if (isFirstEffect || !isSame) {
        return fn();
      }
    },
    [deps, fn],
  );
}
