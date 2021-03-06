import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { isHopDto } from "../types/Hop";
import { hopState } from "../atoms/hopState";

export const useHop = () => {
  const [_hop, _setHop] = useRecoilState(hopState);

  const setHop = useCallback(
    (hop: any) => {
      if (isHopDto(hop)) {
        _setHop(hop);
      } else {
        throw new Error("is not HopDtoType");
      }
    },
    [_setHop]
  );

  return {
    hop: _hop,
    setHop,
  };
};
