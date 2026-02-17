document.addEventListener('DOMContentLoaded', async () => {
    const usersTableBody = document.querySelector('#usersTable tbody');
    const subscriptionsTableBody = document.querySelector('#subscriptionsTable tbody');
    const totalUsersElement = document.getElementById('totalUsers');
    const activeSubscriptionsElement = document.getElementById('activeSubscriptions');

    // Fetch and Display Users
    async function fetchUsers() {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const users = await response.json();
            
            totalUsersElement.textContent = users.length;
            usersTableBody.innerHTML = '';

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role || 'user'}</td>
                    <td>
                        <button class="action-btn edit-btn" onclick="editUser('${user._id}')">Edit</button>
                        <button class="action-btn delete-btn" onclick="deleteUser('${user._id}')">Delete</button>
                    </td>
                `;
                usersTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            usersTableBody.innerHTML = '<tr><td colspan="4">Error loading users</td></tr>';
        }
    }

    // Fetch and Display Subscriptions
    async function fetchSubscriptions() {
        try {
            const response = await fetch('/api/subscriptions');
            if (!response.ok) throw new Error('Failed to fetch subscriptions');
            const subscriptions = await response.json();

            activeSubscriptionsElement.textContent = subscriptions.filter(sub => sub.status === 'active').length;
            subscriptionsTableBody.innerHTML = '';

            subscriptions.forEach(sub => {
                const userName = sub.user ? sub.user.name : 'Unknown User';
                const courseTitle = sub.course ? sub.course.title : 'Unknown Course';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${userName}</td>
                    <td>${courseTitle}</td>
                    <td>${sub.status}</td>
                    <td>${new Date(sub.expiryDate).toLocaleDateString()}</td>
                `;
                subscriptionsTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching subscriptions:', error);
            subscriptionsTableBody.innerHTML = '<tr><td colspan="4">Error loading subscriptions</td></tr>';
        }
    }

    // Initial Load
    await fetchUsers();
    await fetchSubscriptions();

    // Placeholder functions for actions
    window.editUser = (id) => {
        alert(`Edit user ${id} functionality coming soon!`);
    };

    window.deleteUser = async (id) => {
        if(confirm('Are you sure you want to delete this user?')) {
             try {
                const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
                if(response.ok) {
                    alert('User deleted');
                    fetchUsers(); // Refresh list
                } else {
                    alert('Failed to delete user');
                }
             } catch (error) {
                 console.error('Error deleting user:', error);
             }
        }
    };
});
