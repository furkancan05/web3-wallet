import React from "react";

// components
import Checkbox from "~/components/shared/Checkbox";

// store
import { useAppStore } from "~/store/store";

function SpamFilter() {
  const spam = useAppStore((store) => store.nfts.spam);
  const setSpam = useAppStore((store) => store.nfts.setSpam);

  return (
    <Checkbox
      id="spam"
      label="Include Spam"
      value={spam}
      onValueChange={(val) => setSpam(val)}
    />
  );
}

export default React.memo(SpamFilter);
