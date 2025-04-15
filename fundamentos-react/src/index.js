import './index.css'
import ReactDOM from 'react-dom/client'
import {React} from 'react';

const tag = <strong>Olá React</strong>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div>
        { tag }
        </div>
  )