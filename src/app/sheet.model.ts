import { propArray,prop } from "@rxweb/reactive-form-validators"
import { Consultant } from './consultant.model'

export class Sheet {

  @propArray(Consultant)
  rows: Consultant[]

  @prop()
  get totalCost() {
      let totalMargin = 0;
      if(this.rows && this.rows.length > 0){
          this.rows.forEach(t=> totalMargin += t.cost);
      }
      return totalMargin;
  }

}