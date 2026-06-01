function Dashboard({ user }) {
  try {
    const [applications, setApplications] = React.useState([]);
    const [gmailConnected, setGmailConnected] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const loadApplications = async () => {
        try {
          const apps = await jobTrackerDB.getApplications(user.id);
          
          // If no applications found, show demo data
          if (apps.length === 0) {
            setApplications([
              {
                id: '1',
                company_name: 'Google',
                job_title: 'Software Engineering Intern',
                current_status: 'Interview',
                first_seen_at: '2025-09-20T10:00:00Z',
                last_updated_at: '2025-09-25T15:30:00Z'
              },
              {
                id: '2',
                company_name: 'Microsoft',
                job_title: 'Product Manager Intern',
                current_status: 'Applied',
                first_seen_at: '2025-09-18T14:20:00Z',
                last_updated_at: '2025-09-18T14:20:00Z'
              },
              {
                id: '3',
                company_name: 'Meta',
                job_title: 'Data Science Intern',
                current_status: 'Offer',
                first_seen_at: '2025-09-15T09:00:00Z',
                last_updated_at: '2025-09-26T11:45:00Z'
              }
            ]);
          } else {
            setApplications(apps);
          }
        } catch (error) {
          console.error('Error loading applications:', error);
          setApplications([]);
        } finally {
          setLoading(false);
        }
      };

      loadApplications();
    }, [user.id]);

    const getStatusStats = () => {
      const stats = applications.reduce((acc, app) => {
        acc[app.current_status] = (acc[app.current_status] || 0) + 1;
        return acc;
      }, {});
      
      return {
        total: applications.length,
        applied: stats['Applied'] || 0,
        interview: stats['Interview'] || 0,
        offer: stats['Offer'] || 0,
        rejected: stats['Rejected'] || 0
      };
    };

    const handleAddApplication = async () => {
      const company = prompt('Enter company name:');
      const jobTitle = prompt('Enter job title:');
      
      if (company && jobTitle) {
        try {
          const newApp = {
            company_name: company,
            job_title: jobTitle,
            current_status: 'Applied',
            first_seen_at: new Date().toISOString(),
            last_updated_at: new Date().toISOString(),
            confidence: 1.0,
            notes: ''
          };
          
          await jobTrackerDB.createApplication(user.id, newApp);
          
          // Refresh applications
          const updatedApps = await jobTrackerDB.getApplications(user.id);
          setApplications(updatedApps);
          
          // Create notification
          await jobTrackerDB.createNotification(user.id, {
            application_id: newApp.id,
            message: `New application added for ${jobTitle} at ${company}`,
            type: 'StatusUpdate',
            is_read: false
          });
        } catch (error) {
          console.error('Error adding application:', error);
        }
      }
    };

    const stats = getStatusStats();

    if (loading) {
      return (
        <div className="text-center py-12" data-name="dashboard-loading" data-file="components/Dashboard.js">
          <div className="icon-loader-2 text-4xl text-primary animate-spin mb-4"></div>
          <p className="text-secondary">Loading your applications...</p>
        </div>
      );
    }

    return (
      <div className="space-y-8" data-name="dashboard" data-file="components/Dashboard.js">
        {!gmailConnected && <ConnectGmail onConnect={() => setGmailConnected(true)} />}
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary">{stats.total}</div>
            <div className="text-secondary mt-1">Total Applications</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.applied}</div>
            <div className="text-secondary mt-1">Applied</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-yellow-600">{stats.interview}</div>
            <div className="text-secondary mt-1">Interview</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">{stats.offer}</div>
            <div className="text-secondary mt-1">Offers</div>
          </div>
        </div>

        {/* Applications List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Applications</h2>
            <button 
              className="btn btn-primary"
              onClick={handleAddApplication}
            >
              <div className="icon-plus text-lg"></div>
              Add Application
            </button>
          </div>

          {applications.length === 0 ? (
            <div className="card text-center py-12">
              <div className="icon-briefcase text-6xl text-gray-300 mb-4"></div>
              <h3 className="text-xl font-medium mb-2">No applications yet</h3>
              <p className="text-secondary mb-6">
                Connect your Gmail to automatically track job applications from your emails.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {applications.map(app => (
                <ApplicationCard key={app.id} application={app} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}