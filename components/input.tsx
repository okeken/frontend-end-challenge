import {} from 'react'

interface Props {
  className?: string
  handleChange?: (e: any) => void
  placehlder?: string
}
const Input = ({
  handleChange,
  className,
  placehlder = 'search your resources',
  ...others
}: Props) => {
  return (
    <>
      <input
        {...others}
        placeholder={placehlder}
        className="block w-full border p-3"
        onChange={handleChange}
      />
    </>
  )
}

export default Input
