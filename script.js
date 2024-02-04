const input = document.querySelector('.search-menu-box');
const icon = document.querySelector('.search-menu-icon');
const chevronIcon = document.querySelectorAll('.chevron');
const sidebarMenu = document.querySelectorAll('.sidebar-menu')

// Event listener for when the input box gains focus (clicked)
input.addEventListener('focus', hideIcon = () => {
    console.log();
    icon.style.display = 'none'; // Hide the icon when input is focused
});

// Event listener for when the input box loses focus
input.addEventListener('blur', showIcon = () => {
    if (input.value.trim() === '') {
        icon.style.display = 'inline-block'; // Show the icon if input is empty and loses focus
    }
});

// Event listener for clicked chevron
chevronIcon.forEach(element => {
    element.addEventListener('click', rotateChevron = () => {

        // Rotate chevron if user click other chevron menu
        // chevronIcon.forEach(icon => {
        //     icon.classList.remove('rotate');
        //     icon.classList.add('rotate0');
        // });

        if(element.classList.contains('rotate')){
            element.classList.remove('rotate');
            element.classList.add('rotate0');
        } else {
            element.classList.remove('rotate0');
            element.classList.add('rotate');
        }
    })
});

// Set sidebar menu title change color while clicked
sidebarMenu.forEach(title => {

    const sidebarMenuSecondElement = title.querySelector('.sidebar-menu-title');

    title.addEventListener('click', function(){
        
        sidebarMenu.forEach(color => {

            const sidebarMenuSecondElement = color.querySelector('.sidebar-menu-title');

            sidebarMenuSecondElement.classList.remove('active')
        })

        sidebarMenuSecondElement.classList.toggle('active');
    })
})

// Change icon while menu is active
function changeIcon(menuId) {
    // Reset all menu icons
        document.getElementById('iconDashboard').src = 'assets/Sidebar/Menu/Icon/icon-dashboard-default.svg';
        document.getElementById('iconProduct').src = 'assets/Sidebar/Menu/Icon/icon-product-default.svg';
        document.getElementById('iconOrder').src = 'assets/Sidebar/Menu/Icon/icon-order-default.svg';
        document.getElementById('iconCustomer').src = 'assets/Sidebar/Menu/Icon/icon-customer-default.svg';
        document.getElementById('iconShop').src = 'assets/Sidebar/Menu/Icon/icon-shop-default.svg';
        document.getElementById('iconSales').src = 'assets/Sidebar/Menu/Icon/icon-sales-default.svg';
        document.getElementById('iconAnalytics').src = 'assets/Sidebar/Menu/Icon/icon-analytics-default.svg';
        document.getElementById('iconIntegrations').src = 'assets/Sidebar/Menu/Icon/icon-integrations-default.svg';

    // Change icon for the clicked menu item
    switch(menuId) {
        case 'dashboard':
            document.getElementById('iconDashboard').src = 'assets/Sidebar/Menu/Icon/icon-dashboard-active.svg';
            break;
        case 'product':
            document.getElementById('iconProduct').src = 'assets/Sidebar/Menu/Icon/icon-product-active.svg';
            break;
        case 'order':
            document.getElementById('iconOrder').src = 'assets/Sidebar/Menu/Icon/icon-order-active.svg';
            break;
        case 'customer':
            document.getElementById('iconCustomer').src = 'assets/Sidebar/Menu/Icon/icon-customer-active.svg';
            break;
        case 'shop':
            document.getElementById('iconShop').src = 'assets/Sidebar/Menu/Icon/icon-shop-active.svg';
            break;
        case 'sales':
            document.getElementById('iconSales').src = 'assets/Sidebar/Menu/Icon/icon-sales-active.svg';
            break;
        case 'analytics':
            document.getElementById('iconAnalytics').src = 'assets/Sidebar/Menu/Icon/icon-analytics-active.svg';
            break;
        case 'integrations':
            document.getElementById('iconIntegrations').src = 'assets/Sidebar/Menu/Icon/icon-integrations-active.svg';
            break;
        // Add more cases for other menu IDs as needed
        default:
            // Handle default case
            break;
    }
}
