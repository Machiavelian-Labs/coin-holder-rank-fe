const useSearchRepo = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return {
    searchQuery,
    setSearchQuery,
  };
};
