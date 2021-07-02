import { State } from "../../models/State";

export class StateMapper {

  static mapState({ id, initials, name }: State): State {
    return {
      id,
      initials,
      name
    }
  }
}