<%-- 
    Document   : index
    Created on : 13/06/2021, 15:49:41
    Author     : Mendes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <h2>Page using Jboss 7.1 server in port --http://localhost:8080/application1.1/--</h2>
        <br>
        <h4>
            call api using fetch -- http://localhost:3000 --
        </h4>
        <div id="data">

        </div>
        <script>
            function requestData() {
                const url = 'http://localhost:3000'
                const _METHODS = {
                        method :'GET',
                        cache  :'default',
                        status :200
                    }
                    fetch(url,_METHODS)
                        .then(response => response.json())
                        .then(response => {
                            response.map(items =>{
                                //id,item,distribuidor
                                const itemsIdBack = 'ID:' + items.id + ','
                                const itemsItemBack = 'ITEM:' + items.item + ','
                                const itemsDistribuidorBack = 'DISTRIBUIDOR:' + items.distribuidor

                                 
                                const itemsIdH4 = document.createElement('h4')
                                itemsIdH4.append(itemsIdBack)
                                const itemsItemStrong = document.createElement('strong')
                                itemsItemStrong.append(itemsItemBack)
                                const itemsDistribuidorStrong = document.createElement('strong')
                                itemsDistribuidorStrong.append(itemsDistribuidorBack)

                                const data = document.getElementById('data')
                                data.appendChild(itemsIdH4)
                                data.append(itemsItemStrong)
                                data.append(itemsDistribuidorStrong)
                            })
                        })
                        .catch(err => alert('error:' + err))
            }

            function likePage() {
                    const msg = 'Espero que esteja gostando da nossa página! Volte sempre! ;)'
                    alert(msg)
            }

            document.onclick = addEventListener('click', ()=>{
                    likePage()
            })

           document.onload = addEventListener('load',()=>{
                    requestData()
           })
           
           document.body.onload = addEventListener('load',()=>{
                    document.body.style.cursor = 'pointer'
           }) 
        </script>
    </body>
</html>
