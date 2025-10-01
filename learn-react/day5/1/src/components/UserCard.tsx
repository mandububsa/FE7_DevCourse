export default function UserCard({
  user,
}: {
  user: { name: string; age: number };
}) {
  return (
    <>
      <h1>
        {user.name} / {user.age}
      </h1>
    </>
  );
}
