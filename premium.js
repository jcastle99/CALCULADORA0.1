const stripe = require('stripe')('tu-clave-secreta-de-stripe'); // Reemplaza con tu clave secreta de Stripe

exports.handler = async (event) => {
  const { token } = JSON.parse(event.body);
  try {
    const charge = await stripe.charges.create({
      amount: 500, // 5€ en centavos
      currency: 'eur',
      source: token,
      description: 'Acceso Premium Calculadora FRIOR',
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};