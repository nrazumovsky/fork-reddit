import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from '../Button';
import styles from './replyfield.css';

interface IReplyFieldProps {
  value?: string;
  authoName?: string;
  inputRef?: React.MutableRefObject<any>;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (e: FormEvent) => void;
}

export function ReplyField(props: IReplyFieldProps) {
  const { value, inputRef, placeholder, onChange, onSubmit } = props;

  return (
    <form className={styles.form}>
      <textarea
        placeholder={placeholder}
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Button As='button' type='submit' className={styles.button}>
        Комментировать
      </Button>
    </form>
  );
}
