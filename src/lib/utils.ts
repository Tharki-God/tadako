import { MediaEngineStore, MediaEngineUtils } from "./requiredModules";

export const MutedUserSet = new Set<string>();

export const addLocalMute = (userId: string): void => {
  MutedUserSet.add(userId);
  if (!MediaEngineStore.isLocalMute(userId)) MediaEngineUtils.toggleLocalMute(userId);
};

export const removeLocalMute = (userId: string): void => {
  MutedUserSet.delete(userId);
  if (MediaEngineStore.isLocalMute(userId)) MediaEngineUtils.toggleLocalMute(userId);
};

export const hasLocalMute = (userId: string): boolean => {
  return MediaEngineStore.isLocalMute(userId) && MutedUserSet.has(userId);
};
export const stopLocalMute = (): void => {
  for (const userId of MutedUserSet) {
    if (MediaEngineStore.isLocalMute(userId)) MediaEngineUtils.toggleLocalMute(userId);
    MutedUserSet.delete(userId);
  }
};

export default { addLocalMute, removeLocalMute, hasLocalMute, stopLocalMute };
