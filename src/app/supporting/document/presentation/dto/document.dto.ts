import { DocumentCategory, DocumentEntity, DocumentType } from "../../domain/entities/document.entity";

export class DocumentDTO implements DocumentEntity {
  type: DocumentType;
  category: DocumentCategory;
  code: string;
  title: string;
  name: string;
  no_publish: number | null;
  publish_date: Date | null;
  no_revision: number | null;
  revision_date: Date | null;
  file_path: string | null;
  id?: string;
  creator_name?: string | null;
  editor_name?: string | null;
  creator_id?: string | null;
  editor_id?: string | null;
  created_at?: | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}