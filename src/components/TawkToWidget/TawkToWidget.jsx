import React, { useEffect } from 'react'

const TawkToWidget = () => {
  useEffect(() => {
    console.log('Injecting Tawk.to script...') // Debug log

    // Check if the Tawk.to script is already loaded
    if (!window.Tawk_API) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://embed.tawk.to/6792314e825083258e09e569/1ii9h16ur' // Replace with your widget ID
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')

      script.onload = () => {
        console.log('Tawk.to script loaded successfully!') // Debug log
      }

      script.onerror = () => {
        console.error('Failed to load Tawk.to script!') // Debug log
      }

      document.body.appendChild(script)

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script)
      }
    } else {
      console.log('Tawk.to script already loaded.') // Debug log
    }
  }, [])

  return null // This component doesn't render anything
}

export default TawkToWidget
