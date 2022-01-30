import React, { useRef, useEffect } from 'react';
import { useIntersect } from '../../hooks/useIntersect';

interface InfiniteScrollProps {
  isLastItem: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  isLastItem,
  setPage,
  loading,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersect(ref, {});
  const isIntersecting = !!entry?.isIntersecting;
  const onFetchMoreData = () => setPage((prev) => prev + 1);
  useEffect(() => {
    //마지막 항목이고 겹치는 영역이 있을 때
    isLastItem && isIntersecting && !loading && onFetchMoreData();
  }, [isLastItem, isIntersecting]);

  return <div ref={isLastItem ? ref : null}>{children}</div>;
};

export default InfiniteScroll;
