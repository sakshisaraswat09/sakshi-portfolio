// JobTracker Database Client using Trickle Database
const jobTrackerDB = {
  // User management
  async createUser(email) {
    const userData = {
      id: `user_${Date.now()}`,
      email: email,
      created_at: new Date().toISOString()
    };
    return await trickleCreateObject('users', userData);
  },

  async getUser(userId) {
    return await trickleGetObject('users', userId);
  },

  // Application management
  async getApplications(userId) {
    const result = await trickleListObjects(`applications:${userId}`, 50, true);
    return result.items.map(item => ({
      ...item.objectData,
      id: item.objectId,
      created_at: item.createdAt,
      updated_at: item.updatedAt
    }));
  },

  async createApplication(userId, applicationData) {
    return await trickleCreateObject(`applications:${userId}`, applicationData);
  },

  async updateApplication(userId, applicationId, updates) {
    return await trickleUpdateObject(`applications:${userId}`, applicationId, updates);
  },

  async deleteApplication(userId, applicationId) {
    return await trickleDeleteObject(`applications:${userId}`, applicationId);
  },

  // Notification management
  async getNotifications(userId) {
    const result = await trickleListObjects(`notifications:${userId}`, 20, true);
    return result.items.map(item => ({
      ...item.objectData,
      id: item.objectId,
      created_at: item.createdAt
    }));
  },

  async createNotification(userId, notification) {
    return await trickleCreateObject(`notifications:${userId}`, notification);
  }
};

// Mock authentication for development
const mockAuth = {
  currentUser: null,
  
  signUp: async (email, password) => {
    try {
      const user = await jobTrackerDB.createUser(email);
      mockAuth.currentUser = { id: user.objectId, email };
      return { success: true, data: { user: mockAuth.currentUser } };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  signIn: async (email, password) => {
    // In a real app, validate credentials
    mockAuth.currentUser = { id: 'demo-user', email };
    return { success: true, data: { user: mockAuth.currentUser } };
  },

  signOut: async () => {
    mockAuth.currentUser = null;
    return { success: true };
  },

  getSession: async () => {
    return { data: { session: mockAuth.currentUser ? { user: mockAuth.currentUser } : null } };
  },

  onAuthStateChange: (callback) => {
    // Simple mock implementation
    return { data: { subscription: { unsubscribe: () => {} } } };
  }
};

// Export for compatibility
const supabase = {
  auth: mockAuth,
  from: (table) => ({
    select: () => ({ eq: () => ({ data: [], error: null }) }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ eq: () => ({ data: null, error: null }) }),
    delete: () => ({ eq: () => ({ data: null, error: null }) })
  })
};
