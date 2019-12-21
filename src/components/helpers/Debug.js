import React from 'react'

const Debug = props => <pre>{JSON.stringify(props, 2, ' ')}</pre>

export default Debug
