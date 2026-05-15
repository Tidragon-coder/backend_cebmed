export interface DocumentModel {
  id: number;
  user_id: number;
  name: string;
  type: string;
  description: string | null;
  file_path: string;
  created_at: Date;
  updated_at: Date;
}

export interface DocumentListResponse {
  count: number;
  data: DocumentModel[];
}

export interface CreateDocumentInput {
  name: string;
  type: string;
  description?: string;
  fileName: string;
  contentBase64: string;
}

export interface UpdateDocumentInput {
  name?: string;
  type?: string;
  description?: string;
  fileName?: string;
  contentBase64?: string;
}