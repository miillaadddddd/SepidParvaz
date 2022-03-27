import React from "react";
import EnfoPart from "../../components/pages/two/EnfoPart";
import ScorePart from "../../components/pages/two/ScorePart";

function Two() {
  return (
    <div className="min-h-screen p-5 bg-slate-200">
      <EnfoPart />
      <ScorePart />
      <EnfoPart />
    </div>
  );
}

export default Two;
