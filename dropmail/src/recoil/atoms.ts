import { atom } from "recoil";
import { getSessionSchemas } from "../types/getSessionSchemas";
import { fetchMailsSchemas } from "../types/fetchMailsSchemas";

export const session = atom<getSessionSchemas | null>({
  key: "session",
  default: null,
});

export const mails = atom<fetchMailsSchemas[] | null>({
  key: "mails",
  default: null,
});

export const currentMail = atom<fetchMailsSchemas | null>({
  key: "currentMail",
  default: null,
});
