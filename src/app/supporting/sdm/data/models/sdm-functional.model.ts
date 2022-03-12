import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmFunctionalEntity } from "../../domain/entities/sdm.entity";
import { SdmModel } from "./sdm.model";

@Entity({ name: 'supporting_sdm_functionals' })
export class SdmFunctionalModel extends BaseEntity implements SdmFunctionalEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'schema', nullable: true })
  schema: string;

  @Column('varchar', { name: 'scope', nullable: true })
  scope: string;

  @Column('varchar', { name: 'position', nullable: true })
  position: string;

  @Column('varchar', { name: 'justification_path', nullable: true })
  justification_path?: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  /** Join with Sdm */
  @Column('uuid', { name: 'sdm_id', nullable: true })
  sdm_id: string

  @ManyToOne(() => SdmModel, model => model.functionals, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_id' })
  sdm: SdmModel
}