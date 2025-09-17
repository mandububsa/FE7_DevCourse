export default function Profile({
  bg,
  userImage,
  uname,
  igId,
  onClick,
}: {
  bg: string;
  userImage: string;
  uname: string;
  igId: string;
  onClick: () => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImage} alt="profile-pic" />
          <h3 className="alias">{uname}</h3>
          <p className="username">{igId}</p>
          <button onClick={onClick}>Follow!</button>
        </div>
      </article>
    </>
  );
}
