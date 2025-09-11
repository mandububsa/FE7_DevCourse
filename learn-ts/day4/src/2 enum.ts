{
  // enum(이넘) : 열거형
  function moveX(direction: string) {
    if (direction === "left") console.log("왼쪽으로 이동");
    if (direction === "right") console.log("오른쪽으로 이동");
  }

  moveX("left");
  moveX("right");
}
{
}
{
  enum CharaterMoveX { // 이동
    LEFT,
    RIGHT,
  }
  enum RotationMoveX { // 회전
    LEFT,
    RIGHT,
  }
  enum vehicleMove {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  // CharaterMoveX(CharaterMoveX.LEFT);
  // CharaterMoveX(CharaterMoveX.RIGHT);
}

{
  // 숫자형 enum
  enum Direction {
    UP,
    DOWN = 100,
    LEFT,
    RIGHT,
  }
  console.log(Direction);
}

{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }
  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }

  handleResponse(StatusCode.BadRequest);
}

{
  // 문자형 enum
  // 모든 값을 할당해줘야함. 문자형에서 +1 같은건 없으니까.
  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }
  console.log(Direction.DOWN);
  console.log(Direction);
}

{
  // 혼합 enum(열거형)
  enum Mix {
    YES = 1,
    NO = "NO",
  }
  console.log(Mix);
}

{
  // 리버스 매핑 (역방향 매핑)
  // 숫자형 이넘에만 지원한 개념
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  console.log(Direction.UP);
  console.log(Direction[0]);
}
{
  enum Key {
    ArrowUp,
    ArrowDown,
  }
  function onKeyPressed(code: Key) {
    console.log("Pressed: " + Key[code]);
  }
  onKeyPressed(Key.ArrowDown);
  onKeyPressed(1);
}

//

{
  // 객체 - interface (type)
  // 리터럴 타입 - enum (const enum)
  // 타입 별칭 - 유니온타입, 인터섹션
  const enum Role {
    ADMIN = "admin",
    GUEST = "guest",
  }

  interface Account {
    id: number;
    role: Role;
  }

  type AuthAccount = Account & { token?: string };
}
{
  interface Token {
    token?: string;
  }
  interface Account {
    id: number;
    role: "admin" | "guest";
  }
  interface AuthAccount extends Token {}
}
{
  type Token = {
    token?: string;
  };
  type Account = {
    id: number;
    role: "admin" | "guest";
  };
  type AuthAccount = Token & Account;
}

// 위 세가지 방법은 다 같다. 방식만 다름.
