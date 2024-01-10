import { Injector, Logger } from "replugged";
import Utils from "./lib/utils";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("tadako");

import Injections from "./patches/index";

export const start = (): void => {
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  Utils.stopLocalMute();
};
