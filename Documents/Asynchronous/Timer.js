function search(url) {
            let controller= new AbortController();
            setTimeout(() => {    
                controller.abort ()
            }, 3)
            fetch(url,{
                    signal: controller.signal})
            .then(Response=>Response.json())
            .then(data => console.log(data))
            .catch(error=>console.error(error)
            )
        }
        search("https://restcountries.com/v3.1/all")