function StatusBadge({ status }) {
  try {
    const getStatusStyle = (status) => {
      const styles = {
        'Applied': 'bg-blue-100 text-blue-800',
        'Under Review': 'bg-purple-100 text-purple-800',
        'Interview': 'bg-yellow-100 text-yellow-800',
        'Offer': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800',
        'Withdrawn': 'bg-gray-100 text-gray-800',
        'Hired': 'bg-emerald-100 text-emerald-800'
      };
      return styles[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusIcon = (status) => {
      const icons = {
        'Applied': 'send',
        'Under Review': 'clock',
        'Interview': 'calendar',
        'Offer': 'gift',
        'Rejected': 'x-circle',
        'Withdrawn': 'minus-circle',
        'Hired': 'check-circle'
      };
      return icons[status] || 'circle';
    };

    return (
      <span 
        className={`status-badge ${getStatusStyle(status)} flex items-center gap-1`}
        data-name="status-badge" 
        data-file="components/StatusBadge.js"
      >
        <div className={`icon-${getStatusIcon(status)} text-sm`}></div>
        {status}
      </span>
    );
  } catch (error) {
    console.error('StatusBadge component error:', error);
    return null;
  }
}