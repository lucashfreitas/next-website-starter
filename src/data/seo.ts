export interface SEOMeta {
  name: string;
  content: string;
}

export interface SEOData {
  title?: string;
  description?: string;
  meta?: Array<SEOMeta>;
}
