import { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { commentContext } from '../context/commentContext';

interface IOpenCommentFormProps {
  authorName?: string;
  inputRef: React.MutableRefObject<any>;
}

export function useOpenCommentForm({
  authorName,
  inputRef,
}: IOpenCommentFormProps) {
  const { onChange } = useContext(commentContext);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
    authorName ? onChange(authorName + ', ') : onChange('');
  }, [inputRef, authorName]);
}
