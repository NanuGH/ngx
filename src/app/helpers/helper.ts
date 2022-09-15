

export module TreHelper {

  export function removeProperty(object: Object) {
    for (var m in object) {
      if (
        object[m] == undefined ||
        object[m] == null ||
        object[m] == "" ||
        Object.keys(m).length == 0
      ) {
        delete object[m];
      }
    }
    return object;
  }


}
