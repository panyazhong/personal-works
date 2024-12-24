import { applyJoin, uploadFile } from "@/api";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Upload, message } from "antd";
import { useState } from "react";
import { tw } from "twind";
import { css } from "twind/css";

const { Item } = Form;
const { Dragger } = Upload;

const JoinUnion = () => {
  const [filePath, setFilePath] = useState("");
  const [form] = Form.useForm();

  const upProps: UploadProps = {
    beforeUpload: () => false,
    onChange(info) {
      const fd = new FormData();
      fd.append("file", info.file as unknown as Blob);

      uploadFile(fd).then((res) => {
        setFilePath(res.data);
      });
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    showUploadList: false,
  };

  const handleClick = async () => {
    const valids = await form.validateFields();

    if (valids) {
      console.log({
        ...valids,
        filePath,
      });
      const res = await applyJoin({
        ...valids,
        filePath,
      });
      if (res) {
        message.success("提交成功, 请耐心等待审核!!");
        form.resetFields();
        setFilePath("");
      }
    }
  };

  return (
    <div className={tw`w-full flex justify-center items-center`}>
      <div className={tw`w-[80%] max-w-[500px]`}>
        <Form
          layout="vertical"
          className={tw`
            ${css`
              .ant-form-item .ant-form-item-label > label {
                color: #fff !important;
              }
              .anticon {
                color: #fff !important;
              }
            `}
          `}
          form={form}
        >
          <Item label="Full Name 姓名" name="name">
            <Input placeholder="Full Name" />
          </Item>
          <Item label="Email Address 邮箱" name="email">
            <Input placeholder="Email Address" />
          </Item>
          <Item label="Upload Your CV 简历上传">
            <Dragger {...upProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className={tw`text-frc-100 font-bold text-[14px]`}>
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Item>
          <div className={tw`relative w-full`}>
            {filePath && (
              <>
                <Button
                  type="text"
                  className={tw`absolute top-[0px] right-[0px] z-[99] text-[#ccc]`}
                  onClick={() => {
                    setFilePath("");
                  }}
                >
                  删除
                </Button>
                {filePath.includes("png") ||
                filePath.includes("jpg") ||
                filePath.includes("jpeg") ? (
                  <Image
                    src={`http://www.nanfang-art.com${filePath}`}
                    className={tw`w-full`}
                    preview={false}
                  />
                ) : (
                  <span className="text-[#ccc] text-[14px]">
                    {filePath.split("/").reverse()[0]}
                  </span>
                )}
              </>
            )}
          </div>

          <Item label="Phone Number 电话" name="phone">
            <Input placeholder="Phone Number" />
          </Item>
          <Item label="Additional Information 信息备注" name="information">
            <Input.TextArea rows={10} placeholder="Additional Information" />
          </Item>
        </Form>

        <Button
          className={tw`w-full border-none`}
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default JoinUnion;
