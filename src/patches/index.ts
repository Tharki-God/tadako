import patchRTCUser from "./RTCUser";
export const applyInjections = (): void => {
  patchRTCUser();
};

export default { applyInjections };
