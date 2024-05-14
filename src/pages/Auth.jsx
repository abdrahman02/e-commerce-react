import { ConfigProvider, Card, Tabs } from "antd";
import { LogIn, UserPlus } from "lucide-react";
import Pattern from "../assets/images/pattern-green-min.jpg";
import useFormLayout from "../components/layouts/AuthFormLayout";
const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika penanganan submit form di sini
  };

  const loginFields = [
    { name: "username", label: "Username", placeholder: "Masukkan username" },
    {
      name: "password",
      label: "Password",
      placeholder: "Masukkan password",
      type: "password",
    },
    { checkBoxText: "Remember Me" },
    { buttonText: "Masuk" },
  ];

  const registerFields = [
    { name: "name", label: "Nama", placeholder: "Masukkan nama" },
    {
      name: "email",
      label: "Email",
      placeholder: "Masukkan email",
      type: "email",
    },
    { name: "username", label: "Username", placeholder: "Masukkan username" },
    {
      name: "password",
      label: "Password",
      placeholder: "Masukkan password",
      type: "password",
    },
    {
      name: "confPassword",
      label: "Konfirmasi Password",
      placeholder: "Masukkan konfirmasi password",
      type: "password",
    },
    {
      name: "phone",
      label: "Nomor Hanphone",
      placeholder: "Masukkan nomor handphone",
      type: "phone",
    },
    { buttonText: "Daftar" },
  ];

  const items = [
    {
      key: "1",
      label: (
        <p className="text-base font-medium flex flex-row justify-center items-center">
          <LogIn size={17} />
          &nbsp;Masuk
        </p>
      ),
      children: (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col gap-y-3"
        >
          {useFormLayout(loginFields)}
        </form>
      ),
    },
    {
      key: "2",
      label: (
        <p className="text-base font-medium flex flex-row justify-center items-center">
          <UserPlus size={17} />
          &nbsp;Daftar
        </p>
      ),
      children: (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col gap-y-3"
        >
          {useFormLayout(registerFields)}
        </form>
      ),
    },
  ];

  return (
    <main className="h-screen flex flex-row">
      <section className="w-1/2 h-full">
        <img
          src={Pattern}
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="h-full w-1/2 p-16 flex justify-center">
        <Card className="h-max w-full shadow-sm text-neutral text-base font-medium">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  inkBarColor: "#0eb596",
                  itemActiveColor: "#3b424e",
                  itemColor: "#3b424e",
                  itemHoverColor: "#0eb596",
                  itemSelectedColor: "#0eb596",
                },
              },
            }}
          >
            <Tabs centered defaultActiveKey="1" items={items} />
          </ConfigProvider>
        </Card>
      </section>
    </main>
  );
};

export default Auth;
