import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  updateComment,
} from '../../../../../store/reducers/rootReducer';
import { ReplyField } from '../../../../UI/ReplyField';

interface ICommentFormContainerProps {
  authorName?: string;
  inputRef?: React.MutableRefObject<any>;
}

export function CommentFormContainer(props: ICommentFormContainerProps) {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  const { authorName, inputRef } = props;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
    dispatch(updateComment(authorName ? authorName + ', ' : ''));
  }, [inputRef, authorName]);

  return (
    <ReplyField
      placeholder='Leave a comment'
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      inputRef={inputRef}
    />
  );
}
