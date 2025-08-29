"use client";

import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Kirish ma'lumotlari:", values);
    // TODO: Backend API orqali login qilish
    // Agar login muvaffaqiyatli bo‘lsa → profile sahifasiga yo‘naltirish
    router.push("/profil");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-center text-xl font-semibold mb-5">Kirish</h2>

        <Form name="signin" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Telefon raqam"
            name="phone"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting!" },
              {
                pattern: /^(\+998|998)?[0-9]{9}$/,
                message:
                  "Telefon raqam noto‘g‘ri! Masalan: +998901234567",
              },
            ]}
          >
            <Input type="tel" placeholder="+998 90 123 45 67" />
          </Form.Item>

          <Form.Item
            label="Parol"
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password placeholder="********" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Kirish
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm mt-3">
          Hali ro‘yxatdan o‘tmaganmisiz?{" "}
          <a href="/signup" className="text-blue-600">Ro‘yxatdan o‘tish</a>
        </p>
      </div>
    </div>
  );
}
