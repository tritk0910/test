import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormErrorMessage } from "../FormErrorMessage";

interface MyFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const initialValues: MyFormValues = { email: "", password: "" };

  const validateSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex flex-col justify-center items-center max-w-[454px] mx-auto w-full mt-[121px] mb-[147px]">
      <h1 className="font-extrabold text-[45px] leading-[60px] text-[#0565bb] mb-[57px]">
        Welcome!
      </h1>
      <div className="w-full h-[2px] bg-[#222] mb-[33px]" />
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert("Login successfully");
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className="flex flex-col w-full mb-[73px]">
            {errors.email && touched.email ? (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            ) : null}
            <Field
              className="p-[18px] border mb-[16px] border-[#a1a1a1] outline-none"
              type="email"
              name="email"
              autoCorrect="off"
              placeholder="아이디 (이메일)"
            />
            {errors.password && touched.password ? (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            ) : null}
            <Field
              className="p-[18px] border mb-[23px] border-[#a1a1a1] outline-none"
              type="password"
              name="password"
              autoCorrect="off"
              placeholder="비밀번호"
            />
            <button
              type="submit"
              className="bg-[#0565bb] p-[23px] text-[16px] text-white"
            >
              로그인하기
            </button>
          </Form>
        )}
      </Formik>
      <span className="text-center text-[16px] text-[#404142] font-semibold mb-[43px]">
        SNS 계정으로 로그인
      </span>
      <div className="flex w-full justify-between mb-[52px]">
        <button>
          <img src="/icon/naver-icon.png" alt="" />
        </button>
        <button>
          <img src="/icon/kakao-icon.png" alt="" />
        </button>
        <button>
          <img src="/icon/facebook-icon.png" alt="" />
        </button>
        <button>
          <img src="/icon/google-icon.png" alt="" />
        </button>
      </div>
      <Link
        to={"/register"}
        className="p-[22px] w-full border border-[#020001] text-[16px] font-semibold mb-[32px]"
      >
        계정이 없으신가요? 간편가입하기
      </Link>
      <div className="flex w-full justify-evenly items-center text-[#1a58f2]">
        <span>아이디(이메일)찾기</span>
        <span>비밀번호 찾기</span>
      </div>
    </div>
  );
}
