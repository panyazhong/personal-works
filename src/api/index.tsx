import axios from "axios";

const queryArticleList = () => {
  return axios
    .request({
      url: "/back/article/queryArticleList",
      method: "post",
    })
    .then((res) => {
      return res.data;
    });
};
const queryArticleDetail = (data: { groupId: number }) => {
  return axios
    .request({
      url: "/back/article/queryArticleDetail",
      method: "post",
      data,
    })
    .then((res) => {
      return res.data;
    });
};

const queryPaintList = () => {
  return axios
    .request({
      url: "/back/paint/queryPaintList",
      method: "post",
    })
    .then((res) => {
      return res.data;
    });
};

export { queryArticleList, queryArticleDetail, queryPaintList };