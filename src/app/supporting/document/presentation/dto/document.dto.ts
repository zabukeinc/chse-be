import { AreaEntity } from "../../../area/domain/entities/area.entity";
import { DocumentCategory, DocumentEntity, DocumentStatus, DocumentType } from "../../domain/entities/document.entity";

export class DocumentDTO implements DocumentEntity {
  type: DocumentType;
  category: DocumentCategory;
  code?: string | null;
  title: string;
  name?: string | null;
  publish_date: Date | null;
  revision_date?: Date | null;
  file_path?: string | null;
  owner?: AreaEntity | null;
  status?: DocumentStatus | null;
  access?: AreaEntity[] | null;
  effective_date?: Date | null;
  id?: string;
  creator_name?: string | null;
  editor_name?: string | null;
  creator_id?: string | null;
  editor_id?: string | null;
  created_at?: | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}