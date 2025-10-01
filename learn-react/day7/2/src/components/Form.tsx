type FormState = {
  email: string;
  pw: string;
};
type FormAction = {
  type: "setEmail" | "setPW";
  payload: string; // 액션에 재료로 사용할 데이터
};
function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPW":
      return {};
  }
}
export default function Form() {
  const [formState, formDispatch] = useReducer(formReducer, {
    email: "",
    pw: "",
  });
  return (
    <>
      <form>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </form>
    </>
  );
}
