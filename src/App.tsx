import { Button } from "react-daisyui";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button>Default</Button>
        <Button color="neutral">Neutral</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="accent">Accent</Button>
        <Button color="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  );
}

export default App;
