import { BaseModel } from "../../../../base/data/models/base.model";
import { Column, Entity } from "typeorm";
import { DocumentCategory, DocumentEntity, DocumentType } from "../../domain/entities/document.entity";

@Entity({ name: 'documents' })
export class DocumentModel extends BaseModel implements DocumentEntity {
  @Column('varchar', { name: 'code' })
  code: string;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('int', { name: 'no_publish', nullable: true })
  no_publish: number;

  @Column('datetime', { name: 'publish_date', nullable: true })
  publish_date: Date;

  @Column('int', { name: 'no_revision', nullable: true })
  no_revision: number;

  @Column('datetime', { name: 'revision_date', nullable: true })
  revision_date: Date;

  @Column('varchar', { name: 'file_path', nullable: true })
  file_path: string;

  @Column('enum', { name: 'type', enum: DocumentType })
  type: DocumentType;

  @Column('enum', { name: 'categor', enum: DocumentCategory })
  category: DocumentCategory;
}