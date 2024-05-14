import { useState } from "react";
import { ConfigProvider, Input, Button, Checkbox } from "antd";
import { User, Lock, Mail, Phone } from "lucide-react";

const useFormLayout = (formFields) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confPasswordVisible, setConfPasswordVisible] = useState(false);

  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          colorPrimary: "#0eb596",
        },
        components: {
          Input: {
            activeBorderColor: "#0eb596",
            hoverBorderColor: "#0eb596",
          },
          Button: {
            defaultColor: "#ffffff",
            defaultBg: "#0eb596",
            defaultActiveBorderColor: "#0eb596",
            defaultActiveColor: "#0eb596",
            defaultHoverBg: "#0c8871",
            defaultHoverBorderColor: "#0eb596",
            defaultHoverColor: "#ffffff",
            groupBorderColor: "#0eb596",
          },
        },
      }}
    >
      {formFields.map((field, index) => {
        if (field.name) {
          return (
            <div className="form-control" key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "password" ? (
                <Input.Password
                  name={field.name}
                  className="h-8"
                  prefix={<Lock size={17} />}
                  placeholder={field.placeholder}
                  visibilityToggle={{
                    visible:
                      field.name === "password"
                        ? passwordVisible
                        : confPasswordVisible,
                    onVisibleChange:
                      field.name === "password"
                        ? setPasswordVisible
                        : setConfPasswordVisible,
                  }}
                />
              ) : (
                <Input
                  name={field.name}
                  className="h-8"
                  placeholder={field.placeholder}
                  prefix={
                    field.type === "email" ? (
                      <Mail size={17} />
                    ) : field.type === "phone" ? (
                      <Phone size={17} />
                    ) : (
                      <User size={17} />
                    )
                  }
                />
              )}
            </div>
          );
        } else if (field.checkBoxText) {
          return <Checkbox key={index}>{field.checkBoxText}</Checkbox>;
        } else {
          return (
            <Button htmlType="submit" className="h-[35px]" key={index}>
              {formFields[formFields.length - 1].buttonText}
            </Button>
          );
        }
      })}
    </ConfigProvider>
  );
};

export default useFormLayout;
