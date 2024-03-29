import request from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export function getCategoryAPI(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
