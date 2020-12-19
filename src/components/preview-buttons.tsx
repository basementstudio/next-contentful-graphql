import { useCallback, useEffect, useState } from 'react'

const PreviewButtons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleExitPreview = useCallback(async () => {
    try {
      setIsLoading(true)
      await fetch('/api/preview-disable')
      window.location.reload()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleCopy = useCallback(() => {
    // TODO implement copy
    setCopied(true)
  }, [])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div
      style={{
        position: 'fixed',
        top: 48,
        right: 48,
        zIndex: 1000,
        background: 'white',
        padding: 16
      }}
    >
      <div>
        <button
          style={{
            cursor: isLoading ? 'wait' : 'pointer'
          }}
          disabled={isLoading}
          onClick={handleExitPreview}
        >
          Exit preview{' '}
        </button>
        <button onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy preview link'}{' '}
        </button>
      </div>
    </div>
  )
}

export default PreviewButtons
