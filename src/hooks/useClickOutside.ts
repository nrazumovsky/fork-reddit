import { useEffect, useRef } from 'react';

export interface IClickOutsideProps {
  onClose?: () => void;
}

export function useClickOutside({ onClose }: IClickOutsideProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose?.();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return ref;
}
