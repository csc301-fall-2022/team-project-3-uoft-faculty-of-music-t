# Cello Exercise Index
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

One main problem that cellists have encountered for a long time is wasting time and money on finding great resources for practicing cello. For instance, students need to find good cello teachers for having 1-on-1 lessons while teachers have difficulty in finding the teaching materials. 

To solve this inconvenient situation, we are planning to create an website called, **“Cello Exercise Index”**, in which anyone who plays cello can easily find exercises that are suitable for their levels and interests. 

[**Check Our Mock up!**](https://www.figma.com/file/BcjEF5YitgXXXUJx7p4tHs/CSC301-Cello-Index-Website?node-id=0%3A1)
(If you can't access the link, you can check the image uploaded in the folder, _deliverable-1_.)

------------------------------------------------------

#### Q2: Who are your target users?

Our main target users are cello teachers and self-motivated cello students. Cello students who are serious about improving their technical skills on the cello and are looking for cello exercises to play through will find our website beneficial. These students can be beginners to advanced players; our database has exercises for every level of playing. Cello teachers, more likely teachers earlier in their career of teaching, who are looking to provide and recommend new cello technical books to students to complement and enhance their lessons will also find our website to be valuable and serve this need well.

------------------------------------------------------

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Currently, there are many books containing valuable technical exercises for the Cello, but discovering and navigating through them is difficult and cumbersome. Performers, students and teachers of an instrument know what technical skills they or their student has a lack of ability in, and technical books are an asset that can help improve their skills. As the website will contain a collection of Cello technical books and their corresponding exercises, which will have tags such as “trills” or “scales”, etc. and page numbers associated with each exercise, cellists will be able to filter and search for specific types of exercises quickly.

For self-motivated Cello students, having the ability to discover exercise books conveniently from online means that they do not have to access a Cello teacher in order to know what exercise books to get, saving them money. Even if they do have teachers, they will always be able to find new resources quickly and easily if they are looking for more ways to improve their playing. For Cello teachers, if a student is struggling with a technical skill on the Cello and they are looking for exercise books to complement their teaching, teachers will be able to quickly find an exercise book for that skill.

https://imslp.org/ is a large digital music library containing public domain music scores, works and recordings. It allows users to view a list of only Cello exercise books but navigating to this page is not very clear and confusing. It also does not allow users to filter the list of books into specific types of exercises. The way our website will differ and bring value that imslp does not, is to have a simple and easily navigable UI, and a detailed filtering system to fit each Cellists’ needs.

------------------------------------------------------

#### Q4: How will you build it?

This will be a simple website with a client-side component, a server-side component, and a database.

For the frontend of the website, we will use the React JavaScript library, as it is what our team has the most experience with. As for the backend implementation, we will use Python with the Django library with SQL to manage the database. The everything will then be deployed on the web using Heroku, which we will integrate with GitHub to deploy automatically.

At this phase we do not anticipate that we will be using any third party applications or APIs. However this is prone to change if we decided later down the line to add functionality to the site.

The site will be tested on multiple devices and browsers to ensure that there are no compatibility issues. In addition, we will test the performance and the sorting functionalities thoroughly to make sure that it is seamless, efficient, and can handle a large number of excercises in the database. Once a minimum viable product has been produced, we can invited potential users to try using the site and provide feedback on its usability.

------------------------------------------------------

#### Q5: What are the user stories that make up the MVP?

:bangbang: **Proof that the partner has agreed with our user stories** can be found in the deliverable-1 folder. 


|User Story| Acceptance Criteria|
| -------- | ------------------ |
|As a self-motivated student of the Cello, I want to search or filter for particular technical skills in order to get details about exercises that target the technical skills I want to improve on.| Given I’m a self-motivated student of the Cello and I’m on the book details page that contains the list of Cello exercises for a particular book, when I use the filtering system by selecting the tags/options listed, then only the exercises that match the tags/options will be listed on the page.|
|As a Cello teacher, I want to find and recommend exercise books to students that will help them to improve on particular technical skills on the Cello.|Given I’m a Cello teacher and I’m on the main page that contains the list of Cello exercise books, when I use the filtering system by selecting the tags/options listed, then only the books that contain exercises that match the tags/options will be listed on the page.|
|As a Cello student or teacher who wants to buy or download exercise books, I want to be able to see and click on a link for the book which will direct me to a page where I can download or purchase the book.|Given I’m a Cello student or teacher and I’m on the main page that contains the list of Cello exercise books, when I click on a particular book, then I will be directed to the book details page that contains the metadata for the book including the link to another website where I can purchase or download the book.|
|As an advanced or intermediate Cello student that has valuable analysis or tips for a particular exercise, I want to be able to leave a comment on the exercise to share my insights to help other students who may find it useful.|Given I’m a Cello student and I’m on the exercise details page, when I click on the “Add a comment” button and submit a comment, then the comment will be displayed on the page along with other comments that may have already been added to the exercise, allowing for communication with other users.|
|As a cellist who has a passion for sharing and creating music, I want to be able to provide different resources so that other people will be able to find my exercises.|Given I’m a cellist who wants to make contribution to the Cellist community and I’m on the main page of the website, when I click the button called, “Want to add exercises?”, then I will be directed to the New Exercise Details page in which I can fill out the information related to the exercise that I want to share. After filling out the information, if I click “Request this Exercise” button, then the detail will be sent to the admin and I will be redirected to the main dashboard. |

----
## Intellectual Property Confidentiality Agreement 

**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

:memo: **Answer** :memo:

Our team and partner have agreed to the first option: **_"You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use"_**.


----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

### List of Role (Responsibility)
- Frontend Developer (React components)
- Frontend Developer (User interface/experience)
- Backend Developer (Database manager/designer)
- Backend Developer (Server-side programming)
- Coordinator (To handle biweekly meetings with partner)

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)

| Member | Role(s) & Responsibilities | 3 technical strengths | 3 technical weaknesses |
| ------------- | ------------- | ------------- | ------------- |
| Rebecca Nhan   | Backend Developer (database design/management)     |  <ul><li>database & database design</li> <li>Python</li> <li>Javascript</li></ul>  |  <ul><li>Frontend (React)</li> <li>Mobile Development</li> <li>Responsive Web Development</li></ul> |
| Eunchae (Rachel) Seong | Backend Developer (database design, server-side) & Coordinator    |  <ul><li>Python</li> <li>React</li> <li>Mobile Development (React Native, Android)</li></ul>  | <ul><li>Django</li> <li>CSS</li> <li>Cloud Services</li></ul> |
| Eren Findik  | Backend Developer (Database manager/designer) |  <ul><li>SQL </li> <li>Python (Psycopg for database)</li> <li>Java/C++</li></ul>  | <ul><li>Django</li> <li>React</li> <li>Web Development</li></ul> |
| Franklin Yeung | Frontend Developer |  <ul><li>Python</li> <li>HTML+CSS</li> <li>Java</li></ul>  | <ul><li>React</li> <li>Javascript</li> <li>Cloud</li></ul> |
| Benjamin Lee  | Backend Developer |  <ul><li>JavaScript, HTML, CSS</li><li>Responsive Web design (Bootstrap, flexbox, media query)</li> <li>Python syntax</li> </ul>  | <ul><li>React</li> <li>Django</li> <li>Databases</li></ul> |
| Mark Hu  | Frontend Developer |  <ul><li>Python</li> <li>Java</li> <li>Data persistence</li></ul>  | <ul><li>Mobile Development</li> <li>C</li> <li>Backend</li></ul> |
| Junseo Moon | Frontend Developer (React components and UI) |  <ul><li>React</li> <li>Python</li> <li>Javascript</li></ul>  | <ul><li>Django</li> <li>Database Design</li> <li>C</li></ul> |
 
------------------------------------------------------

#### Q7: What operational events will you have as a team?

We will have weekly team meetings on Discord Voice Channel (Zoom if there is a problem) on Saturdays. The regular meeting will start at 1:00 p.m. We try to plan meetings when most members are able to attend, and leave notes for those who cannot make it. In each meeting, we want to update everyone with the information from the project partner and address any questions. Then, each team can report their progress and discuss any concerns or difficulties they encounter. We can set expectations and make accommodations if needed.
 
We have had 2 meetings with the project partner on Zoom. We have discussed the outline of this project and presented the user stories and design mockups. We also discussed details on how the provided data should be managed and organized. After the first meeting, we learned what our partner wants and how the data works. After the second meeting, we have the user stories and design mockups approved with some feedbacks for further improvement. 
 
**Meeting minutes:**
 
* Week of Sep 19: about 45 minutes
* Week of Sep 26: about 30 minutes
 
Our regular meeting schedule is on Thursday mornings at 11:00 a.m.
  
------------------------------------------------------
 
#### Q8: What artifacts will you use to self-organize?

For every meeting we have with ourselves, or with the partner, in order to document our discussions, we will create a meeting document, where a designated note taker will take notes during the meeting. We will try to have a checklist of what items we should talk about in the meeting document before going into the meeting so that our time can be used productively. 
 
In terms of organizing tasks, we will use Trello. In the Trello board, we will create task items and distribute them into 3 columns (lists): “To-do”, “In-Progress” and “Completed” to track the progress of the tasks (from inception to conception). We will most likely organize the project into sprints, in which tasks will be prioritized by what needs to be finished in the current sprint or by deadlines in the course. In general, items that depend on the backend team to complete for the frontend team to progress and vice versa should be prioritized so that we minimize the time that people may be blocked in impacting the website. 

In terms of assigning tasks, for every sprint, we will designate a meeting time for sprint planning where we talk about the items we should complete for the current sprint, and assign tasks equally to every team member.

 ------------------------------------------------------
 
#### Q9: What are the rules regarding how your team works?

**Communications:**

 Discord is used for text discussion and weekly voice chat meetings. Meetings between all members are expected to be weekly. Text discussion is held between meeting times whenever it is needed to discuss a topic. A Discord webhook is set to Discord to notify members when an action is done on Github, so team members can check and discuss commits/pull requests in Discord as well.

Communication with our partner is done through email. A meeting is held on Zoom between Alan, Rachel, Mark and our partner every other Thursday.

**Meetings:**

 Currently, we are running on an honor system - if someone says they are going to do something, they are expected to do it. However, if someone ends up missing meetings and not completing action items for no valid reason, someone from our group will send them a message inquiring about it. If it keeps happening for no valid reason, conversation will happen with the TA.

----
## Highlights

1) While figuring out our tech stack, we were deciding between Node (with Express) and Django for our backend, since those were the two that those on our team had some experience on. For Node, we thought that it would be easier to work with since our front end is React. For Django, we thought it would be a good choice since multiple of our members are taking CSC309 and would thus acquire more in depth experience with Django than React through university projects. We ended up going with Django as it made more sense to go with the option that more people in our team will eventually be comfortable using.
2) We had multiple discussions on whether or not we should embed a PDF for each exercise into their respective exercise page. The for argument, was that it would help students be able to easily access their exercise from the page without any hassle. The against argument was that it would be too difficult to get all the exercise pages (since we would have to do it manually, and all of them may not even exist on the internet) and we may also run into copyright issues. We decided in the end to not embed a pdf, however to have a link to the book on IMSLP (to freely download it) or where they can purchase the book. This will help users be able to quickly find the book they need, without our team running into copyright issues and manually looking for the pages online.
3) Another decision we made was where we should hold our conversations. Several options that came up but the larger ones were Microsoft Teams and Discord. For Teams, that would be good since it is directly connected to our university accounts and we would also be able to schedule meetings with delivered notifications to our university email. For Discord, we would be able to create a Github to Discord webhook to easily notify members about actions on Github, and we could split the channels for better organization. As well, a lot of our team members frequently use Discord so it would be more checked than Microsoft Teams would. Discord ended up being the better option, as we would be able to easily pin tasks that needed to be done which would ease the task delegation process to each member, and have a Github to Discord webhook to notify team members of Github activity.
