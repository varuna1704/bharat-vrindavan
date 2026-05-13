import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('3D viewer error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-80 flex-col items-center justify-center bg-[#1E0B3B] px-6 text-center text-white">
          <h2 className="font-display text-2xl text-[#FAC775]">Something went wrong loading the 3D viewer.</h2>
          <p className="mt-3 max-w-md text-white/72">Your device may not support WebGL.</p>
          <Link to="/" className="mt-5 bg-[#FAC775] px-4 py-2 font-nav text-sm uppercase tracking-[0.12em] text-[#1E0B3B]">
            Go back to gallery
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}
