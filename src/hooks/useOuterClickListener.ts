import { useCallback, useEffect } from 'react';

import type React from 'react';

export type OuterClickListenerHook = {
  /** 외부를 구분하기 위한 기본 요소 */
  refList: React.RefObject<HTMLDivElement>[];
  /** 외부 클릭 시 실행 핸들러 */
  onClick: () => void;
};

const useOuterClickListener = (props: OuterClickListenerHook) => {
  const { refList, onClick } = props;

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      // 주어진 Ref에 대해 요소 외부에 위치함이 확인되었을 경우
      if (!refList.some((ref) => ref.current?.contains(event.target as HTMLDivElement))) {
        onClick();
      }
    },
    [onClick, refList],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown]);
};

export default useOuterClickListener;
