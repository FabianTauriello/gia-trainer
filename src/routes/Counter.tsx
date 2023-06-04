import { decrement, increment, incrementByAmount, selectCount } from "domain/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useRef } from "react";
import { useSelector } from "react-redux";

export function Counter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const count = useAppSelector((state) => state.counter.value);
  const c = useSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter component</h1>
      <h3>value (from appSelector): {count}</h3>
      <h3>value (from specific selector): {c}</h3>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          INCREMENT
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>
          DECREMENT
        </button>
      </div>
      <div>
        <label>Enter increment amount</label>
        <input ref={inputRef} className="mx-2 border" />
        <button type="button" onClick={() => dispatch(incrementByAmount(parseInt(inputRef.current?.value!)))}>
          INCREMENT
        </button>
      </div>
    </div>
  );
}
