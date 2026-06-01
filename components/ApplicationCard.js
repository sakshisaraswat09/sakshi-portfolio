function ApplicationCard({ application }) {
  try {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const getStatusColor = (status) => {
      const colors = {
        'Applied': 'bg-blue-100 text-blue-800',
        'Under Review': 'bg-purple-100 text-purple-800',
        'Interview': 'bg-yellow-100 text-yellow-800',
        'Offer': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800',
        'Withdrawn': 'bg-gray-100 text-gray-800'
      };
      return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
      <div className="card hover:shadow-lg transition-shadow duration-200" data-name="application-card" data-file="components/ApplicationCard.js">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {application.job_title}
            </h3>
            <p className="text-primary font-medium">
              {application.company_name}
            </p>
          </div>
          <StatusBadge status={application.current_status} />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-secondary">
          <div>
            <span className="font-medium">Applied:</span>
            <div>{formatDate(application.first_seen_at)}</div>
          </div>
          <div>
            <span className="font-medium">Last Update:</span>
            <div>{formatDate(application.last_updated_at)}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <button className="btn btn-secondary text-sm flex-1">
            <div className="icon-eye text-base"></div>
            View Details
          </button>
          <button className="btn btn-secondary text-sm">
            <div className="icon-external-link text-base"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ApplicationCard component error:', error);
    return null;
  }
}