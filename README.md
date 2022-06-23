# AssignmentSolution

***
I am halfway there. The progress so far:-
1) implemented routing for your, blocked and all tabs using react router dom v6
2) used css flexbox for aligning the items inside card
3) used css grid for the layout of cards in page for two columns per row layout
4) used styled components package for styling
5) used react icons for the icons, could not find the exact icons as in design, so used the closest ones
6) used customised styling using Dots for grey,green and red dots.
7) using json-server package for creating the api url endpoint for all datas, used 31 different users for at least three pages so that I can account for infinite scroll paginatio for which I am planning to use react query
8) Also the filter part is left for which I will use some state management most probably redux.
9) used postman to test the mock api url to check if all data is coming
10) I am using react router v6 package to get the query parameter value for the your tab 
11) By passing specific query parameter keys like owner_id specific values of owners can be obtained like given in screenshot which will help in the your tab
12) The infinite scroll pagination is done using useInfiniteQuery from react-query package
13) So the filter part is remaining now

I am sharing some screenshots related to development process that I had taken.
***

## Commands to follow to run the app

***
Clone the repository
***
> git clone https://github.com/anutosh097/AssignmentSolve.git


***
Make sure node is installed. Install all the packages and dependencies by running "npm install".
***
> npm install

***
1) Install the "json-server" package for creating the mock api url with the json format provided using "npm install -g json-server"
2) Create a db.json file under project directory and create all data needed using given json format inside the file.
3) Open a terminal from your code editor or gitbash or command prompt and navigate to project directory. Run "json-server --watch db.json"
***
> npm install -g json-server

***
After ensuring all required data is added to db.json file under project directory, navigate to project directory and run "json-server --watch db.json". You can refer the db.json file under project directory for the json format.
*** 
>json-server --watch db.json

