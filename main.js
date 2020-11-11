var reasons = [
    "my father siddharta panda",
    "my mom sujata panda",
    "my grandma kumudini panda",
    "my grandpa sarat chandra panda"
    ];
    
    var images = [
    "index.jpg",
    "meeee.jpg",
    "https://images.unsplash.com/photo-1470165730317-b0f82e73778a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1501284803395-49de7752f480?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    ];
    
    var i = 0;
    function nextslide(){
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    }