import { useEffect, useRef } from 'react';

interface IDropdowndpenProps {
  onClose?: () => void;
}

export function useDropdownOpen({ onClose }: IDropdowndpenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      onClose?.();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return ref;
}
