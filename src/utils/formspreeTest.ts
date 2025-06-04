/**
 * Test utility to check Formspree endpoint
 */

export const testFormspreeEndpoint = async () => {
  try {
    console.log('Testing Formspree endpoint...');
    
    const response = await fetch('https://formspree.io/f/mwpbkgao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: 'test@example.com',
        message: 'Test message',
        source: 'Test',
        timestamp: new Date().toISOString()
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const responseText = await response.text();
    console.log('Response body:', responseText);
    
    return {
      ok: response.ok,
      status: response.status,
      body: responseText
    };
  } catch (error) {
    console.error('Formspree test failed:', error);
    return {
      ok: false,
      error: error
    };
  }
};

export const testEmailJSConfig = () => {
  console.log('EmailJS Configuration:');
  console.log('Service ID:', 'service_usc26od');
  console.log('Template ID:', 'template_9dxuoup');
  console.log('Public Key:', '20_z-xj2NzRCRugP9');
};
