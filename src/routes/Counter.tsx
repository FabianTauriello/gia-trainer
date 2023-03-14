import { decrement, increment, incrementByAmount } from "domain/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useRef } from "react";

function Counter() {
  const inputRef = useRef<HTMLInputElement>(null);

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter component</h1>
      <h3>value: {count}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      </div>
      <div>
        <label>Enter increment amount</label>
        <input ref={inputRef} className="border mx-2" />
        <button onClick={() => dispatch(incrementByAmount(parseInt(inputRef.current?.value!)))}>INCREMENT</button>
      </div>
    </div>
  );
}

export default Counter;
