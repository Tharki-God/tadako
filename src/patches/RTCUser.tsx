import { PluginInjector } from "../index";
import { RTCUser, RelationshipStore } from "../lib/requiredModules";

import Utils from "../lib/utils";

export const patchCreate = (): void => {
  PluginInjector.after(RTCUser.prototype, "createUser", ([userId]: [string], res) => {
    if (!RelationshipStore.isFriend(userId) && !Utils.hasLocalMute(userId)) {
      Utils.addLocalMute(userId);
    }
    return res;
  });
};

export const patchDestroy = (): void => {
  PluginInjector.after(RTCUser.prototype, "destroyUser", ([userId]: [string], res) => {
    if (Utils.hasLocalMute(userId)) {
      Utils.removeLocalMute(userId);
    }
    return res;
  });
};
export default (): void => {
  patchCreate();
  patchDestroy();
};
