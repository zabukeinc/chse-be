import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ApplicantDetailEntity } from "../../entities/applicant-detail.entity";
import { ApplicantEntity } from "../../entities/applicant.entity";

export class GenerateIsoDetailHelper {
  /**
   * Generator for Applicant detail based on selected ISO.
   * @param isoService 
   * @param entity 
   */
  constructor(
    protected isoService: IsoDataService,
    protected entity: ApplicantEntity
  ) { }

  async exeucte(): Promise<ApplicantDetailEntity[]> {
    const { id } = this.entity.iso

    const iso = await this.isoService.findOne({
      relations: ['detail'],
      where: { id: id }
    })

    if (!iso) throw new Error('Iso not found')

    const applicantDetails: ApplicantDetailEntity[] = []

    for (const detail of iso.details) {
      applicantDetails.push({
        iso_detail: detail,
        status: null,
        document_path: null,
        reject_description: null
      })
    }

    return applicantDetails
  }
}