import { renderHook, screen, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { useCounter } from "./useCounter";

describe("useCounter component", () => {
  it("inital value is 5", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
  it("increment", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
  // if("decrement" )
});
