// config/mpesa.js

const axios = require('axios');
require('dotenv').config();

const getAccessToken = async () => {
    const credentials = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
    
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching M-Pesa access token:', error);
        throw error;
    }
};

const lipaNaMpesaOnline = async (phoneNumber, amount) => {
    const accessToken = await getAccessToken();
    
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                "BusinessShortCode": process.env.MPESA_SHORTCODE,
                "Password": process.env.MPESA_PASSKEY,
                "Timestamp": new Date().toISOString().replace(/[-:.T]/g, '').slice(0, 14),
                "TransactionType": "CustomerPayBillOnline",
                "Amount": amount,
                "PartyA": phoneNumber,
                "PartyB": process.env.MPESA_SHORTCODE,
                "PhoneNumber": phoneNumber,
                "CallBackURL": process.env.MPESA_CALLBACK_URL,
                "AccountReference": "Test123",
                "TransactionDesc": "Payment for testing"
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error processing M-Pesa payment:', error);
        throw error;
    }
};

module.exports = { lipaNaMpesaOnline };
