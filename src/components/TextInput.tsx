import { clsx } from 'clsx'
import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInput(props: TextInputProps) {
    return (
        <input
            className={clsx(
                'py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs outline-none placeholder:text-gray-400 focus:ring-2 ring-cyan-300',
            )}
            {...props}
        />
    )
}