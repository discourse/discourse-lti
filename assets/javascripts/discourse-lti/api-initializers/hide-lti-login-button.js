import { apiInitializer } from "discourse/lib/api";
import { findAll } from "discourse/models/login-method";
import discourseComputed from "discourse-common/utils/decorators";

export default apiInitializer("0.8", (api) => {
  api.modifyClass("component:login-buttons", {
    @discourseComputed
    buttons(){
      return this._super().filter((m) => m.name != "lti")
    }
  });
});
