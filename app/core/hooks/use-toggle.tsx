"use client";
import React, { useState } from "react";
import { isBoolean } from "util";

const useToggle = (): [isOpen: boolean, toggle: (optional_value?: boolean) => void] => {
  const [state, setState] = useState(false);

  const toggle = (optional_value?: boolean) => setState(isBoolean(optional_value) ? optional_value : !state)

  return [state, toggle]
};

export default useToggle;
