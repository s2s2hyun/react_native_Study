import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { atomLinkList } from "./states/atomLinkList";
import { useSetRecoilState } from "recoil";
import { getItem } from "../utils/AsyncStorageUtils";

type RecoilCustomPersistProps = {
  children?: ReactNode;
};

export const RecoilCustomPersist = (props: RecoilCustomPersistProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const setList = useSetRecoilState(atomLinkList);

  const loadData = useCallback(async () => {
    const data = await getItem("MAIN/LINK_LIST");

    if (data !== null) {
      setList(JSON.parse(data));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) return;

    loadData();
  }, []);

  return <>{isLoaded && props.children}</>;
};
