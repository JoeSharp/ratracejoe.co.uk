export type TopTrumpType = {
  name: string;
  description: string;
  image: string;
  stats?: {
    [s: string]: number;
  };
};
