import React, { createContext, useState } from 'react';

interface CommentFormProviderProps {
  children?: React.ReactNode;
}

interface CommentFormContextProps {
  showCommentForm: boolean;
  setShowCommentForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: CommentFormContextProps = {
  showCommentForm: false,
  setShowCommentForm: () => {},
};

export const CommentFormContext =
  createContext<CommentFormContextProps>(defaultValue);

export function CommentFormProvider({ children }: CommentFormProviderProps) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  return (
    <CommentFormContext.Provider
      value={{ showCommentForm, setShowCommentForm }}
    >
      {children}
    </CommentFormContext.Provider>
  );
}
