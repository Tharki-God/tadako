import { webpack } from "replugged";
import Types from "../types";
export const MediaEngineUtils = webpack.getByProps<Types.MediaEngineUtils>("toggleLocalMute");
export const RelationshipStore =
  webpack.getByStoreName<Types.RelationshipStore>("RelationshipStore");
export const MediaEngineStore = webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
export const RTCUser = webpack.getBySource<Types.DefaultTypes.AnyFunction>("Creating user:");
