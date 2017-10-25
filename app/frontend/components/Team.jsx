import React from 'react'
import preload from './contacts'

const Team = props => {
  return (
    <div>
      <h1>Team</h1>
      <pre>
        <code>{JSON.stringify(preload, null, 4)}</code>
      </pre>
    </div>
  )
}

export default Team
