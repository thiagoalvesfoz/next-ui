export type FormDate = {
  month: string;
  year: string;
};

export type Academic = {
  institution?: string;
  degree?: string;
  course?: string;
  start_at?: FormDate;
  finish_at?: FormDate;
};

export type Professional = {
  title?: string;
  kind?: string;
  company?: string;
  location?: string;
  start_at?: FormDate;
  finish_at?: FormDate;
};

export type Languages = {
  name?: string;
  level?: string;
};

export type MyHistory = {
  course?: string;
};
