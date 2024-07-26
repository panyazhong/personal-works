import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, message } from "antd";
import { tw } from "twind";
import { css } from "twind/css";

const { Item } = Form;
const { Dragger } = Upload;

const JoinUnion = () => {
  return (
    <div className={tw`w-full h-full flex justify-center items-center`}>
      <div className={tw`w-[80%] max-w-[500px]`}>
        <Form
          layout="vertical"
          className={tw`
            ${css`
              .ant-form-item .ant-form-item-label > label {
                color: #ffebc8 !important;
              }
              .anticon {
                color: #ffebc8 !important;
              }
            `}
          `}
        >
          <Item label="Full Name 姓名">
            <Input placeholder="Full Name" />
          </Item>
          <Item label="Email Address 邮箱">
            <Input placeholder="Email Address" />
          </Item>
          <Item label="Upload Your CV 简历上传">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className={tw`text-frc-100 font-bold text-[14px]`}>
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Item>
          <Item label="Phone Number 电话">
            <Input placeholder="Phone Number" />
          </Item>
          <Item label="Additional Information 信息备注">
            <Input.TextArea rows={10} placeholder="Additional Information" />
          </Item>
        </Form>

        <Button
          className={tw`w-full border-none`}
          onClick={() => {
            message.success("提交成功，待审核...");
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default JoinUnion;
