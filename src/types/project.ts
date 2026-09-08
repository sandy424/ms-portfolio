export type ProjectFeature = { title: string; description: string; image: string };
export type ProjectTrouble = { problem: string; attempt: string; result: string };

export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  picture: string;
  period: string;
};