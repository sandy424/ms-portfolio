export type ParItem = {
  label: "PROBLEM" | "ACTION" | "RESULT";
  content: string | string[];
};

export type TechnicalChallenge = {
  title: string;  
  items: ParItem[];     
};

export type ProjectFeature = {
  feature: string;
  picture: string;
};


export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  picture: string;
  slideId: string;
  period: string;
  form: string;
  url: string;
  github: string;
  notion: string;
  why: string;
  features: ProjectFeature[];
  technicalChallenge: TechnicalChallenge[];
  retrospect: string;
};
