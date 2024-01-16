import { apiInitializer } from "discourse/lib/api";
import { findAll } from "discourse/models/login-method";
import discourseComputed from "discourse-common/utils/decorators";

export default apiInitializer("0.8", (api) => {
  // LTI login must be initiated by the IdP
  // Hide the LTI login button on the client side:
  api.modifyClass("component:login-buttons", {
    pluginId: "discourse-lti",

    @discourseComputed
    buttons() {
      return this._super().filter((m) => m.name !== "lti");
    },
  });

  // Connection is possible, but cannot be initiated
  // by Discourse. It must be initiated by the IdP.
  // Hide the button to avoid confusion:
  const lti = findAll().find((p) => p.name === "lti");
  if (lti) {
    lti.can_connect = false;
  }
});
