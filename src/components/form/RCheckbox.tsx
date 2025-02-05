import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function RCheckbox({checked = false, label}: {checked: boolean, label: string}) {
  const id = uuidv4()
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <div className="flex items-center">
        <input 
          id={id} 
          type="checkbox" 
          checked={isChecked}
          onChange={e => {
            setIsChecked(e.target.checked)
          }}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={id} className="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    </div>
  )
}