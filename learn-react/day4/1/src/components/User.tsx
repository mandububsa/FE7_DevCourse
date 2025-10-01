export default function User({ name, age }: { name: string; age: number }) {
  return (
    <>
      <h1>Name: {name}</h1>
      <h1>age: {age}</h1>
    </>
  );
}
