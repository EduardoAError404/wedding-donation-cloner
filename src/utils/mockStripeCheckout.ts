
// Mock API for creating Stripe Checkout Session
// Replace this with your actual backend implementation

export const createCheckoutSession = async (data: {
  amount: number;
  currency: string;
  customer_name: string;
  customer_email: string;
}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock response - in production, this would come from your backend
  return {
    sessionId: 'cs_test_' + Math.random().toString(36).substr(2, 9),
  };
};

// Intercept fetch requests to /api/create-checkout-session
const originalFetch = window.fetch;
window.fetch = async (url: string | URL | Request, options?: RequestInit) => {
  if (typeof url === 'string' && url.includes('/api/create-checkout-session')) {
    try {
      const body = JSON.parse(options?.body as string);
      const result = await createCheckoutSession(body);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to create checkout session' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  return originalFetch(url, options);
};
