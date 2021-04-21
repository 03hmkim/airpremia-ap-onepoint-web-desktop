import { useMemo } from 'react';
import { useMe } from '@airpremia/core/hooks';

export default function useMeLocal() {
  const { meStore } = useMe(); // 임의로 만들어놨음.
  const { userInfo } = meStore;

  const userFullName = useMemo(() => {
    const { name } = userInfo;
    return `${name.last} ${name.first}`;
  }, [userInfo]);

  return {
    userFullName,
  };
};
