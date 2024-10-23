import React from "react";
import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/CountAtom";

export default function Count() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