***
Once this is done you can navigate to [http://localhost:3000/data](http://localhost:3000/data) on browser for seeing all data. You can also test this mock api url using postman using GET method to ensure all data is is coming properly as expected. You can use query parameters as well like "?owner_id=value" for getting specific data or use ids after the url like "http://localhost:3000/data?owner_id=1" for getting specific data whenever needed as you will see is used in your tab.
***


***
Open another terminal for starting the react server while still running the json mock server. Run "npm start" to start the react server. Since port 3000 is already occupied, you will be asked for starting the server on another port in terminal. Type y or yes and  hit enter. That's all!! Both your json mock server and react server are running simultaneously. Go to [http://localhost:3001/](http://localhost:3001/).
***
>npm start

***
Enjoy!! Ideally you can split the terminal into three and have three open simultaneously, one for running json mock api server, one for react server, and another for installing packages or dependencies.
***

***using useInfiniteQuery from react query in achieving infinite scroll pagination for fetching 10 items per page, api calls for fetching 10 items per page as recorded in network tab of chrome deveoper tools***
![Screenshot (193)](https://user-images.githubusercontent.com/81863474/175096272-0210fbf5-2698-452e-8cde-8ab9d94bc582.png)


![Screenshot (194)](https://user-images.githubusercontent.com/81863474/175096279-323863da-0bc9-40b8-a526-630bbd34f506.png)


![Screenshot (190)](https://user-images.githubusercontent.com/81863474/175096281-80af62ef-654c-4dcc-bc67-5aa2d3218e86.png)


![Screenshot (191)](https://user-images.githubusercontent.com/81863474/175096284-c2e4da2c-055f-4ce9-9820-ef0af68beb96.png)


![Screenshot (192)](https://user-images.githubusercontent.com/81863474/175096286-3e0b8f13-17a4-4adf-bd60-fa58a4624937.png)


***shadow of cards fixed***


![Screenshot (185)](https://user-images.githubusercontent.com/81863474/174430257-26ca1ccf-b5c8-4ce9-8a8c-7a987a189bbe.png)


***text for card type of subscription fixed***


![Screenshot (175)](https://user-images.githubusercontent.com/81863474/174139833-4e83af74-2ecd-4918-b0aa-ecb4d07e68fc.png)

![Screenshot (167)](https://user-images.githubusercontent.com/81863474/174088162-a3cd4590-0744-4971-ae25-4e0b7548ab1e.png)

![Screenshot (168)](https://user-images.githubusercontent.com/81863474/174088174-8638ebac-a31a-4c73-a6f3-1a9b2c14b8bf.png)

![Screenshot (169)](https://user-images.githubusercontent.com/81863474/174088178-7bac251e-4655-47f9-a740-54f1d9a8aadb.png)

![Screenshot (132)](https://user-images.githubusercontent.com/81863474/174088313-9b3feff1-9bf0-48ff-8942-9ad220420f72.png)

![Screenshot (128)](https://user-images.githubusercontent.com/81863474/174088315-c218403b-65e2-4314-9f6e-342782026554.png)

![Screenshot (129)](https://user-images.githubusercontent.com/81863474/174088318-21cbe56f-5530-4455-a4bc-e788e0973e54.png)

![Screenshot (130)](https://user-images.githubusercontent.com/81863474/174088322-ec20dec5-180e-48a4-a8bf-31bcfd3b5e96.png)

![Screenshot (131)](https://user-images.githubusercontent.com/81863474/174088326-c225601c-96a6-443a-9779-b88d985e636e.png)

![Screenshot (170)](https://user-images.githubusercontent.com/81863474/174088180-36583f9f-b974-44b9-9ab9-46993403f15f.png)

![Screenshot (171)](https://user-images.githubusercontent.com/81863474/174088181-59c46db3-cf2e-4ebb-977d-e0f8717f981f.png)

![Screenshot (172)](https://user-images.githubusercontent.com/81863474/174088183-952a4251-0ca7-4f1e-ad4b-5d72eaac89d6.png)

![Screenshot (173)](https://user-images.githubusercontent.com/81863474/174088186-b0f79088-91ac-4c26-b71e-0c8a32990501.png)

![Screenshot (174)](https://user-images.githubusercontent.com/81863474/174088189-d7145d3c-764e-43c5-afba-e35f7f36215f.png)

![Screenshot (133)](https://user-images.githubusercontent.com/81863474/174088193-da95f20d-4148-44b9-b8d9-b7bca0cdf746.png)

![Screenshot (134)](https://user-images.githubusercontent.com/81863474/174088195-f6df37aa-c026-48f8-8ae9-59710ad9dabe.png)

![Screenshot (135)](https://user-images.githubusercontent.com/81863474/174088196-f14ea87e-b2a6-426d-b70c-efd6de77c1a4.png)

![Screenshot (136)](https://user-images.githubusercontent.com/81863474/174088200-4ab8b3fe-46fd-4fd7-abf0-88d3d0926223.png)

![Screenshot (137)](https://user-images.githubusercontent.com/81863474/174088201-e709a577-7a4c-46ae-bedb-118b0c147c4e.png)

![Screenshot (138)](https://user-images.githubusercontent.com/81863474/174088204-1e61e711-5841-4b27-8539-fe85179bb2a2.png)

![Screenshot (139)](https://user-images.githubusercontent.com/81863474/174088208-8f7c54aa-731c-4304-a3cb-dd2e217ddd08.png)

![Screenshot (140)](https://user-images.githubusercontent.com/81863474/174088210-ae3f745a-d8c5-472b-9ae3-053ece30982a.png)

![Screenshot (141)](https://user-images.githubusercontent.com/81863474/174088215-1345c1a6-0bb0-4cb9-9735-bf3755938199.png)

![Screenshot (142)](https://user-images.githubusercontent.com/81863474/174088218-8893bee0-4223-4bde-9a2c-c1f46a6b050e.png)

![Screenshot (143)](https://user-images.githubusercontent.com/81863474/174088223-8c19e79b-0124-403a-9e5d-41af35a92321.png)

![Screenshot (144)](https://user-images.githubusercontent.com/81863474/174088228-5d726425-b0aa-4846-a5cb-f19b701bdab3.png)

![Screenshot (145)](https://user-images.githubusercontent.com/81863474/174088233-9d4ed34f-dc91-4edc-8e71-16ffc85c4076.png)

![Screenshot (146)](https://user-images.githubusercontent.com/81863474/174088236-030deebc-78b2-4e5c-b7ad-1cd98409433e.png)

![Screenshot (147)](https://user-images.githubusercontent.com/81863474/174088239-ba916f2f-c112-4d8f-854a-85392f1a6ede.png)

![Screenshot (148)](https://user-images.githubusercontent.com/81863474/174088242-08b7a123-3edd-431e-97ec-83b53c748826.png)

![Screenshot (149)](https://user-images.githubusercontent.com/81863474/174088245-55c074fd-c014-408a-bd6c-a1e661cc7a30.png)

![Screenshot (150)](https://user-images.githubusercontent.com/81863474/174088248-8d0d3ac1-90c7-4080-afaa-ef3813630f3c.png)

![Screenshot (151)](https://user-images.githubusercontent.com/81863474/174088252-e55faf58-8814-461d-bd58-083c34dc0cd7.png)

![Screenshot (152)](https://user-images.githubusercontent.com/81863474/174088253-688afdb7-4fcd-4d89-b18e-70b7cb1c56b7.png)

![Screenshot (153)](https://user-images.githubusercontent.com/81863474/174088255-1caf4dee-383a-476d-b5cb-a1fcbfdb9068.png)

![Screenshot (154)](https://user-images.githubusercontent.com/81863474/174088257-c4e5e38c-0736-4153-867b-efed05a3d7d3.png)

![Screenshot (155)](https://user-images.githubusercontent.com/81863474/174088261-be9b5efc-2020-46d5-b190-c9c333b4db08.png)

![Screenshot (156)](https://user-images.githubusercontent.com/81863474/174088265-ea026f04-9429-4e4d-9b39-f3383a2c09ea.png)

![Screenshot (157)](https://user-images.githubusercontent.com/81863474/174088267-9af79020-aa29-44fa-b0f2-a22f02fe6b81.png)

![Screenshot (158)](https://user-images.githubusercontent.com/81863474/174088271-021cd769-7b69-4c36-8883-4a7e2b9e40e9.png)

![Screenshot (159)](https://user-images.githubusercontent.com/81863474/174088274-388a896e-aac3-47e2-a88a-11e8ec9e4821.png)

![Screenshot (160)](https://user-images.githubusercontent.com/81863474/174088275-01e8c64e-4e6a-4838-a739-ae55cbb2b193.png)

![Screenshot (161)](https://user-images.githubusercontent.com/81863474/174088278-cc57b364-7aa4-41ce-a5fe-619039829e38.png)

![Screenshot (162)](https://user-images.githubusercontent.com/81863474/174088280-a5c9eb82-ab82-41d8-a674-96bec70baad3.png)

![Screenshot (163)](https://user-images.githubusercontent.com/81863474/174088285-82e34499-1644-4162-9702-f0d873010938.png)

![Screenshot (164)](https://user-images.githubusercontent.com/81863474/174088288-2d32ce18-52be-48c8-bf03-ff9eb2344276.png)

![Screenshot (165)](https://user-images.githubusercontent.com/81863474/174088294-ac2d6176-760e-4d7c-841f-d03c63eba5c5.png)

![Screenshot (166)](https://user-images.githubusercontent.com/81863474/174088297-a5c4533e-2142-4357-9b25-5b637ad1b2b1.png)
