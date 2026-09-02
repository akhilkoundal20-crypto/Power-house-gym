import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Shailreet ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#23201D] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#FFFFFF] border border-[#ECE3D6] rounded-2xl p-8 shadow-craft-lg text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FAEEF1] text-[#852233] flex items-center justify-center mx-auto text-xl font-hindi font-bold">
              शैलरीत
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#23201D]">
              A Small Mountain Hitch
            </h2>
            <p className="text-xs text-[#766D64] leading-relaxed">
              We encountered an unexpected issue while loading this handcrafted section. Please refresh or return to the main collections.
            </p>
            <div className="pt-2 flex gap-3 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="px-5 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-xl hover:bg-[#1E352C] transition-colors"
              >
                Return to Home
              </button>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-5 py-2.5 bg-[#FAF7F2] text-[#23201D] border border-[#DDD1C0] text-xs font-semibold rounded-xl hover:bg-[#F4EFE7] transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
