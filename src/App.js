import { CounterProvider } from "./context/counter";
import { Counter } from "./screens/conter";

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
