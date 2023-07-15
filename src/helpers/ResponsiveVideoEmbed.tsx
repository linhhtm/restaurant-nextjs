'use client'
import React, { useState } from 'react'
import { Spinner } from 'components'
import { IResponsiveVideoEmbed } from 'types'

const ResponsiveVideoEmbed = ({
  url,
  background = 'black',
  className = 'video'
}: IResponsiveVideoEmbed) => {
  const [loading, setLoading] = useState(true)
  function onLoad() {
    setLoading(false)
  }

  return (
    <>
      {loading && <Spinner />}
      <div
        className={className}
        style={{
          background: background,
          paddingBottom: '56.25%' /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          onLoad={onLoad}
          title="Embeded Video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          src={url}
        />
      </div>
    </>
  )
}

export default ResponsiveVideoEmbed
