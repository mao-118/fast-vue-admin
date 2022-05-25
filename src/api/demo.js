import request from '@/utils/request';
export const getList = (params) => {
  return request({
    url: '/fast-vue-admin/api/demoList',
    method: 'get',
    params
  });
};
