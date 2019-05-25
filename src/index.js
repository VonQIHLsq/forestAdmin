import React from 'react'
import { render } from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'

import App from './App'

render(
    <LocaleProvider locale={zhCN}>
        <App />
    </LocaleProvider>,
    document.querySelector('#root')
)
