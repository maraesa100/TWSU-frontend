import * as React from 'react'

interface RocketLaunchProps {
  onSubmit: (text: any) => void
  formValue: string
  handleChange: (text: any) => void
  willRocketLaunch: boolean
}

export const RocketLaunch: React.FC<RocketLaunchProps> = ({
  onSubmit,
  formValue,
  handleChange,
  willRocketLaunch
}) => (
  <div className='RocketLaunch'>
    <h3>Rocket Launcher</h3>

    <form onSubmit={e => onSubmit(e)}>
      <label>
        Enter Fuel:
        <input type='text' value={formValue} onChange={e => handleChange(e)} />
      </label>
      <input type='submit' value='Test' disabled={formValue.length < 1} />
    </form>

    <button
      disabled={!willRocketLaunch}
      onClick={() => console.log('launched')}
    >
      LAUNCH!!
    </button>
  </div>
)

export default RocketLaunch
