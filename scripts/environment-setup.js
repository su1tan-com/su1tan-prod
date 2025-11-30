// Environment Setup Script
// Configures Node.js environment variables for production build

(function() {
    if (typeof document !== 'undefined') {
        if (typeof window.process === 'undefined') {
            window.process = {};
        }

        if (typeof window.process.env === 'undefined') {
            window.process.env = {};
        }

        // Set NODE_ENV to production for optimized Framer builds
        window.process.env.NODE_ENV = 'production';

        // Optional: Add other environment-specific configurations
        // window.process.env.API_URL = 'https://api.example.com';
        // window.process.env.ANALYTICS_ID = 'your-analytics-id';
    }
})();
