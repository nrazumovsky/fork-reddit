import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { Avatar } from '../../UI/Avatar';

export function SearchBlock() {
  const [user] = useUserData();

  return <Avatar name={user.name} src={user.iconImg} size={20} />;
}
