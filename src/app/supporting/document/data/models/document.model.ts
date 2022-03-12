import { BaseModel } from "../../../../base/data/models/base.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { DocumentCategory, DocumentEntity, DocumentStatus, DocumentType } from "../../domain/entities/document.entity";
import { AreaModel } from "../../../area/data/models/area.model";

@Entity({ name: 'documents' })
export class DocumentModel extends BaseModel implements DocumentEntity {
  @Column('varchar', { name: 'code', nullable: true })
  code: string;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'name', nullable: true })
  name: string;

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


  @Column('enum', { name: 'status', enum: DocumentStatus, nullable: true })
  status?: DocumentStatus;

  @Column('date', { name: 'effective_date', nullable: true })
  effective_date?: Date;


  @Column('uuid', { name: 'owner_id', nullable: true })
  owner_id: string

  @ManyToOne(() => AreaModel, model => model.document_owner, {
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'owner_id' })
  owner: AreaModel;

  @ManyToMany(() => AreaModel, model => model.document_access, {
    onUpdate: 'CASCADE'
  })
  @JoinTable({
    name: 'document_access',
    joinColumn: {
      name: 'document_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'area_id',
      referencedColumnName: 'id'
    }
  })
  access?: AreaModel[];
}