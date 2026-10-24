export const endpoints = {
  rides: {
    list: '/rides',
    detail: (id: string) => `/rides/${id}`,
    create: '/rides',
    book: (id: string) => `/rides/${id}/book`,
  },
  requests: {
    list: '/requests',
    detail: (id: string) => `/requests/${id}`,
    create: '/requests',
    offer: (id: string) => `/requests/${id}/offer`,
  },
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  user: {
    profile: '/users/me',
    vehicle: '/user/vehicle',
  },
} as const;
