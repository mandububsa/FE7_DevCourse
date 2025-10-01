import Button from "./components/html/Button";

export default function App() {
  return (
    <div className="center">
      <Button type="button" disabled>
        Add
      </Button>
      <Button className="bg-[#ed4848]">Cancel</Button>
    </div>
  );
}
