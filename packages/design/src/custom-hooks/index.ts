import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';

export function useDeepEffect(fn: () => void, deps: any[]) {
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    const isFirstEffect = isFirst.current;
    const isSame = prevDeps.current.every((obj, index) => isEqual(obj, deps[index]));

    isFirst.current = false;
    prevDeps.current = deps;

    if (isFirstEffect || !isSame) {
      return fn();
    }
  }, [deps, fn]);
}
