import { Entity, Column, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { RiskDetailEntity, ConsequenceValue, LikelyhoodValue } from "../../domain/entities/risk.entity";
import { RiskModel } from "./risk.model";

@Entity({ name: 'risk_details' })
export class RiskDetailModel implements RiskDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column('int', { name: 'consequence', nullable: true })
  consequence: ConsequenceValue;

  @Column('int', { name: 'likelyhood', nullable: true })
  likelyhood: LikelyhoodValue;

  @OneToOne(() => RiskModel, model => model.inherit_risk, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  inherit: RiskModel

  @OneToOne(() => RiskModel, model => model.residual_risk, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  residual: RiskModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}