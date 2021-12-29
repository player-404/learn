const nodemailer = require("nodemailer");

const snedEmail = async (options) => {
  // 使用 smtp 链接连接邮箱
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    secure: true, // true for 465, false for other ports
    auth: {
      user: "1416826738@qq.com", // generated ethereal user
      pass: "zlylhnlgmpsshdjg", // generated ethereal password
    },
  });

  // 发送邮件时的选项
  let mailOption = {
    from: '"zp_liu" <zp_work@qq.com>',
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  //发送邮件
  await transporter.sendMail(mailOption);
};

module.exports = snedEmail;
