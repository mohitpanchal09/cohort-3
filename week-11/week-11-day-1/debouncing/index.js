let timeoutId;


function searchBackend(){
    // fetch("") // send the req to backend
    console.log('sent the request to the backend');
}

function debouncedSearchBackend(){
    clearTimeout(timeoutId)
    timeoutId=setTimeout(searchBackend,30)
}

debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
