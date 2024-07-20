function fun(action)
        {
            const inputText=document.getElementById("btn1")
            const result=document.getElementById("info")
            const image=document.getElementById("img")
            if(action == '2020')
        {
            result.innerText="Codex, a renowned organization, has been influential in various sectors since its establishment.";
        }
        else if(action== '2021')
        {
            result.innerText="1000+ students enroll to our course ";
            image.src="./../images/course-img-2.PNG"
        }
        else if(action== '2022')
        {
            result.innerText="100+ students got placement in IT companies";
            image.src="./../images/course-img3.PNG"
        }
        else if(action== '2023')
        {
            result.innerText="1000+ students got placement in IT companies";
            image.src="./../images/course-img4.PNG"
        }
    }