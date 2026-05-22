export type Episode = {
  id: number;
  name: string;
  episode: string;
};

export type ApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Episode[];
};

export type Props = {
  search: string;
  setSearch: (value: string) => void;
};
