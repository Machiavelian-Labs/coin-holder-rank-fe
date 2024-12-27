import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface useGetFetchParams<P, R> {
  queryKey?: string[];
  option?: any;
  exec?: (params: P) => Promise<R>;
}

export const useGetFetch = (queryKey, option = {}, exec) => {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    refetch: defaultRefetch,
    isError,
    error,
  } = useQuery({
    queryKey: [...queryKey], // 초기 파라미터 포함
    queryFn: ({ queryKey }) => exec({ params: queryKey }),
    enabled: option?.enabled ?? false,
    ...option,
  });

  // refetch를 래핑하여 동적으로 파라미터를 전달 가능하게 확장
  const refetch = (newParams) => {
    if (newParams) {
      queryClient.invalidateQueries([...queryKey, newParams]);
    } else {
      defaultRefetch();
    }
  };

  return {
    data,
    isLoading,
    refetch,
    isError,
    error,
  };
};

export const usePostFetch = ({ option, exec }: FetchProps) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["repo-list", "searchKeyword"],
    queryFn: ({ queryKey }) => exec({ searchKeyword: String(queryKey) }),
    enabled: option?.enabled,
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
