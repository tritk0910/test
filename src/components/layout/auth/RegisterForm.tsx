import * as Yup from "yup";
import { FormErrorMessage } from "../FormErrorMessage";
import { Field, Form, Formik } from "formik";

interface MyFormValues {
  email: string;
  password: string;
  verifyPassword: string;
  address: string;
  additionalAddress: string;
  contact: string;
  term: boolean;
  advertisement: boolean;
}

export default function RegisterForm() {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
    verifyPassword: "",
    address: "",
    additionalAddress: "",
    contact: "",
    term: false,
    advertisement: false,
  };

  const validateSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
        "Password must contain at least 8 characters, one letter, one number and one special character"
      ),
    verifyPassword: Yup.string()
      .required("Verify password is required")
      .oneOf([Yup.ref("password")], "Passwords must match")
      .nullable(),
    address: Yup.string(),
    additionalAddress: Yup.string(),
    contact: Yup.string(),
    term: Yup.boolean().oneOf([true], "You must accept terms and conditions"),
    advertisement: Yup.boolean(),
  });

  return (
    <div className="flex flex-col justify-center items-center max-w-[454px] mx-auto w-full mt-[121px] mb-[147px]">
      <h1 className="font-extrabold text-[45px] leading-[60px] text-[#0565bb] mb-[55px] uppercase">
        Join us
      </h1>
      <div className="w-full h-[2px] bg-[#222] mb-[55px]" />
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert("Registered successfully");
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form
            autoComplete="off"
            className="flex flex-col w-full mb-[73px] [&_label]:text-[16px] [&_label]:pb-[10px] [&_label]:font-semibold"
          >
            <label htmlFor="email">아이디(이메일) *</label>
            {errors.email && touched.email ? (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            ) : null}
            <Field
              className="p-[18px] border mb-[16px] border-[#a1a1a1] outline-none"
              type="text"
              name="email"
              autoCorrect="off"
              placeholder="example@email.com"
            />
            <label htmlFor="password">비밀번호 *</label>
            {errors.password && touched.password ? (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            ) : null}
            <Field
              className="p-[18px] border mb-[23px] border-[#a1a1a1] outline-none"
              type="password"
              name="password"
              autoCorrect="off"
              placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
            />
            <label htmlFor="verifyPassword">비밀번호 확인 *</label>
            {errors.verifyPassword && touched.verifyPassword ? (
              <FormErrorMessage>{errors.verifyPassword}</FormErrorMessage>
            ) : null}
            <Field
              className="p-[18px] border mb-[23px] border-[#a1a1a1] outline-none"
              type="password"
              name="verifyPassword"
              autoCorrect="off"
            />
            <label htmlFor="address">주소</label>
            <div className="flex justify-between w-full p-[18px] border mb-[23px] border-[#a1a1a1]">
              <Field
                className="outline-none w-full"
                type="text"
                name="address"
                autoCorrect="off"
              />
              <button
                type="button"
                className="text-[#659bf5] text-[14px] text-nowrap pl-4"
              >
                검색
              </button>
            </div>
            <Field
              className="p-[18px] border mb-[23px] border-[#a1a1a1] outline-none"
              type="text"
              name="additionalAddress"
              autoCorrect="off"
              placeholder="추가 주소"
            />
            <label htmlFor="contact">연락처</label>
            <Field
              className="p-[18px] border mb-[23px] border-[#a1a1a1] outline-none"
              type="text"
              name="contact"
              autoCorrect="off"
            />
            <div className="w-full h-[2px] bg-[#222] mt-[42px] mb-[25px]" />
            <div className="flex flex-col items-end [&_label]:text-[14px] [&_label]:font-semibold pb-[50px]">
              {errors.term && touched.term ? (
                <FormErrorMessage>{errors.term}</FormErrorMessage>
              ) : null}
              <label className="[&_input]:mr-2">
                <Field type="checkbox" name="term" />
                <span className="text-[#659bf5]">이용약관</span> 및{" "}
                <span className="text-[#659bf5]">개인정보</span> 처리 방침에
                동의합니다. (필수)
              </label>
              <label className="[&_input]:mr-2">
                <Field type="checkbox" name="advertisement" />
                광고 및 메일 수신에 동의합니다. (선택)
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#0565bb] p-[23px] text-[16px] text-white"
            >
              가입하기
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
