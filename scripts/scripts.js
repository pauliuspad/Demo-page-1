
        function fetchItemsData(){
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    for(var i=0; i <= 5; i++){
                        console.log(data[i].title);
                        document.getElementById("list").innerHTML += "<div>" + data[i].title +  "</div>" ;
                        document.getElementById("list").innerHTML += "<hr>"  ;
                    };
                    
                });
        };

        fetchItemsData();








