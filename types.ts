
export interface Chapter {
  id: number;
  title: string;
  summary: string;
  content: string;
}

export type ViewState = 'home' | 'reader';
