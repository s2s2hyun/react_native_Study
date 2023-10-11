import { atom } from "recoil";
import { getItem, removeItem, setItem } from "../../utils/AsyncStorageUtils";

type ListItem = {
  title: string;
  image: string;
  link: string;
  createdAt: string;
};

type ListState = {
  list: ListItem[];
};

type AsyncStorageEffectParams = {
  setSelf: (newValue: any) => void;
  onSet: (newValue: any, oldValue: any, isReset: boolean) => void;
};

const asyncStorageEffect =
  (key: string) =>
  async ({ setSelf, onSet }: AsyncStorageEffectParams) => {
    const saveValue = await getItem(key);

    if (saveValue !== null) {
      setSelf(JSON.parse(saveValue));
    }

    // @ts-ignore
    onSet((newValue, _, isReset) => {
      //   console.log(newValue, "onSet");
      isReset ? removeItem(key) : setItem(key, JSON.stringify(newValue));
    });
  };

export const atomLinkList = atom<ListState>({
  key: "MAIN/LINK_LIST",
  default: {
    list: [],
  },
  // @ts-ignore
  effects: [asyncStorageEffect("MAIN/LINK_LIST")],
});
