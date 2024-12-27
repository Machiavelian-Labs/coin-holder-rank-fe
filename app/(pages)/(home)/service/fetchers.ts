import { useMemo } from "react";
import { searchRepo } from "./apis";
import { useQuery } from "@tanstack/react-query";
import { SearchRepoResponse, RepoItems } from "./apis";

const useSearchGetData = () => {
  const { isLoading, refetch: getRepoList } = useQuery<
    SearchRepoResponse,
    Error
  >({
    queryKey: ["repo-list", "searchKeyword"],
    queryFn: ({ queryKey }) => searchRepo({ searchKeyword: String(queryKey) }),
    enabled: false,
  });

  return { isLoading, getRepoList };
};

export { useSearchGetData };
