function ConnectGmail({ onConnect }) {
  try {
    const [connecting, setConnecting] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleConnect = async () => {
      setConnecting(true);
      setError('');

      try {
        const result = await connectGmail();
        if (result.success) {
          onConnect();
        } else {
          setError(result.error || 'Failed to connect Gmail');
        }
      } catch (err) {
        setError('An error occurred while connecting Gmail');
      }
      
      setConnecting(false);
    };

    return (
      <div className="card bg-blue-50 border-blue-200" data-name="connect-gmail" data-file="components/ConnectGmail.js">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="icon-mail text-xl text-white"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Connect Your Gmail Account
            </h3>
            <p className="text-blue-700 mb-4">
              Automatically track job applications from your email. We'll scan for application confirmations, 
              interview invites, and status updates to keep your dashboard up to date.
            </p>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}
            
            <button
              onClick={handleConnect}
              disabled={connecting}
              className="btn btn-primary"
            >
              {connecting ? (
                <>
                  <div className="icon-loader-2 text-lg animate-spin"></div>
                  Connecting Gmail...
                </>
              ) : (
                <>
                  <div className="icon-link text-lg"></div>
                  Connect Gmail
                </>
              )}
            </button>
            
            <p className="text-xs text-blue-600 mt-2">
              🔒 Your email data is processed securely and never stored permanently.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ConnectGmail component error:', error);
    return null;
  }
}