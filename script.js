function showDetails(item) {
    var details = '';
    switch(item) {
        case 'CRM':
            details = 'Mr. Sanjay Pawar'; 
            break;
        case 'DBA':
            details = 'ABP <br> 1. User : abc <br> 2. Pass : xyz <br> 3. TNS_Database : aaa'; 
            break;
        case 'Unix':
            details = 'Mr. Swapnil Darshnale'; 
            break;
        case 'OSB':
            details = 'Mr. Ajay Morde'; 
            break;
        case 'SOM':
            details = 'Miss. Sanjay chi bayko <br> amchi vanhini'; 
            break;
        case 'MCO':
            details = 'Mr. Shrinivas Katkamwar'; 
            break;
    }
    document.getElementById('box').innerHTML = details;
}
