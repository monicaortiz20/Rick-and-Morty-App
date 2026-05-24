export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};

export type LocationApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Location[];
};
