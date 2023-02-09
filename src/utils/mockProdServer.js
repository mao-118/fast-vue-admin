import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 导入您的mock文件
import mockModules from '../../mock'

function setupProdMockServer() {
  createProdMockServer([...mockModules])
}

export function useProdMock() {
  if (import.meta.env.MODE === 'production') {
    setupProdMockServer()
  }
}
