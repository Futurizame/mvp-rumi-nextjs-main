"use client";

import { useState } from "react";

export default function Counter() {
  const [count] = useState(0);

  return <div>something {count}</div>;
}
