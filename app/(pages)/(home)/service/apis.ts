import api from "../../../_service/axios";

export interface SearchRepoResponse {
  incomplete_results: boolean;
  total_count: number;
  items: RepoItems[];
}
export interface SearchRepoPayload {
  searchKeyword: string;
}

export interface RepoItems {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
}

export const searchRepo = ({
  searchKeyword,
}: SearchRepoPayload): Promise<SearchRepoResponse> => {
  return api.githubService
    .get<SearchRepoResponse>("/search/repositories", { q: searchKeyword })
    .then((response) => response && response.data);
};
