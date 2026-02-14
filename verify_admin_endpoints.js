// No imports needed for Node 18+ native fetch
// If we are in a module environment, we can just use global fetch

const BASE_URL = 'http://localhost:5000';

async function testEndpoint(endpoint) {
    try {
        console.log(`\nTesting ${endpoint}...`);
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const status = response.status;
        console.log(`Status: ${status}`);
        
        if (status === 200) {
            const data = await response.json();
            console.log(`Data count: ${Array.isArray(data) ? data.length : 'Not an array'}`);
            if (Array.isArray(data) && data.length > 0) {
                 console.log('Sample data:', JSON.stringify(data[0], null, 2));
            } else {
                console.log('Data:', data);
            }
            return true;
        } else {
            console.error(`Failed: ${response.statusText}`);
            const text = await response.text();
            console.error('Response:', text);
            return false;
        }
    } catch (error) {
        console.error(`Error testing ${endpoint}:`, error.message);
        return false;
    }
}

async function runTests() {
    console.log('Starting Admin API verification...');
    
    const usersOk = await testEndpoint('/api/users');
    const subsOk = await testEndpoint('/api/subscriptions');

    if (usersOk && subsOk) {
        console.log('\nAll admin endpoints verified successfully.');
    } else {
        console.log('\nSome endpoints failed verification.');
        process.exit(1);
    }
}

runTests();
